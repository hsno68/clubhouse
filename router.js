import { Router } from "express";
import { getHomepage, getSignup, getLogin } from "./controller.js";

const router = Router();

router.get("/", getHomepage);
router.get("/signup", getSignup);
router.get("/login", getLogin);

export default router;
