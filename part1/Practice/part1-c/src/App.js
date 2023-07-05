import { useState } from 'react';

/**
 * Display the counter
 */
const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

/**
 * Create Button element
 */
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log('rendering with counter value', counter);

  // Automatic increase counter
  // setTimeout(() => setCounter(counter + 1), 3000);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  const increaseByOne = () => {
    console.log('increasing, value before', counter);
    setCounter(counter + 1);
  };
  const setToZero = () => {
    console.log('resetting to zero, value before', counter);
    setCounter(0);
  };
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter);
    setCounter(counter - 1);
  };

  // to check the rendering process
  console.log('rendering...', counter);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text='reset' />
      <Button handleClick={decreaseByOne} text='minus' />
    </div>
  );
};

export default App;
