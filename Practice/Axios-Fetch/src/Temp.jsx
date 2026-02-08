import React, { useState } from 'react';
import axios from 'axios';
import { configer } from './lib';
const temp = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [progress, setProgress] = useState(0);
  function fileHandle(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      console.log(preview);

      setMessage('');
      setProgress(0);
    }
  }
  async function uploadFile() {
    if (!file) {
      setMessage('Please select a file first!');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    try {
      await axios.post('/api/upload', formData, {
        ...configer,
        headers: {
          'Content-Type': 'multipart/form-data',
          ...(configer?.headers || {}),
        },
        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percent);
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
  }

  return (
    <div>
      <input type="file" onChange={fileHandle} />
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
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default temp;
