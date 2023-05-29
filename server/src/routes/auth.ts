import { Router } from "express";

import { loginController, signupController } from "../controllers/auth";

const router = Router()

router.post("/signup", signupController)
router.post("/login",loginController);

export default router;