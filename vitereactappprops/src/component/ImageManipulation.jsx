import React from 'react';
import abc from './img3.png';

function ImageManipulation() {
  const [height, setHeight] = React.useState(200);
  const [width, setWidth] = React.useState(200);
  const [red, setRed] = React.useState(255);
  const [green, setGreen] = React.useState(255);
  const [blue, setBlue] = React.useState(255);
  const [imgRotate, setImgRotate] = React.useState(0);

  function increaseHeight() {
    setHeight(prev => prev + 5);
  }

  function increaseWidth() {
    setWidth(prev => prev + 5);
  }

  function decreaseWidth() {
    setWidth(prev => prev - 10);
  }

  function decreaseHeight() {
    setHeight(prev => prev - 10);
  }

  function changeBgColor() {
    setRed(Math.floor(Math.random() * 255));
    setGreen(Math.floor(Math.random() * 255));
    setBlue(Math.floor(Math.random() * 255));
  }

  function rotateImage() {
    setImgRotate(prev => prev + 10);
  }

  return (
    <div>
      <h2>Image Manipulation</h2>
      <div>
        <img 
          src={abc}
          height={height}
          width={width}
          style={{ 
            backgroundColor: `rgb(${red}, ${green}, ${blue})`, 
          }}
        />

        <br /><br />

        <button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={increaseHeight}>Increase Height</button>
        <button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={increaseWidth}>Increase Width</button>
        <button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={decreaseWidth}>Decrease Width</button>
        <button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={decreaseHeight}>Decrease Height</button>
        <button style={{ backgroundColor: 'lightblue', marginRight: '10px' }} onClick={changeBgColor}>Change Color</button>
        <button style={{ backgroundColor: 'yellow', marginRight: '10px' }} onClick={rotateImage}>Rotate Image</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
