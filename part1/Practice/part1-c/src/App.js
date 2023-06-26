import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 3000);

  // to check the rendering process
  console.log('rendering...', counter);

  return <div>{counter}</div>;
};

export default App;
