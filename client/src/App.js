import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetch = async () => {
      await axios.get('http://localhost:5000/test')
      .then(res => {setData(res.data.data)})
    }
    fetch()
  }, [])

  return (
    <div>
      {data}
    </div>
  );
}

export default App;
