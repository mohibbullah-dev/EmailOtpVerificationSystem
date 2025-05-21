import e from "express";
import { signup } from "../controller/user.controller.js";

const router = e.Router();
router.get("/signup", signup);

export default router;
