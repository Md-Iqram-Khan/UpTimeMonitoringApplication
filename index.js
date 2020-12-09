/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Md. Iqram khan
 */

//dependecies
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require('./helpers/environments')
const data = require('./lib/data')
//app object - module scaffolding
const app = {};
// //todo: delete after experiment
// data.delete('test', 'newFile', ( err) => {
//   console.log( err);
// })
// //create Server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`Server is running on port ${environment.port}`);
  });
};

//handle Request Response
app.handleReqRes = handleReqRes;

//start server
app.createServer();
