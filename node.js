const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const https = require('https');
const fs = require('fs')
app.use(cors());
// 创建数据库连接
  app.use(express.static(path.join(__dirname, './frontend')));
  app.get('/', (req, res) => {
    
    res.redirect('/index.html');
  });

const options = {
  key: fs.readFileSync('../ssl/kof.key'),
  cert: fs.readFileSync('../ssl/kof.crt'),
  ca: fs.readFileSync('../ssl/kof.ca-bundle')
};

https.createServer(options, app).listen(443,()=>{console.log('Server is running on https://localhost:443');})
 
