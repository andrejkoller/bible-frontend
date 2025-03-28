const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.scripture.api.bible",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
