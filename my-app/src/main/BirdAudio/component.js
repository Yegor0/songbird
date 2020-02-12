import React, { Fragment } from 'react';
import './style.css';
import ReactAudioPlayer from 'react-audio-player';

class BirdAudio extends React.Component {
  render() {
    return (
      <ReactAudioPlayer
        className="bird-audio"
        src={this.props.src}
        controls
      />
    );
  }
}

export default BirdAudio;
