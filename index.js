var express = require("express");
const winston = require("winston");
var app = express();
var apm = require("elastic-apm-node").start({
  serviceName: "node-web-app",
  secretToken: "",
  serverUrl: "http://192.168.150.11:8200",
  environment: "my-app",
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console(), new winston.transports.File({ filename: "logs/app.log" })],
});

app.get("/", function (req, res) {
  logger.log("info", "Request received: ", req);
  res.send("Simple Web Application is UP");
});

app.listen(8081, function () {
  console.log("Simple Web Application running on port 8081!");
});
