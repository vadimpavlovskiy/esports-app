import express, { Express } from "express";
import {
  httpGetRunningMatches,
  httpGetUpcomingMatches,
} from "../controllers/gameController";

const gameRouter = express.Router();

gameRouter.get("/games/upcoming", httpGetUpcomingMatches);
gameRouter.get("/games/running", httpGetRunningMatches);

export default gameRouter;
