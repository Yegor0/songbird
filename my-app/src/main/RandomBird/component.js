import React from 'react';
import './style.css';

import BirdImage from '../BirdImage/component';
import BirdAudio from '../BirdAudio/component';

import birdsData from '../data/birdsData';

class RandomBird extends React.Component {
  render() {
    const birdName = (this.props.isLevelPassed) ? birdsData[this.props.currentLevel][this.props.currentBirdPosition].name : '********';

    return (
      <div className="random-bird">
        <BirdImage src={birdsData[this.props.currentLevel][this.props.currentBirdPosition].image}
          alt={birdsData[this.props.currentLevel][this.props.currentBirdPosition].species} 
          isImgOpen={this.props.isLevelPassed} />
        <div className="random-bird__info">
          <div className="random-bird__name">{birdName}</div>
          <BirdAudio src={birdsData[this.props.currentLevel][this.props.currentBirdPosition].audio} />
        </div>
      </div>
    );
  }
}

export default RandomBird;