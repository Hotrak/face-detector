const MODEL_URL = "/models";
console.log('start');
Promise.all([
    faceapi.loadSsdMobilenetv1Model(MODEL_URL),
    // faceapi.loadFaceLandmarkModel(MODEL_URL),
    faceapi.loadFaceRecognitionModel(MODEL_URL),
]).then(() => {
    start();
});


async function start(){
    const input = document.getElementById("image1");

    const canvas = faceapi.createCanvasFromMedia(input);
     document.body.append(canvas);

    const displaySize = { width: input.width, height: input.height };

    let detections = await faceapi
      .detectAllFaces(input)
    //   .withFaceLandmarks()
    //   .withFaceDescriptors();

    console.log(detections);
    if(!detections.length)
        console.log("I not found face");

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    console.log("I END")
};


