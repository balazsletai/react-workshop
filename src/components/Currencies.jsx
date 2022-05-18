import './currency.css';
import React,  { useContext } from 'react';
import ThemeContext from '../ThemeContext';

export default function Currency({ name, value, onChange, readOnly }) {

  const theme = useContext(ThemeContext);
  function onChangeHandler(event) {
    onChange(event.currentTarget.value);
  }

  const elementToShow = (
    <div className={`currency ${theme.storeTheme}`}>
      <label className='container'>
        <strong>{name}</strong>
        <br />
        <input
          onChange={onChangeHandler}
          value={value}
          type='number'
          readOnly={readOnly}
          min='0'
          placeholder='0'
          step='0.01'
        />
      </label>
    </div>
  )

  return (elementToShow);

}