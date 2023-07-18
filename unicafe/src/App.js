import { useState } from 'react';

/**
 * For defining the buttons used for submitting feedback
 */
const Button = ({ handleButton, text }) => {
  return <button onClick={handleButton}>{text}</button>;
};

const StatisticLine = ({ value, text }) => {
  if (text === 'positive') {
    return (
      <p>
        {text} {value} %
      </p>
    );
  }

  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  average,
  positivePercentage,
}) => {
  if (totalFeedback === 0) {
    return (
      <>
        <div className='subtitle'>
          <h2>statistics</h2>
        </div>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <div className='subtitle'>
        <h2>statistics</h2>
      </div>
      <StatisticLine value={good} text={'good'} />
      <StatisticLine value={neutral} text={'neutral'} />
      <StatisticLine value={bad} text={'bad'} />
      <StatisticLine value={totalFeedback} text={'all'} />
      <StatisticLine value={average} text={'average'} />
      <StatisticLine value={positivePercentage} text={'positive'} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const countAverage = (good, neutral, bad, totalFeedback) => {
    return (good * 1 + neutral * 0 + bad * -1) / totalFeedback;
  };

  const countPercentage = (good, totalFeedback) => {
    return (good / totalFeedback) * 100;
  };

  /**
   * Handling the Good button
   */
  const handleGoodButton = () => {
    const newGood = good + 1;
    setGood(newGood);
    const newTotalFeedback = totalFeedback + 1;
    setTotalFeedback(newTotalFeedback);
    const newAverage = countAverage(newGood, neutral, bad, newTotalFeedback);
    setAverage(newAverage);
    const newPositivePersentage = countPercentage(newGood, newTotalFeedback);
    setPositivePercentage(newPositivePersentage);
  };

  /**
   * Handling the Neutral button
   */
  const handleNeutralButton = () => {
    const newNeutral = neutral + 1;
    const newTotalFeedback = totalFeedback + 1;
    const newAverage = countAverage(good, newNeutral, bad, newTotalFeedback);
    const newPositivePersentage = countPercentage(good, newTotalFeedback);

    setNeutral(newNeutral);
    setTotalFeedback(newTotalFeedback);
    setAverage(newAverage);
    setPositivePercentage(newPositivePersentage);
  };

  /**
   * Handling the Bad Button
   */
  const handleBadButton = () => {
    const newBad = bad + 1;
    const newTotalFeedback = totalFeedback + 1;
    const newAverage = countAverage(good, neutral, newBad, newTotalFeedback);
    const newPositivePersentage = countPercentage(good, newTotalFeedback);

    setBad(newBad);
    setTotalFeedback(newTotalFeedback);
    setAverage(newAverage);
    setPositivePercentage(newPositivePersentage);
  };

  /**
   * Handling reset Button
   */
  const handleResetButton = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
    setTotalFeedback(0);
    setAverage(0);
    setPositivePercentage(0);
  };

  /**
   * The averge of feedback
   */

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

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        average={average}
        positivePercentage={positivePercentage}
      />

      <Button handleButton={handleResetButton} text={'reset'} />
    </div>
  );
};

export default App;
