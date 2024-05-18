import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

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
        <div className="video-container ">
            <FaPlay
                className={`${isPlaying} play-button`}
                onClick={handlePlayPause}
            />

            <video ref={videoRef} onClick={handleVideo}>
                <track kind="captions" src="/#" label="English" />
                <source src="/images/vid.mp4" type="video/mp4" />
            </video>
        </div>
    );
}

export default VideoComponent;
