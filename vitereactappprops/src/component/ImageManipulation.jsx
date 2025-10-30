import React from 'react';
import abc from './img11.jpg';
function ImageManipulation() {
    const [height, setHeight] = React.useState(200);
  const [width, setWidth] = React.useState(200);
  function increaseCounter1() {
    setHeight(height + 5);
  }
  function increaseCounter2() {
    setWidth(width + 5);
  }
    function decreaseCounter2() {
    setWidth(width - 10);
  }
    function decreaseCounter1() {
    setHeight(height - 10);
  }
  return (
    <div>
      <h2>Image Manipulation</h2>
      <div>
        <img src={abc} height={height} width={width}/>
        <button style={{backgroundColor:'yellow',marginRight : '10px'}} onClick={increaseCounter1}>Increase height</button>
        <button style={{backgroundColor:'yellow',marginRight : '10px'}} onClick={increaseCounter2}>Increase width</button>
        <button style={{backgroundColor:'yellow',marginRight : '10px'}} onClick={decreaseCounter2}>Decrease width</button>
        <button style={{backgroundColor:'yellow',marginRight : '10px'}} onClick={decreaseCounter1}>Decrease height</button>
      </div>
    </div>
  );
}
export default ImageManipulation;