import './App.css';
import React, { useState, useEffect } from 'react';
import Currency from './components/Currencies';

function App() {

  const [amount, setAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState(rateCalculation);

  function rateCalculation() {
    return Math.random() * 0.01;
  }

  useEffect(() => {
    let timer = setTimeout(() => { setConversionRate(0) }, 5000);

    return () => { clearTimeout(timer) }

  }, [amount]);

  function onChange(amount) {
    setAmount(amount);

    if (conversionRate === 0) { setConversionRate(rateCalculation); }

  }

  return (

    <div className='App'>
      <Currency name='Euros' value={amount} onChange={onChange} />
      <br />
      <br />
      <Currency name='BTC' value={parseFloat(amount * conversionRate).toFixed(6)} readOnly />
    </div>);

};


export default App;