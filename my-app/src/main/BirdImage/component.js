import React from 'react';
import './style.css';

class BirdImage extends React.Component {
  render() {
    const src = (this.props.isImgOpen) ? this.props.src : 'https://fainaidea.com/wp-content/uploads/2019/02/new-twitter-logo-1.jpg';
    const className = (this.props.isSmallImg) ? "bird-img small-img" : "bird-img";

    return (
      <img className={className} src={src} alt={this.props.alt} />
    );
  }
}

export default BirdImage;