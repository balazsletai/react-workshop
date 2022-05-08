import './currency.css';
import React from 'react';

export default function Currency({ value, onChange }) {

  function onChangeHandler(event) {
    onChange(event.currentTarget.value);
  }

  const elementToShow = (
    <>
      <label htmlFor='currency'><strong>Euros</strong></label>
      <br />
      <input
        onChange={onChangeHandler}
        value={value}
        type='number'
        className='currency'
        id='currency'
        min='0'
        placeholder='0'
        step='0.001'
      />
    </>
  )

  return (elementToShow);

}