import express from "express";
import { sayGoodbye } from "./controllers/sayGoodbye";

const router = express.Router();

router.get("/goodbye", sayGoodbye);

export default router;