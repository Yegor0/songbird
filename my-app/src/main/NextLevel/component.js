import React from 'react';
import './style.css';

class NextLevel extends React.Component {
  render() {
    const func = (this.props.isLevelPassed) ? this.props.updateCurrentLevel : null;
    const className = (this.props.isLevelPassed) ? 'next-botton active' : 'next-botton';

    return(
      <div className={className} onClick={func} >Next Level</div>
    );
  }
}

export default NextLevel;