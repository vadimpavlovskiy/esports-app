import dotenv from "dotenv";

dotenv.config();

export const config = {
  configPort: process.env.PORT,
  configToken: process.env.PANDA_TOKEN,
};
