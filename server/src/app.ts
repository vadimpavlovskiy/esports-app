import express from "express";
import { Express } from "express";
import morgan from "morgan";
import gameRouter from "./routes/gameRouter";

const app: Express = express();

app.use(morgan("combined"));
app.use(express.json());
app.use("/api", gameRouter);
export default app;
