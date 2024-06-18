import dotenv from "dotenv";
import Mongodb from "./src/Database/Mongodb.js";
import startServer from "./src/Web/Server.js";
export const dbModels = {};
dotenv.config();
Mongodb(dbModels);
startServer(dbModels);
