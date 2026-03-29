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

  var year = req.params.year;
  var month = req.params.month;
  var day = req.params.day;
  var title = req.params.title;
  var organization = req.query.organization;

  var file = "/" + year + "/" + month + "/" + day + "/" + title;

  var posts_sql = "SELECT * FROM posts WHERE file LIKE '%" + file + "%'";
  connection.query(posts_sql, function (error, posts, fields) { 

    var totalPages = 1;

    var meta = {};
    meta.limit = 1;
    meta.page = 0;
    meta.totalPages = 1;

    var response = {};
    response.meta = meta;
    response.data = posts[0];
    response.posts_sql = posts_sql;
    response.params = req.params;
    response.error = error;
    
    resp.send(response);    
    
  }).on('error', err => {
    resp.send(err);
  });                         

})

router.put('/', jsonParser, function (req, resp) {
  
  var year = req.params.year;
  var month = req.params.month;
  var day = req.params.day;
  var title = req.params.title;
  var organization = req.query.organization;

  var file = "/" + year + "/" + month + "/" + day + "/" + title;
  var change_name = req.query.name;
  var change_description = req.query.description;

  var post = req.body; 
  
  var changes_sql = "SELECT * FROM post_changes WHERE postId = '" + file.replaceAll("/", "-") + "'";
  connection.query(changes_sql, function (error, changes, fields) {   

    if(changes){   
      var change_count = changes.length + 1;
    }
    else{
      var change_count = 0;
    }

    var key = 'posts.yml';
    var path = key;
    const params = {
      Bucket: bucket,
      Key: key, 
    };
  
    const streamToString = (stream) =>
      new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      });  
  
    const command = new GetObjectCommand(params);
  
    client.send(command).then(
      (data) => { 
  
        streamToString(data.Body).then(
          (body) => {                      
              
            var last = yaml.load(body);
            var latest = last;            

            for (let i = 0; i < last.length; i++) {
              if(latest[i].slug == post.slug){
                latest[i] = post;
              }
            }     
                    
            // Begin Write Latest

            // update s3 current
            var params = {
                Bucket : bucket,
                Key : key,
                Body : yaml.dump(latest)
            };

            const put_command = new PutObjectCommand(params);

            client.send(put_command).then(
              (put) => {        
                                         
            
              // update database
              var update_posts = "UPDATE posts SET changes = 1,title = " + connection.escape(post.title) + ",body = " + connection.escape(post.body) + ",post = " + connection.escape(JSON.stringify(post)) + " WHERE file LIKE '%" + file.replaceAll("/", "-") + "%'";
              connection.query(update_posts, function (error, changes, fields) {                   

                // insert change    
                var insert_changes = "INSERT INTO post_changes(postId,title,description,file) VALUES (" + connection.escape(postId) + "," + connection.escape(change_name) + "," + connection.escape(change_description) + "," + connection.escape(file.replaceAll("/", "-")) + ")";
                connection.query(insert_changes, function (error, changes, fields) {                                                   

                  var response = {};
                  response.changes = changes;
                  response.change_count = change_count;
                  response.path = path;
                  response.update_posts = update_posts;
                  response.insert_changes = insert_changes;
                  resp.send(response);                       

                }).on('error', err => {
                  resp.send(err);
                });  
                // End insert change

              }).on('error', err => {
                resp.send(err);
              });  
              // End Update Database     

          },
          (error) => {
            resp.send(error);
          }
          );                           
          // End Write Last

        },
        (error) => {
          resp.send(error);
        }
        );            
        // End Write Latest

      },
      (error) => {
        resp.send(error);
      }
    );                 

  }).on('error', err => {
    resp.send(err);
  });     

});

module.exports = router;