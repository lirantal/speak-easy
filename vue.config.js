const publicPath =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/"
    : "https://speak-easy.netlify.com/";

module.exports = {
  publicPath: publicPath
};
