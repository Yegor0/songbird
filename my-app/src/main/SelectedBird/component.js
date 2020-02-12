import React from 'react';
import './style.css';

import BirdImage from '../BirdImage/component';
import BirdAudio from '../BirdAudio/component';

import birdData from '../data/birdsData';

class SelectedBird extends React.Component {
  render() {
    if (this.props.birdPosition === null) return (
      <div className="selected-bird default-text">
        Прослушайте плеер.
        Выберите птицу.
      </div>
    );

    return (
      <div className="selected-bird">
        <div className="selected-bird__title">
          <BirdImage src={birdData[this.props.currentLevel][this.props.birdPosition].image}
            isImgOpen={true} isSmallImg={true} />
          <ul className="selected-bird__title__ul">
            <li>{birdData[this.props.currentLevel][this.props.birdPosition].name}</li>
            <li>{birdData[this.props.currentLevel][this.props.birdPosition].species}</li>
          </ul>
        </div>
        <BirdAudio src={birdData[this.props.currentLevel][this.props.birdPosition].audio} />
        <div className="selected-bird__description">
          {birdData[this.props.currentLevel][this.props.birdPosition].description}
        </div>
      </div>
    );
  }
}

export default SelectedBird;