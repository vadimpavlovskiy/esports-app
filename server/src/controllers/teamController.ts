import { isAxiosError } from "axios";
import { getTeamById } from "../models/teamModel";

async function httpGetTeamById(req, res) {
  const team_id: Number = req.params.id;
  const result = await getTeamById(team_id);
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

export { httpGetTeamById };
