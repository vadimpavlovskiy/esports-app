import express from "express";
import { Express } from "express";
import morgan from "morgan";
import gameRouter from "./routes/gameRouter";
import cors from "cors";
import teamRouter from "./routes/teamRouter";

const app: Express = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api", gameRouter, teamRouter);
export default app;
