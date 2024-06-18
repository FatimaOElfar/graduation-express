import express from "express";
import cors from "cors";
import routes from "../Config/routes.js";
import bodyparser from "body-parser";
const startServer = (models) => {
  const app = express();
  const port = process.env.port || 4000;
  const API_VERSION = "V" + process.env.API_VERSION;

  const API_URL = `/api/${API_VERSION}`;
  app.use(cors({ origin: "*" })); // into server distrputed data to all requested ,
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: true }));
  // app.get("/healthy", async (_, res) => {
  //   res.send({ status: 200, server: "up" });
  // });
  routes.map((route) => {
    app.use(API_URL, route);
  });
  app.listen(port, () => {
    console.log("Server is running on port" + port);
  });
};
export default startServer;
