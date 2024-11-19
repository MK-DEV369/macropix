"use client";

import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function NewDataPage() {
  const [cameraAvailable, setCameraAvailable] = useState(false);
  const [qrVisible, setQRVisible] = useState(false);

  // Check for camera availability
  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => setCameraAvailable(true))
      .catch(() => setCameraAvailable(false));
  }, []);

  // Handle Camera Access
  const handleOpenCamera = () => {
    if (cameraAvailable) {
      alert("Camera functionality not yet implemented.");
      // Implement camera capture logic here
    } else {
      alert("Camera not available on this device.");
    }
  };

  // Handle File Upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      alert(`Uploaded: ${file.name}`);
      // Implement file processing logic here
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary mb-6">New Data</h1>
      <p className="text-secondary-foreground mb-4">
        Capture or upload an image for food analysis.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Camera Access */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold text-secondary mb-4">
            Use Camera
          </h2>
          <button
            onClick={handleOpenCamera}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary"
          >
            {cameraAvailable ? "Open Camera" : "Camera Not Available"}
          </button>
        </div>

        {/* File Upload */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold text-secondary mb-4">
            Upload Photo
          </h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="block mx-auto text-primary"
          />
        </div>

        {/* QR Code Section */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold text-secondary mb-4">
            Use QR Code
          </h2>
          <button
            onClick={() => setQRVisible(!qrVisible)}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary mb-4"
          >
            {qrVisible ? "Hide QR Code" : "Generate QR Code"}
          </button>
          {qrVisible && (
            <div className="flex justify-center items-center mt-4">
              <QRCodeCanvas
                value="https://your-app-link.com/upload"
                size={128}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
