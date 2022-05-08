import './App.css';
import React, { useState } from 'react';
import Currency from './components/currency.jsx';

function App() {
  const [amount, setAmount] = useState(0);

  return (

    <div className='App'>
      <Currency value={amount} onChange={setAmount} />
    </div>);

};


export default App;