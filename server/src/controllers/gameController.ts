import { AxiosError, isAxiosError } from "axios";
import {
  getDotaRunningSeries,
  getDotaUpcomingSeries,
} from "../models/gameModel";

async function httpGetRunningMatches(req, res) {
  const result = await getDotaRunningSeries();
  if (!isAxiosError(result)) {
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } else {
    return res.status(result.response.status).json({
      status: "failed",
      statusCode: result.response.status,
      message: result.response.statusText,
    });
  }
}
async function httpGetUpcomingMatches(req, res) {
  const result = await getDotaUpcomingSeries();
  if (!isAxiosError(result)) {
    return res.status(200).json({
      status: "success",
      data: result,
    });
  } else {
    return res.status(result.response.status).json({
      status: "failed",
      statusCode: result.response.status,
      message: result.response.statusText,
    });
  }
}

export { httpGetRunningMatches, httpGetUpcomingMatches };
