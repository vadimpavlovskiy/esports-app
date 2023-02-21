import axios, { isAxiosError } from "axios";
import { config } from "../../config/config";

async function getDotaRunningSeries() {
  try {
    const response = await axios.get(
      "https://api.pandascore.co/dota2/series/running",
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

    return response.data;
  } catch (error) {
    return error;
  }
}
async function getDotaSeriesBySlug(slug: string) {
  console.log("====================================");
  console.log(slug);
  console.log("====================================");
  try {
    const response = await axios.get(
      `https://api.pandascore.co/series/${slug}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: config.configToken,
        },
      }
    );
    console.log("====================================");
    console.log(response);
    console.log("====================================");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export { getDotaUpcomingSeries, getDotaRunningSeries, getDotaSeriesBySlug };
