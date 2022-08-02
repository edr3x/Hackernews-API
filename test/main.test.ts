import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());

import mainRoute from "../src/routes/route.main";
app.use("/api", mainRoute);

describe("Main Route Test", () => {
  test("GET /api/top/:num", async () => {
    const response = await request(app).get("/api/top/2");
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).success).toBe(true);
  });

  test("GET /api/new/:num", async () => {
    const response = await request(app).get("/api/new/2");
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).success).toBe(true);
  });

  test("GET /api/best/:num", async () => {
    const response = await request(app).get("/api/best/2");
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).success).toBe(true);
  });

  test("GET /api/particular/:id", async () => {
    const response = await request(app).get("/api/particular/32277424");
    expect(response.status).toBe(200);
    expect(JSON.parse(response.text).success).toBe(true);
  });
});
