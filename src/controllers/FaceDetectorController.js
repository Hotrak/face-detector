import * as faceapi from "face-api.js";
import canvas from 'canvas';

export default new class {
    async detectAllFaces(req, res){
        const img = await canvas.loadImage(
          "./public/images/photo_2022-02-13_12-33-59.jpg"
        );
        const result = await faceapi.detectAllFaces(
          img,
          new faceapi.TinyFaceDetectorOptions()
        );
        
        res.send(result);
    }
}