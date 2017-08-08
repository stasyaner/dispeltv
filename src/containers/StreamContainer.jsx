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
    };

    this.play = this.play.bind(this);
    this.sound = this.sound.bind(this);
  }

  componentDidMount() {
    if (Hls.isSupported()) {
      this.video = document.querySelector('video');
      const hlsInstance = new Hls();
      hlsInstance.loadSource('hls/BaT2Y78F3UbSZF3AL5AIeWonp3F2/index.m3u8');
      hlsInstance.attachMedia(this.video);
    }
  }

  play() {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
    }));

    if (this.state.isPlaying) {
      this.video.pause();
    } else this.video.play();
  }

  sound() {
    this.setState(prevState => ({
      isSounding: !prevState.isSounding,
    }));

    this.video.muted = !this.video.muted;
  }

  render() {
    return (
      <StreamView
        isPlaying={this.state.isPlaying}
        isSounding={this.state.isSounding}
        play={this.play}
        sound={this.sound}
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
