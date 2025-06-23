
import express from "express";
//import isAuthenticated from "../middlewares/isAuthenticated.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controller/job.controller.js";

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/getjobs").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/getjobid/:id").get(isAuthenticated, getJobById);
//jVsznoSExXGEY71U
export default router;