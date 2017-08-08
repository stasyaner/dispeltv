import React from 'react';
import propTypes from 'prop-types';
import style from '../css/StreamView.scss';

const videoStyle = {
  height: window.innerHeight - 47,
};

const StreamView = ({ isPlaying, isSounding, play, sound }) => (
  <div className={style.streamContainer}>
    <div className={style.underlay}>
      <video
        className={style.video}
        style={videoStyle}
      ></video>
    </div>
    <div className={style.overlay}>
      <div className={style.overlayControls}>
        <div
          role="button"
          tabIndex="0"
          className={isPlaying ? style.pause : style.play}
          onClick={play}
        >&nbsp;</div>
        <div
          role="button"
          tabIndex="0"
          className={isSounding ? style.sound : style.noSound}
          onClick={sound}
        >&nbsp;</div>
      </div>
    </div>
  </div>
);

StreamView.propTypes = {
  isPlaying: propTypes.bool.isRequired,
  isSounding: propTypes.bool.isRequired,
  play: propTypes.func.isRequired,
  sound: propTypes.func.isRequired,
};

export default StreamView;
