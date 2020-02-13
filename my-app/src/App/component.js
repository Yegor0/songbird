import React from 'react';
import './style.css'

import Logo from '../header/Logo/component';
import Levels from '../header/Levels/component';

import RandomBird from '../main/RandomBird/component';
import AnswerOptions from '../main/AnswerOptions/component';
import SelectedBird from '../main/SelectedBird/component';

import NextLevel from '../main/NextLevel/component';

import VictoryWindow from '../main/VictoryWindow/component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      currentBirdPosition: this.getRandomItem(5),
      selectedBirdPosition: null,
      selectedBirds: [],
      isLevelPassed: false,
      isGameEnd: false,
      numberOfAttempts: 0,
      score: 0,
    }
  }

  getRandomItem = (maxNumber) => {
    return Math.floor(Math.random() * Math.floor(maxNumber));
  }

  processSelectedBird = (selectedBirdPosition) => {
    if (this.state.selectedBirds.indexOf(selectedBirdPosition) !== -1) {
      this.setState({
        selectedBirdPosition,
      });
      return;
    }

    if (!this.state.isLevelPassed) {
      const selectedBirds = this.state.selectedBirds;
      selectedBirds.push(selectedBirdPosition);
      this.setState({
        selectedBirds,
      });
    }

    this.setState({
      selectedBirdPosition,
      numberOfAttempts: this.state.numberOfAttempts + 1,
    });

    if (selectedBirdPosition === this.state.currentBirdPosition) {
      const currentScore = 5 - this.state.numberOfAttempts + this.state.score;

      this.setState({
        isLevelPassed: true,
        score: currentScore,
      })
    }
  }

  updateCurrentLevel = () => {
    if (this.state.currentLevel === 5 && this.state.isLevelPassed) {
      this.setState({
        isGameEnd: true,
      });
      return;
    }

    this.setState({
      currentLevel: this.state.currentLevel + 1,
      currentBirdPosition: this.getRandomItem(5),
      selectedBirdPosition: null,
      selectedBirds: [],
      isLevelPassed: false,
      numberOfAttempts: 0,
    });
  }

  restartGame = () => {
    this.setState({
      currentLevel: 0,
      currentBirdPosition: this.getRandomItem(5),
      selectedBirdPosition: null,
      selectedBirds: [],
      isLevelPassed: false,
      isGameEnd: false,
      numberOfAttempts: 0,
      score: 0,
    });
  }

  render() {
    console.log(this.state);

    if (this.state.isGameEnd) {
      return (
        <div className="content-wrapper">
          <Logo score={this.state.score} />
          <Levels currentLevel={this.state.currentLevel} />
          <VictoryWindow score={this.state.score} restartGame={this.restartGame} />
        </div>
      );
    }

    return (
      <div className="content-wrapper">
        <Logo score={this.state.score} />
        <Levels currentLevel={this.state.currentLevel} />
        <RandomBird currentBirdPosition={this.state.currentBirdPosition} currentLevel={this.state.currentLevel}
          isLevelPassed={this.state.isLevelPassed} />
        <div className="quiz-wrapper">
          <AnswerOptions currentLevel={this.state.currentLevel} processSelectedBird={this.processSelectedBird}
            currentBirdPosition={this.state.currentBirdPosition} selectedBirds={this.state.selectedBirds}
            isLevelPassed={this.state.isLevelPassed} />
          <SelectedBird currentLevel={this.state.currentLevel} birdPosition={this.state.selectedBirdPosition} />
        </div>
        <NextLevel updateCurrentLevel={this.updateCurrentLevel} isLevelPassed={this.state.isLevelPassed} />
      </div>
    );
  }
}

export default App;