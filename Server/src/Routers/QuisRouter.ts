import express, { IRouter } from "express";
import postController from "../Controller/QuisController"
import authController from "../Controller/authController"
import { authMiddleware } from "../middleware/authMiddleware";

const router : IRouter = express.Router()
router.use("/post" ,authMiddleware, postController)
router.use("/auth" , authController)

export default router