import React from 'react';
import './style.css';

class Level extends React.Component {
  render() {
    let className = 'level-list_item';
    if (this.props.level === this.props.currentLevel) {
      className = 'level-list_item active-level'
    }

    return (
      <li className={className}>
        {this.props.name}
      </li>
    );
  }
}

export default Level;