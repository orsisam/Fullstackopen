import { useState } from 'react';

/**
 * Display the counter
 */
const Display = (props) => {
  return <div>{props.counter}</div>;
};

/**
 * Create Button element
 */
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  // Automatic increase counter
  // setTimeout(() => setCounter(counter + 1), 3000);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

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
