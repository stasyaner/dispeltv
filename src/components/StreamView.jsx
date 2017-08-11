import React from 'react';
import propTypes from 'prop-types';
import style from '../css/StreamView.scss';

const StreamView = ({
  isPlaying,
  isSounding,
  togglePlay,
  toggleSound,
  volumeBarWidth,
  volumeBarMouseDownHandler,
  connectHls,
  isFullScreen,
  toggleFullScreen,
}) => (
  <div
    role="presentation"
    className={style.streamContainer}
    onClick={toggleFullScreen}
  >
    <div className={style.underlay}>
      <video
        className={style.video}
        ref={connectHls}
      >
        <track kind="captions" src="captions.vtt" />
      </video>
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
        <div
          role="button"
          tabIndex="0"
          className={isFullScreen ? style.exitFullScreen : style.fullScreen}
        >{' '}</div>
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
  isFullScreen: propTypes.bool.isRequired,
  toggleFullScreen: propTypes.func.isRequired,
};

export default StreamView;
