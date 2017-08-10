import React, { Component } from 'react';
import propTypes from 'prop-types';
import Hls from 'hls.js';
import StreamView from '../components/StreamView';

class StreamContainer extends Component {
  constructor(...restProps) {
    super(...restProps);

    this.userName = this.props.match.params.userName || null;
    this.state = {
      isPlaying: true,
      isSounding: true,
      volumeBarWidth: '100%',
      isVolumeBarMouseDown: false,
      volumeDivWidth: null,
      volumeDivOffsetLeft: null,
    };

    this.togglePlay = this.togglePlay.bind(this);
    this.mute = this.mute.bind(this);
    this.unmute = this.unmute.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.volumeBarMouseDownHandler = this.volumeBarMouseDownHandler.bind(this);
    this.volumeBarMouseUpHandler = this.volumeBarMouseUpHandler.bind(this);
    this.volumeBarMouseMoveHandler = this.volumeBarMouseMoveHandler.bind(this);
    this.connectHls = this.connectHls.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.volumeBarMouseUpHandler);
    document.addEventListener('mousemove', this.volumeBarMouseMoveHandler);
  }

  togglePlay() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
    }));

    if (this.state.isPlaying) {
      this.state.video.pause();
    } else this.state.video.play();
  }

  mute() {
    this.setState(() => ({
      isSounding: false,
      volumeBarWidth: '0%',
    }));
    this.state.video.muted = true;
  }

  unmute() {
    this.setState(() => ({
      isSounding: true,
      volumeBarWidth: '100%', // TODO: return the last value not just 100%
    }));
    this.state.video.muted = false;
  }

  toggleSound() {
    if (this.state.video.muted) {
      this.unmute();
    } else {
      this.mute();
    }
  }

  volumeBarMouseDownHandler(event) {
    const volumeDivClientRect = event.currentTarget.getBoundingClientRect();
    const volumeDivWidth = volumeDivClientRect.width;
    const volumeDivOffsetLeft = volumeDivClientRect.left;
    this.setState({
      isVolumeBarMouseDown: true,
      volumeDivWidth,
      volumeDivOffsetLeft,
    });
    this.changeVolume(event, volumeDivWidth, volumeDivOffsetLeft);
  }

  volumeBarMouseUpHandler() {
    if (this.state.isVolumeBarMouseDown) {
      this.setState({ isVolumeBarMouseDown: false });
    }
  }

  volumeBarMouseMoveHandler(event) {
    if (this.state.isVolumeBarMouseDown) {
      this.changeVolume(event, this.state.volumeDivWidth, this.state.volumeDivOffsetLeft);
    }
  }

  changeVolume(event, volumeDivWidth, volumeDivOffsetLeft) {
    let volumeLevel = (event.pageX - volumeDivOffsetLeft) / volumeDivWidth;
    if (volumeLevel < 0.05) {
      volumeLevel = 0;
      this.mute();
    } else if (volumeLevel > 0.95) {
      volumeLevel = 1;
    } else {
      this.unmute();
    }
    this.state.video.volume = volumeLevel;
    const volumeBarWidth = `${Math.floor(volumeLevel * 100)}%`;
    this.setState({ volumeBarWidth });
  }

  connectHls(videoElement) {
    this.setState({ video: videoElement });
    if (Hls.isSupported()) {
      const hlsInstance = new Hls();
      hlsInstance.loadSource('hls/BaT2Y78F3UbSZF3AL5AIeWonp3F2/index.m3u8');
      hlsInstance.attachMedia(videoElement);
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play();
      });
    }
  }

  render() {
    return (
      <StreamView
        isPlaying={this.state.isPlaying}
        isSounding={this.state.isSounding}
        volumeBarWidth={this.state.volumeBarWidth}
        togglePlay={this.togglePlay}
        toggleSound={this.toggleSound}
        volumeBarMouseDownHandler={this.volumeBarMouseDownHandler}
        volumeBarMouseUpHandler={this.volumeBarMouseUpHandler}
        volumeBarMouseMoveHandler={this.volumeBarMouseMoveHandler}
        connectHls={this.connectHls}
      />
    );
  }
}

StreamContainer.propTypes = {
  match: propTypes.shape({
    isExact: propTypes.bool,
    path: propTypes.string,
    url: propTypes.string,
    params: propTypes.objectOf(
      propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
      ]),
    ),
  }).isRequired,
};

export default StreamContainer;
