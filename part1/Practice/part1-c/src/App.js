import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  // Automatic increase counter
  // setTimeout(() => setCounter(counter + 1), 3000);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  const setToZero = () => setCounter(0);

  // to check the rendering process
  console.log('rendering...', counter);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>reset</button>
    </div>
  );
};

export default App;
