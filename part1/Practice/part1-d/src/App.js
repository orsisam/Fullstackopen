import { useState } from 'react';

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  // Or using
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    // const newClicks = {
    //   left: clicks.left + 1,
    //   right: clicks.right,
    // };

    /* Or using object spread */
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setAll(allClicks.concat('L'));
    setClicks(newClicks);
    setTotal(newClicks.left + clicks.right);
  };

  const handleRightClick = () => {
    // const newClicks = {
    //   left: clicks.left,
    //   right: clicks.right + 1,
    // };

    /* Or using object spread */

    setAll(allClicks.concat('R'));
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
    setTotal(clicks.left + newClicks.right);
  };

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
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleToZeroClick}>reset</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <h4>History</h4>
      <p>{allClicks.join(' ')}</p>
      <p>
        <strong>Total of clicks: </strong>
        {total}
      </p>
    </div>
  );
};

export default App;
