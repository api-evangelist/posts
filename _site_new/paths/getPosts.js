const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router({ mergeParams: true });
const mysql = require('mysql');
const yaml = require('js-yaml');
const store = require('../../store/keys.json');
var github_token = store.github_token;
const common = require('../../libraries/common');

var jsonParser = bodyParser.json();  

var connection = mysql.createConnection({
  host     : store.api_search_database_host,
  database : store.api_search_database_database,
  user: store.api_search_database_user,
  password: store.api_search_database_password
  });

  const client = new S3Client({ 
    region: "us-east-1", 
    credentials: {
        accessKeyId: store.aws_access_key,
        secretAccessKey: store.aws_secret_key
    }});  

router.get('/', (req, resp)=>{ 

  var organization = req.query.organization;
  var search = req.query.search;
  var searchFields = req.query.searchFields; 

  var limit = req.query.limit;
  if(limit){
    if(limit == ''){
      limit = 250;
    }
  }
  else{
    limit = 250;
  }

  var page = req.query.page;
  if(page){
    if(page == ''){
      page = 0;
    }
  }
  else{
    page = 0;
  }

  var count_sql = "SELECT count(title) as postCount FROM posts WHERE title IS NOT NULL";
  if(search){
    count_sql += " AND (";  
    var first = 0;    
    if(searchFields.includes("title")){
      count_sql += "title LIKE '%" + search + "%'";
      first = 1;
    }
    if(searchFields.includes("body")){
      if(first == 1){ count_sql += " OR "; }
      count_sql += "body LIKE '%" + search + "%'";
    }
    if(searchFields.includes("tags")){
      if(first == 1){ count_sql += " OR "; }
      count_sql += "tags LIKE '%" + search + "%'";
    } 
    count_sql += ")";           
  }    
  connection.query(count_sql, function (error, total, fields) { 

    var posts_sql = "SELECT * FROM posts WHERE title IS NOT NULL";
    if(search){
      posts_sql += " AND (";  
      var first = 0;    
      if(searchFields == 'title' || searchFields.includes("title")){
        posts_sql += "title LIKE '%" + search + "%'";
        first = 1;
      }
      if(searchFields.includes("body")){
        if(first == 1){ posts_sql += " OR "; }
        posts_sql += "body LIKE '%" + search + "%'";
      }
      if(searchFields.includes("tags")){
        if(first == 1){ posts_sql += " OR "; }
        posts_sql += "tags LIKE '%" + search + "%'";
      } 
      posts_sql += ")";           
    }    
    posts_sql += " ORDER BY file DESC";
    posts_sql += " LIMIT " + page + "," + limit;
    connection.query(posts_sql, function (error, posts, fields) { 

      var totalRecords = total[0].postCount;
      var totalPages = Math.round(totalRecords/limit);

      var meta = {};
      if(search){
        meta.search = search;
      }
      //meta.limit = limit;
      //meta.page = page;
      //meta.totalRecords = totalRecords;
      //meta.totalPages = totalPages;
      //meta.count_sql = count_sql;
      meta.searchFields = searchFields;
      meta.posts_sql = posts_sql;

      var response = {};
      response.meta = meta;
      response.data = posts;
      
      resp.send(response);    
      
    }).on('error', err => {
      resp.send(err);
    });         
  }).on('error', err => {
    resp.send(err);
  });                   

});

router.post('/', jsonParser, (req, resp)=>{ 

  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // month is zero-based
  let dd = today.getDate();

  var bucket = 'api-evangelist';  
  var organization = req.query.organization;
  var post = req.body;   

  var check_post_sql = "SELECT * FROM posts WHERE name = " +  connection.escape(post.name);
  connection.query(check_post_sql, function (error, exists, fields) {                   

    if(exists.length > 0){
      //Already Exists
      post.message = 'Already Exists!';
      resp.send(post);
    }
    else{

      post.layout = 'post';
      post.title = post.title.trim();
      post.image = 'https://example.com/images.jpg';
      post.author = {};
      post.author.name = 'kinlane';
      post.tags = ['New'];

      var base_file_name = yyyy + '-' + mm + '-' + dd + '-' + common.slugify(post.title) + '.markdown';
      var file_name = '/laneworks/api-evangelist/website/_posts/' + base_file_name;

      var markdown_post = '---\r\n' + yaml.dump(post) + '---\r\n' + post.body.trim();

      var insert_post_sql = "INSERT INTO posts(title,body,file,post) VALUES";
      insert_post_sql += "(" + connection.escape(post.name) + "," + connection.escape(post.description) + "," + connection.escape(file_name) + "," + connection.escape(JSON.stringify(post)) + ")";
      connection.query(insert_post_sql, function (error, insert_results, fields) {     
              
        post.id = insert_results.insertId;

        var github_url = 'https://api.github.com/repos/' + organization + '/posts/contents/_posts/' + base_file_name;

        var c = {};
        c.name = "Kin Lane";
        c.email = "kinlane@gmail.com";

        var m = {};
        m.message = 'Writing New Rule';
        m.committer = c;
        m.content = btoa(markdown_post);

        const options = {
          method: 'put',
          headers: {
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Authorization": 'Bearer ' + github_token                
          },
          body: JSON.stringify(m)
        };                    
        
        fetch(github_url,options)
          .then(function(response) {
              if (!response.ok) {      
                
                var key = 'posts/posts/' + base_file_name;
                var params = {
                  Bucket : bucket,
                  Key : key,
                  Body : markdown_post
                };

                const put_command = new PutObjectCommand(params);
          
                client.send(put_command).then(
                  (put) => {  

                    var status = response.status;  
                    var m = {};
                    m.status = status;
                    //m.github_url = github_url;                         
                    //m.options = options;    
                    //m.insert_post_sql = insert_post_sql;
                    m.post = post;    
                    resp.send(m);                      
                    
                },
                (error) => {
                  resp.send("1");
                }
                );

              }
              response.json().then(function(data) { 

                var key = 'posts/posts/' + base_file_name;
                var params = {
                  Bucket : bucket,
                  Key : key,
                  Body : markdown_post
                };
          
                const put_command = new PutObjectCommand(params);
          
                client.send(put_command).then(
                  (put) => {                                                       
                    
                    var m = {};
                    //m.github_url = github_url;                         
                    //m.options = options;    
                    //m.insert_post_sql = insert_post_sql;
                    m.post = post;    
                    //m.data = data; 
                    //m.insert_results = insert_results;
                    resp.send(m);                      
                    
                },
                (error) => {
                  resp.send("2");
                }
                );

              });
            })
            .catch(function(err) {
                console.log('Error: ' + err);            
                resp.send(err);                     
          });                 

      }).on('error', err => {
        resp.send(err);
      }); 

    }      

  }).on('error', err => {
    resp.send(err);
  });  
        
});

module.exports = router;