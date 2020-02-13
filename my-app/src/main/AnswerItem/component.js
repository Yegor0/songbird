import React from 'react';
import './style.css';

import birdsData from '../data/birdsData';

class AnswerItem extends React.Component {
  render() {
    const birdPosition = birdsData[this.props.currentLevel][this.props.birdPosition].id - 1;

    let circleClass = 'answer-item__circle';
    if (this.props.selectedBirds.indexOf(birdPosition) !== -1 && this.props.isLevelPassed === false) {
      if (this.props.currentBirdPosition === birdPosition) {
        circleClass += ' right';
      } else {
        circleClass += ' wrong';        
      }
    } 

    if (this.props.isLevelPassed && this.props.currentBirdPosition === birdPosition) {
      circleClass += ' right';
    } else if (this.props.isLevelPassed && this.props.selectedBirds.indexOf(birdPosition) !== -1) {
      circleClass += ' wrong';
    }

    return (
      <li className="answer-item" onClick={this.props.processSelectedBird.bind(this, birdPosition)}>
        <div className={circleClass} ></div>
        <div className="answer-item__bird-name">{birdsData[this.props.currentLevel][this.props.birdPosition].name}</div>
      </li>
    );
  }
}

export default AnswerItem;