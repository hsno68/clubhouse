import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import session from "express-session";
import router from "./router.js";

import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/", router);

//404 route
app.use((req, res) => {
  res.status(404).send("Page not found.");
});

//Error route
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Server error.");
});

//Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
