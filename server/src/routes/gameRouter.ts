import express, { Express } from "express";
import {
  httpGetRunningMatches,
  httpGetSeriesBySlug,
  httpGetUpcomingMatches,
} from "../controllers/gameController";

const gameRouter = express.Router();

gameRouter.get("/games/upcoming", httpGetUpcomingMatches);
gameRouter.get("/games/running", httpGetRunningMatches);
gameRouter.get("/games/:slug", httpGetSeriesBySlug);

export default gameRouter;
