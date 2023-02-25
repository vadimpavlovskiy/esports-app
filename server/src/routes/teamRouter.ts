import express from "express";
import { Router } from "express";
import { httpGetTeamById } from "../controllers/teamController";

const teamRouter: Router = express.Router();

teamRouter.get("/teams/:id", httpGetTeamById);

export default teamRouter;
