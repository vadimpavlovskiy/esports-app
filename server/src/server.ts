import http from "http";
import { config } from "../config/config";
import app from "./app";

const server = http.createServer(app);

server.listen(config.configPort, () => {
  console.log(`Listening on port ${config.configPort}`);
});
