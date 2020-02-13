import React from 'react';
import './style.css';

import AnswerItem from '../AnswerItem/component';

class AnswerOptions extends React.Component {
  render() {
    return (
      <ul className="answer-options">
        <AnswerItem currentLevel={this.props.currentLevel} birdPosition={0} processSelectedBird={this.props.processSelectedBird}
          currentBirdPosition={this.props.currentBirdPosition} selectedBirds={this.props.selectedBirds} 
          isLevelPassed={this.props.isLevelPassed} setAnswer={this.setAnswer} />

        <AnswerItem currentLevel={this.props.currentLevel} birdPosition={1} processSelectedBird={this.props.processSelectedBird}
          currentBirdPosition={this.props.currentBirdPosition} selectedBirds={this.props.selectedBirds} 
          isLevelPassed={this.props.isLevelPassed} setAnswer={this.setAnswer} />

        <AnswerItem currentLevel={this.props.currentLevel} birdPosition={2} processSelectedBird={this.props.processSelectedBird}
          currentBirdPosition={this.props.currentBirdPosition} selectedBirds={this.props.selectedBirds} 
          isLevelPassed={this.props.isLevelPassed} setAnswer={this.setAnswer} />

        <AnswerItem currentLevel={this.props.currentLevel} birdPosition={3} processSelectedBird={this.props.processSelectedBird}
          currentBirdPosition={this.props.currentBirdPosition} selectedBirds={this.props.selectedBirds} 
          isLevelPassed={this.props.isLevelPassed} setAnswer={this.setAnswer} />

        <AnswerItem currentLevel={this.props.currentLevel} birdPosition={4} processSelectedBird={this.props.processSelectedBird}
          currentBirdPosition={this.props.currentBirdPosition} selectedBirds={this.props.selectedBirds} 
          isLevelPassed={this.props.isLevelPassed} setAnswer={this.setAnswer} />
          
        <AnswerItem currentLevel={this.props.currentLevel} birdPosition={5} processSelectedBird={this.props.processSelectedBird}
          currentBirdPosition={this.props.currentBirdPosition} selectedBirds={this.props.selectedBirds} 
          isLevelPassed={this.props.isLevelPassed} setAnswer={this.setAnswer} />
      </ul>
    );
  }
}

export default AnswerOptions;