import React from 'react';
import propTypes from 'prop-types';
import style from '../css/StreamView.scss';

const videoStyle = {
  height: window.innerHeight - 47,
};

const StreamView = ({
  isPlaying,
  isSounding,
  togglePlay,
  toggleSound,
  volumeBarWidth,
  volumeBarMouseDownHandler,
  connectHls,
}) => (
  <div className={style.streamContainer}>
    <div className={style.underlay}>
      <video
        className={style.video}
        style={videoStyle}
        ref={connectHls}
      ></video>
    </div>
    <div className={style.overlay}>
      <div className={style.overlayControls}>
        <div
          role="button"
          tabIndex="0"
          className={isPlaying ? style.pause : style.play}
          onClick={togglePlay}
        >{' '}</div>
        <div
          role="button"
          tabIndex="0"
          className={isSounding ? style.sound : style.noSound}
          onClick={toggleSound}
        >{' '}</div>
        <div
          role="button"
          tabIndex="0"
          className={style.volume}
          onMouseDown={volumeBarMouseDownHandler}
        >
          <div
            style={{ width: volumeBarWidth }}
            className={style.volumeBar}
          >{' '}</div>
        </div>
      </div>
    </div>
  </div>
);

StreamView.propTypes = {
  isPlaying: propTypes.bool.isRequired,
  isSounding: propTypes.bool.isRequired,
  togglePlay: propTypes.func.isRequired,
  toggleSound: propTypes.func.isRequired,
  connectHls: propTypes.func.isRequired,
  volumeBarWidth: propTypes.string.isRequired,
  volumeBarMouseDownHandler: propTypes.func.isRequired,
};

export default StreamView;
