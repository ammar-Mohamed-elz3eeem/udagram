import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.POSTGRE_USERNAME}`,
  password: process.env.POSTGRE_PASSWORD,
  database: process.env.POSTGRE_DBNAME,
  port: Number(process.env.POSTGRE_PORT),
  host: process.env.POSTGRE_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
