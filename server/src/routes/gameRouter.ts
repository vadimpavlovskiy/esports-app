import express, { Express } from "express";
import httpGetGameStars from "../controllers/gameController";

const gameRouter = express.Router();

gameRouter.get("/game", httpGetGameStars);

export default gameRouter;
