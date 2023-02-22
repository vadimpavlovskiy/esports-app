import axios, { isAxiosError } from "axios";
import { config } from "../../config/config";

async function getDotaRunningSeries() {
  try {
    const response = await axios.get(
      "https://api.pandascore.co/dota2/series/running/",
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
      "https://api.pandascore.co/dota2/series/upcoming/",
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
async function getDotaSeriesBySlug(slug: string) {
  try {
    const response = await axios.get(
      `https://api.pandascore.co/series/${slug}/`,
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
async function getDotaSeriesMatches(tournament_id: Number) {
  try {
    const response = await axios.get(
      `https://api.pandascore.co/tournaments/${tournament_id}/matches/`,
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
export {
  getDotaUpcomingSeries,
  getDotaRunningSeries,
  getDotaSeriesBySlug,
  getDotaSeriesMatches,
};
