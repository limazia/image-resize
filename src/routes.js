const express = require("express");
const Jimp = require("jimp");

const routes = express.Router();

routes.get("/", function (request, response) {
  return response.send("Hello World");
});

routes.get("/image", function (request, response) {
  const { resize, url } = request.query;
  const [width, height] = resize.split("x");
  const w = parseInt(width);
  const h = parseInt(height);

  Jimp.read(url, function (err, img) {
    if (err) request.send(err);

    img.resize(w, h).getBase64(Jimp.AUTO, function (e, img64) {
      if (e) request.send(e);

      response.send(`<img src="${img64}">`);
    });
  });
});

module.exports = routes;
