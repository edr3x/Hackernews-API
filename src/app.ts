import { config } from "./config/config";
import express, { Express, Request, Response, NextFunction } from "express";

import Logger from "./library/logger";

const app: Express = express();

app.use((req: Request, res: Response, next: NextFunction) => {
  Logger.info(
    `Outgoing -> [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );

  res.on("finish", () => {
    Logger.info(
      `Incomming -> [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
    );
  });

  next();
});

//* Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Test
app.get("/test", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Test Success" });
});

//* Routes
import mainRoute from "./routes/route.main";
app.use("/api", mainRoute);

//* Server Start
const port = config.server.port;
app.listen(port, () => Logger.info(`started at port: ${port}`));
