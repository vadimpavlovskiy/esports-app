import { AxiosError, isAxiosError } from "axios";
import { getDotaUpcomingSeries } from "../models/gameModel";

function httpGetGameStars(req, res) {
  return res.status(200).json({
    message: "Everything has gone well!",
  });
}
async function httpGetTestApiCall(req, res) {
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

export { httpGetGameStars, httpGetTestApiCall };
