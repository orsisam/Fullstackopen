import { useState } from 'react';

/**
 * Handling the history for the clicked button
 */
const History = (props) => {
  if (props.allClicks.length === 0) {
    return <>the app is used by pressing the buttons</>;
  }

  return <>button press history: {props.allClicks.join(' ')}</>;
};

/**
 * Button component
 */
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const TestButton = () => {
  console.log('clicked the button test');
};

/**
 * Main Application
 */
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  /**
   * Handling the left button while clicked
   */
  const handleLeftClick = () => {
    /* using object spread */
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setAll(allClicks.concat('L'));
    setClicks(newClicks);
    setTotal(newClicks.left + clicks.right);
  };

  /**
   * Handling the right button while clicked
   */
  const handleRightClick = () => {
    /* using object spread */

    setAll(allClicks.concat('R'));
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
    setTotal(clicks.left + newClicks.right);
  };

  /**
   * Handling the reset button
   */
  const handleToZeroClick = () => {
    setClicks({
      left: 0,
      right: 0,
    });
    setAll([]);
    setTotal(0);
  };

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleToZeroClick} text='reset' />
      <Button handleClick={handleRightClick} text='right' />
      {clicks.right}
      <h4>History</h4>
      <p>
        <History allClicks={allClicks} />
      </p>
      <p>
        <strong>Total of clicks: </strong>
        {total}
      </p>
      <button onClick={TestButton}>test button</button>
    </div>
  );
};

export default App;
