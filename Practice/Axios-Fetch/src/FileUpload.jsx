import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { configer } from './lib';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      // console.log(preview);
      setMessage('');
      setProgress(0);
    }
  };

  // Upload file with progress
  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/upload', formData, {
        ...configer,
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(configer?.headers || {}),
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentCompleted);
        },
      });

      setMessage(res.data.message || 'File uploaded successfully!');
      setFile(null);
      setPreview(null);
      setProgress(0);
    } catch (err) {
      setMessage('File upload failed. Try again.');
      console.error(err);
      setProgress(0);
    }
  };
  axios.interceptors.request.use(
    (config) => {
      // console.log(config.headers);
      config.headers.Authorization = `Bearer kjcklhklnk`;
      console.log(config.headers);

      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  return (
    <div className="upload-container">
      <h2>Upload Your File</h2>

      <div className="file-input-wrapper">
        <input type="file" onChange={handleFileChange} />
      </div>

      {preview && (
        <div className="preview">
          <p>Preview:</p>
          {file.type.startsWith('image/') ? (
            <img src={preview} alt="preview" />
          ) : (
            <p>{file.name}</p>
          )}
        </div>
      )}

      {progress > 0 && (
        <div className="progress-bar">
          <div className="progress-filled" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      <button onClick={handleUpload} className="upload-btn">
        Upload
      </button>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default FileUpload;
