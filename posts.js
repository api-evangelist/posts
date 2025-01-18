const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

const getPosts = require('./paths/getPosts.js');
app.use('/posts', getPosts);

const pullPosts = require('./paths/pullPosts.js');
app.use('/posts/pull', pullPosts);

const processPosts = require('./paths/processPosts.js');
app.use('/posts/process', processPosts);

const getPost = require('./paths/getPost.js');
app.use('/posts/:year/:month/:day/:title', getPost);

const commitPost = require('./paths/commitPost.js');
app.use('/posts/:year/:month/:day/:title/commit', commitPost);

app.listen(5800, () => {
  console.log('Server listening on port 5800');
});

