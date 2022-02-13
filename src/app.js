import express from "express";
import path from 'path';
const app = express();
const PORT = 8082;


import * as faceapi from 'face-api.js';
import canvas from "canvas";

import FaceRoutes from "./routes/FaceDetector.js";


app.use(express.static("public"));

const { Canvas, Image, ImageData } = canvas;
faceapi.env.monkeyPatch({ Canvas, Image, ImageData });

faceapi.nets.ssdMobilenetv1.loadFromDisk("./public/models");
faceapi.nets.tinyFaceDetector.loadFromDisk("./public/models");

// async function getR(){

//     const img = await canvas.loadImage("./public/images/photo_2022-02-13_12-33-59.jpg");
//     const result = await faceapi.detectAllFaces(img,
//       new faceapi.TinyFaceDetectorOptions()
//     );

//     return result
// }
app.use("/face", FaceRoutes);
app.get("/t", async (req, res) => {

    const result = await getR();
    res.send(result);
    // res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
