import React from 'react';
import './style.css';

import Level from '../Level/component'

class Levels extends React.Component {
  render() {
    return (
      <ul className="level-list">
        <Level name='Разминка' level={0} currentLevel={this.props.currentLevel} />
        <Level name='Воробьиные' level={1} currentLevel={this.props.currentLevel} />
        <Level name='Лесные' level={2} currentLevel={this.props.currentLevel} />
        <Level name='Певчие' level={3} currentLevel={this.props.currentLevel} />
        <Level name='Хищные' level={4} currentLevel={this.props.currentLevel} />
        <Level name='Морские' level={5} currentLevel={this.props.currentLevel} />
      </ul>
    );
  }
}

export default Levels;