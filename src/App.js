import React, {useState} from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(1);

const counter = () => {
  setCount(count + 1);
}

  return (
    <div className="App">
      <h1>Increment App</h1>
      <h2 className="count">{count}</h2>
      <button className="increment" onClick={counter}>Click!</button>
    </div>
  );
}

export default App;