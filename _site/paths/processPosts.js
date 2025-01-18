const express = require('express');
const router = express.Router();;
var fs = require('fs');
const common = require('../../libraries/common');
const mysql = require('mysql');
const store = require('../../store/keys.json');

var connection = mysql.createConnection({
  host     : store.api_search_database_host,
  database : store.api_search_database_database,
  user: store.api_search_database_user,
  password: store.api_search_database_password
  });

router.get('/', (req, resp)=>{ 

  var post_url = "https://apievangelist.com/post.json";

  const options = {
    method: 'get'
  };  

  fetch(post_url,options)
    .then(function(response) {
        if (!response.ok) {
            resp.send(response.status);
        }
        response.json().then(function(data) {   

          for (let i = 0; i < data.length; i++) {
            data[i].processed = 0;
          }

          var post_sql = "DELETE FROM posts";
          connection.query(post_sql, function (error, results, fields) {

            var post_path = '/laneworks/api-evangelist/config/post-processing.json';
            var this_config = JSON.stringify(data);
            fs.writeFileSync(post_path, this_config, (err) => {}); 

            resp.send(this_config); 


          }).on('error', err => {
            resp.send(err);
          });          


        });
      })
      .catch(function(err) {
        resp.send(err);
  });



})

module.exports = router;