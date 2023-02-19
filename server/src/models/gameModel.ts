import axios, { isAxiosError } from "axios";
import { config } from "../../config/config";

async function getDotaUpcomingSeries() {
  try {
    const response = await axios.get(
      "https://api.pandascore.co/dota2/series/upcoming",
      {
        headers: {
          Accept: "application/json",
          Authorization: config.configToken,
        },
      }
    );
    console.log(response);

    return response.data[0];
  } catch (error) {
    return error;
  }
}
export { getDotaUpcomingSeries };
