import React, { Component } from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.maps(gif => < Gif id={gif.id} key={gif.id} selectorGif = {props.selectorGif} />)}
    </div>
  );
};

export default GifList;
