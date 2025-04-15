const { createServer } = require("https");
const { parse } = require("url");
const fs = require("node:fs");
const next = require("next");
 
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
 
const options = {
  key: fs.readFileSync("./certsFiles/selfsigned.key"),
  cert: fs.readFileSync(".//certsFiles/selfsigned.crt"),
};

app.prepare().then(() => {
  createServer(options, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port);


  console.log(
    `> Server listening at https://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})