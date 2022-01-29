import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {

  let videoRef = useRef<HTMLVideoElement>(null);
  let canvasRef = useRef<HTMLCanvasElement>(null);

  let pairWithServer = () => {

  }

  let detect = async () => {
    // let canvasElement = canvasRef.current as HTMLCanvasElement
    // canvasElement.getContext('2d')?.drawImage(videoRef.current as HTMLVideoElement, 0, 0, canvasElement.width, canvasElement.height)
    // let image_data_url = canvasElement.toDataURL('image/jpeg');
    {/*
     // @ts-ignore */}
    let barcodeDetector = new BarcodeDetector({ formats: ['code_39', 'codabar', 'ean_13', 'qr_code'] });

    while (true) {
      {/*
       // @ts-ignore */}
      let detected = await barcodeDetector.detect(videoRef.current)
      console.log(detected)
      if (detected.length){
        break
      }
    }
  }

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
      (videoRef.current as HTMLVideoElement).srcObject = stream
    })
  })

  return (
    <div className="relative h-screen w-screen bg-gray-600">
      <div className="absolute inset-0 h-screen bg-zinc-700 bg-opacity-90 z-10">
        <div className="flex justify-center items-center h-screen">
          <button className="p-5 text-lg text-white bg-blue-700" onClick={detect}>Pair with server</button>
        </div>
      </div>
      <video className="h-screen w-screen" ref={videoRef} muted autoPlay={true}></video>
      {/* <button onClick={detect}>Scan</button>
      <canvas ref={canvasRef} width="320" height="240"></canvas> */}
    </div>
  );
}
export default App;
