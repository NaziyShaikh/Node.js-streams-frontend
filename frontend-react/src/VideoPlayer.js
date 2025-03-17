import React, { useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
    const [videoFile, setVideoFile] = useState('');
    const [videoSrc, setVideoSrc] = useState('');

   const handleSubmit = (e) => {
       e.preventDefault();
       setVideoSrc(`http://localhost:3000/video/${videoFile}`); // Ensure this path is correct
   };
    return (
        <div className="video-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={videoFile}
                    onChange={(e) => setVideoFile(e.target.value)}
                    placeholder="Enter video filename"
                />
                <button type="submit">Stream Video</button>
            </form>
            {videoSrc && (
                <video width="100%" controls autoPlay>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default VideoPlayer;