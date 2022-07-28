import "dotenv/config";

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 8080;

export const config = {
  server: { port: SERVER_PORT },
};
