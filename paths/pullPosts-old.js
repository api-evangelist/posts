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

  var organization = req.query.organization;

  var config_path = '/laneworks/api-evangelist/config/post-count.json';
  var config_file = fs.readFileSync(config_path, 'utf8');
  var config = JSON.parse(config_file);
  var config_count = config.count;
  
  var root = "/laneworks/api-evangelist/website/_posts";

  var file_count = 1;
  
  var all_files = [];
  var post_sql = " INSERT INTO posts(title,image,body,tags,posted,file,post) VALUES";
   
  fs.readdir(root, function (err, files) {
  
    if (err) {
      //console.error("Could not list the directory.", err);
      process.exit(1);
    }
  
    files.forEach(function (file, index) {
      
      var fromPath = path.join(root, file);      
      
      //console.log(fromPath);   
      //all_files.push(fromPath);      
          
      if(file_count == config_count){

        if(file_count < files.length){

          //resp.send(fromPath);
    
          var file_array = fromPath.replace("/laneworks/api-evangelist/website/_posts/","");
          var posted_array = file_array.split("-");
          var posted = posted_array[0] + '-' + posted_array[1] + '-' + posted_array[2];
          
          var this_file = fs.readFileSync(fromPath, 'utf8');
          
          var post_array = this_file.split("---");
          var post_yaml = post_array[1];

          var post_body = post_array[2];
          var post = yaml.load(post_yaml);        

          if(post.tags){
            var post_tags = post.tags.join(',');
          }
          else{
            var post_tags = '';
          }
                
          post_sql += "(" + connection.escape(post.title) + "," + connection.escape(post.image) + "," + connection.escape(post_body) + "," + connection.escape(post_tags) + "," + connection.escape(posted) + "," + connection.escape(fromPath) + "," + connection.escape(this_file) + ")";
          
          connection.query(post_sql, function (error, results, fields) {
            
            config.count = config_count + 1;

            var this_config = JSON.stringify(config);

            //resp.send(results);   

            fs.writeFileSync(config_path, this_config, (err) => {});          

            var m = {};
            m.fromPath = fromPath;
            m.file_count = file_count;
            m.config_count = config_count;
            //m.post_sql = post_sql;
            m.file_length = files.length;
            m.results = results;
            resp.send(m);             
            
          }).on('error', err => {
            resp.send(err);
          });   
          
        }   
        else{
          var m = {};
          m.message = 'DONE';
          resp.send(m);
        }        

      }   
      
      file_count++;
      
    });
    
  
  });


})

module.exports = router;