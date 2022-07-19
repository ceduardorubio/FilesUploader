const port = process.env.PORT || 3000;
import express from "express";
import cors from "cors";
import compression from "compression";

import { Routes } from "./routes";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(compression());
app.use(cors());

Routes(app);

app.listen(port, () => {
  console.log(`Running on PORT ${port}.`);
});
