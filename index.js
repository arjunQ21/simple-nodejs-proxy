require("dotenv").config(".env");
const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors()) ;

// Proxy configuration
const proxyOptions = {
  target: process.env.PROXY_URL,
  changeOrigin: true,
};

// Create the proxy middleware with CORS configuration
app.use("/", createProxyMiddleware(proxyOptions));

// Start your server
app.listen(process.env.PORT, () => {
  console.log('Proxy server listening on port '+ process.env.PORT);
});
