import React, { Component } from 'react';

class Gif extends Component {
  handleUpdate = () => {
    if (this.props.selectGif){
      this.props.selectGif(this.pros.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleUpdate} />
    );
  }
}

export default Gif;
