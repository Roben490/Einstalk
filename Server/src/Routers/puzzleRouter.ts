import express, { IRouter } from "express";
import puzzeleController from "../Controller/PuzzelController"
import authController from "../Controller/authController"
import userController from '../Controller/userController'

const router : IRouter = express.Router()
router.use("/post" , puzzeleController)
router.use("/auth" , authController)
router.use("/users" , userController)

export default router