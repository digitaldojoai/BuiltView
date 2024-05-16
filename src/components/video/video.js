import React, { useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useState } from 'react';

function VideoComponent() {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState('');

    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying('play');
        } else {
            videoRef.current.pause();
            setIsPlaying('');
        }
    };

    const handleVideo = () => {
        if (isPlaying === 'play') {
            videoRef.current.pause();
            setIsPlaying('');
        } else {
            videoRef.current.play();
            setIsPlaying('play');
        }
    };
    return (
        <div className='container'>
       
        <div className="video-container 
         ">
        <h2 className='title-video-main align-self-center'>Our Product</h2>
            <FaPlay
                className={`${isPlaying} play-button`}
                onClick={handlePlayPause}
            />

            <video
                width="100%"
                height="315"
                ref={videoRef}
                onClick={handleVideo}
            >
                <source src="/images/vid.mp4" type="video/mp4" />
            </video>
        </div>
        </div>
    );
}

export default VideoComponent;
