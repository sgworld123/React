import React, { useState } from 'react';
function StateHandling() {
  const [count, setCount] = useState(20);

  function increaseCounter() {
    setCount(count + 5);
  }
  return (
    <div>StateHandling
        <h2>Counter Value = {count}</h2>
        <button style={{backgroundColor:'yellow',marginRight : '10px'}} onClick={increaseCounter}>Increase</button>
        <button onClick={() => setCount(count - 10)}>Decrease</button>
       
    </div>
  );
}
export default StateHandling;

