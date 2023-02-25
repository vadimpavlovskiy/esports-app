import axios from "axios";
import { config } from "../../config/config";

async function getTeamById(team_id: Number) {
  try {
    const response = await axios.get(
      `https://api.pandascore.co/teams/${team_id}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: config.configToken,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export { getTeamById };
