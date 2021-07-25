import express from "express";
import cors from "cors";
import helmet from "helmet";
import api from "../src/api";
import cookieParser from "cookie-parser";
const app = express();
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(api);

export default app;
