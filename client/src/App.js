import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetch = async () => {
      await axios.get(`${process.env.REACT_APP_ROUTE}:5000/test`)
      .then(res => {
        console.log(res)
        setData(res.data.data)
      })


    }
    fetch()
  }, [])

  console.log(process.env.REACT_APP_ROUTE);

  return (
    <div className='poo'>
      <h1>hi</h1>
      {data}
    </div>
  );
}

export default App;
