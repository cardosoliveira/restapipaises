const data = require("./db.js");

const jsonServer = require("json-server")
const server = jsonServer.create();
const router = jsonServer.router(data)
const middleware = jsonServer.defaults();
const port = process.PORT || 3000;

server.use(middleware);
server.use(router);

server.listen(port);