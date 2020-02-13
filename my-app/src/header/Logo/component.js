import React from 'react';
import './style.css';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <h1>Song<span className="bird-word">Bird</span></h1>
        <div>Score: {this.props.score}</div>
      </div>
    );
  }
}

export default Logo;