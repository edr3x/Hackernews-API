import "dotenv/config";

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 8080;

const HACKER_API = "https://hacker-news.firebaseio.com/v0";

const TOP_STORIES = `${HACKER_API}/topstories.json`;
const NEW_STORIES = `${HACKER_API}/newstories.json`;
const BEST_STORIES = `${HACKER_API}/beststories.json`;

export const api = {
  endpoint: {
    base: HACKER_API,
    top: TOP_STORIES,
    new: NEW_STORIES,
    best: BEST_STORIES,
  },
};

export const config = {
  server: { port: SERVER_PORT },
};
