import express from 'express';
import controller from "../controllers/FaceDetectorController.js";

const router = express.Router();

console.log(controller.detectAllFaces);

router.get("/", controller.detectAllFaces);

export default router;