const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const express = require('express');
const mysql = require('mysql');
const yaml = require('js-yaml');
const router = express.Router();
const store = require('../../store/keys.json');
var fs = require('fs');
var path = require('path');
var github_token = store.github_token;
const common = require('../../libraries/common');

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

  var post_path = '/laneworks/api-evangelist/config/post-processing.json';
  var post_file = fs.readFileSync(post_path, 'utf8');
  var process_post = JSON.parse(post_file);  
  var processed_one = 0;
  for (let i = 0; i < process_post.length; i++) {
    if(process_post[i].processed == 0 && processed_one == 0){

      processed_one = 1;

      var posted_array = process_post[i].path.split("/");
      var posted = posted_array[1] + '-' + posted_array[2] + '-' + posted_array[3] + '-' + posted_array[4];      
      var date_posted = posted_array[1] + '-' + posted_array[2] + '-' + posted_array[3];

      var local_post_path = '/laneworks/api-evangelist/posts/_posts/' + posted + '.md';
      var post_markdown = fs.readFileSync(local_post_path, 'utf8');
      
      var post_array = post_markdown.split("---");
      var post_yaml = post_array[1];
      var post_body = post_array[2];
      var post = yaml.load(post_yaml); 

      if(post.tags){
        var post_tags = post.tags.join(',');
      }
      else{
        var post_tags = '';
      }

      var post_sql = " INSERT INTO posts(title,image,body,tags,posted,file,post) VALUES";
      post_sql += "(" + connection.escape(post.title) + "," + connection.escape(post.image) + "," + connection.escape(post_body) + "," + connection.escape(post_tags) + "," + connection.escape(date_posted) + "," + connection.escape(process_post[i].path) + "," + connection.escape(post_markdown) + ")";          
      connection.query(post_sql, function (error, results, fields) {
            
        process_post[i].processed = 1;
        var this_config = JSON.stringify(process_post);
        fs.writeFileSync(post_path, this_config, (err) => {});          

        var m = {};
        m.path = process_post[i].path;
        m.post_sql = post_sql;
        m.config_count = i;
        m.results = results;
        resp.send(m);             
        
      }).on('error', err => {
        resp.send(err);
      });

    }
    
  }  
  if(processed_one == 0){
    var m = {};
    m.message = 'DONE';
    resp.send(m);
  }

})

module.exports = router;