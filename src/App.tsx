import React, { useState, useEffect, useRef } from 'react';

function App() {

  let videoRef = useRef<HTMLVideoElement>(null);
  let canvasRef = useRef<HTMLCanvasElement>(null);

  let detect = () => {

    let canvasElement = canvasRef.current as HTMLCanvasElement

    canvasElement.getContext('2d')?.drawImage(videoRef.current as HTMLVideoElement, 0, 0, canvasElement.width, canvasElement.height)
    

   	let image_data_url = canvasElement.toDataURL('image/jpeg');

   	console.log(image_data_url);

     
     
     {/*
     // @ts-ignore */}
    let barcodeDetector = new BarcodeDetector({formats: ['code_39', 'codabar', 'ean_13', 'qr_code']});
    
    {/*
     // @ts-ignore */}
    barcodeDetector.detect(videoRef.current).then(detected => {
      console.log(detected)
    })

    console.log('hey')


  }

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
      (videoRef.current as HTMLVideoElement).srcObject = stream
    })
  })

  return (
    <div>
      <video ref={videoRef} muted autoPlay={true}></video>
      <button onClick={detect}>Scan</button>
      <canvas ref={canvasRef} width="320" height="240"></canvas>
    </div>
  );
}

export default App;
