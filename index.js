require("dotenv").config();
httpProxy = require("http-proxy");
console.log(process.env.PORT);

try {
  console.log("Starting proxy server on "+process.env.PROXY_URL+" on port " + process.env.PORT);
  httpProxy.createProxyServer({ target: process.env.PROXY_URL }).listen(8000);
  console.log("Started proxy server on port " + process.env.PORT);
} catch (e) {
  console.log("Error starting proxy server on port " + process.env.PORT);
  console.log(e);
}