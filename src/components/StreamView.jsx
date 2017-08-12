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
  showOverlayContent,
  putStreamViewDivToState,
  isOverlayContentShown,
}) => (
  <div
    role="presentation"
    className={style.streamView}
    ref={putStreamViewDivToState}
  >
    <div className={style.underlay}>
      <video
        className={style.video}
        ref={connectHls}
      >
        <track kind="captions" src="captions.vtt" />
      </video>
    </div>
    <div
      className={style.overlay}
      onMouseMove={showOverlayContent}
    >
      <div
        className={
          `${style.overlayControls} ${isOverlayContentShown ? style.shown : style.hided}`
        }
      >
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
          onClick={toggleFullScreen}
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
  showOverlayContent: propTypes.func.isRequired,
  putStreamViewDivToState: propTypes.func.isRequired,
  isOverlayContentShown: propTypes.func.isRequired,
};

export default StreamView;
