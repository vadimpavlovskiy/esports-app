import express, { Express } from "express";
import { httpGetTestApiCall } from "../controllers/gameController";

const gameRouter = express.Router();

gameRouter.get("/game", httpGetTestApiCall);

export default gameRouter;
