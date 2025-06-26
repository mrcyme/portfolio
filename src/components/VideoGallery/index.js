import React from 'react';
import styles from './styles.module.css';

const VideoGallery = ({ videos }) => {
  return (
    <div className={styles.videoGrid}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoItem}>
          <video controls src={video.src} poster={video.thumbnail}>
            Your browser does not support the video tag.
          </video>
          {video.title && <h4 className={styles.videoTitle}>{video.title}</h4>}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery; 