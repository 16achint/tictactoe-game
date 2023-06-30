/* eslint-disable no-unused-vars */
import Board from './components/Board';
import { useState } from 'react';
import './styles.scss';
function App() {
  const [counter, setCounter] = useState(1);
  console.log('hello');

  const onBtnClick = () => {
    setCounter(currentValue => {
      return currentValue + 1;
    });
  };

  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>Click me</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}
export default App;
