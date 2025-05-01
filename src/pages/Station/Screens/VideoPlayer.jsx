import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && !playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: true,
                fluid: true,
                sources: [{ src, type: "application/x-mpegURL" }],
            });
        }

        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [src]);

    return <video ref={videoRef} className="video-js vjs-default-skin" />;
};

export default VideoPlayer;
