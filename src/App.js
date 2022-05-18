import './App.css';
import React, { useState, useEffect } from 'react';
import Currency from './components/Currencies';
import ThemeContext from './ThemeContext';

function App() {

  const [amount, setAmount] = useState(0);
  const [conversionRate, setConversionRate] = useState(rateCalculation);
  const [theme, setTheme] = useState('light');

  function rateCalculation() {
    return Math.random() * 0.01;
  }

  useEffect(() => {
    let timer = setTimeout(() => { setConversionRate(0) }, 5000);

    return () => { clearTimeout(timer) }

  }, [amount]);

  function onChangeOfAmount(amount) {
    setAmount(amount);

    if (conversionRate === 0) { setConversionRate(rateCalculation); }

  }

  function onChangeOfTheme(event) {
    setTheme(event.target.value);
  }

  return (
    <ThemeContext.Provider value={{ storeTheme: theme }} >
      <div className={`App ${theme}`}>
        <Currency name='Euros' value={amount} onChange={onChangeOfAmount} />
        <br />
        <br />
        <Currency name='BTC' value={parseFloat(amount * conversionRate).toFixed(6)} readOnly />
        <br />
        <label className='theme'>
          <br />
          <strong>Select Theme</strong>
          <br />
          <select
            onChange={onChangeOfTheme}
            value={theme}
          >
            <option value='dark'>Dark</option>
            <option value='light'>Light</option>
          </select>
        </label>
      </div>
    </ThemeContext.Provider >
  );
};


export default App;