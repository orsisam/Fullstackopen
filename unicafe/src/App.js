import { useState } from 'react';

const Button = ({ handleButton, text }) => {
  return <button onClick={handleButton}>{text}</button>;
};

const DisplayStatictics = ({ value, text }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  /**
   * Handling the Good button
   */
  const handleGoodButton = () => {
    setGood(good + 1);
  };

  /**
   * Handling the Neutral button
   */
  const handleNeutralButton = () => {
    setNeutral(neutral + 1);
  };

  /**
   * Handling the Bad Button
   */
  const handleBadButton = () => {
    setBad(bad + 1);
  };

  /**
   * Handling reset Button
   */
  const handleResetButton = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <div>
      <div className='title'>
        <h1>give feedback</h1>
      </div>

      <div>
        <Button handleButton={handleGoodButton} text={'good'} />
        <Button handleButton={handleNeutralButton} text={'neutral'} />
        <Button handleButton={handleBadButton} text={'bad'} />
      </div>

      <div className='subtitle'>
        <h2>statistics</h2>
      </div>
      <DisplayStatictics value={good} text={'good'} />
      <DisplayStatictics value={neutral} text={'neutral'} />
      <DisplayStatictics value={bad} text={'bad'} />

      <Button handleButton={handleResetButton} text={'reset'} />
    </div>
  );
};

export default App;
