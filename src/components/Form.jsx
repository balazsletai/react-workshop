import React from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function Form (props) {
    const [username, setUsername] = useState('')
  
    const handleSubmit = event => {
      event.preventDefault()
  
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(resp => {
          props.onSubmit(resp.data)
          setUsername('')
        })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    )
  };