import { AxiosError, isAxiosError } from "axios";
import {
  getDotaRunningSeries,
  getDotaUpcomingSeries,
  getDotaSeriesBySlug,
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
async function httpGetSeriesBySlug(req, res) {
  const slug = req.params.slug;
  const result = await getDotaSeriesBySlug(slug);

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

export { httpGetRunningMatches, httpGetUpcomingMatches, httpGetSeriesBySlug };
