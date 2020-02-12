import React from 'react';
import './style.css';

import Salute from '../Salute/component';

class VictoryWindow extends React.Component {
  render() {
    if (this.props.score === 30) {
      return (
        <>
          <Salute />
          <div className="absolute-victory">
            <div className="absolute-victory__text">
              А я и подумать не мог, что такое возможно...
            </div>
          </div>
        </>
      );
    }

    return (
      <div className="victory-wrapper">
        <div className="victory-wrapper__congr">
          Поздравляем!
        </div>
        <div className="victory-wrapper__text">
          Вы набрали <span>{this.props.score} </span>баллов из 30 возможных.
        </div>
        <div className="victory-wrapper__restart" onClick={this.props.restartGame} >
          Попробовать снова
        </div>
      </div>
    );
  }
}

export default VictoryWindow;