import { Router } from "express";

const router = Router();

import { getStuff } from "../controllers/controller";

router.get("/getStuff", getStuff);

export default router;