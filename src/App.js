import './App.css';
import {Rate} from './Rate'
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const currencies = ['hkd', 'usd', 'cny', 'eur']

function App() {
  const [quotes, setQuotes] = useState({})
  useEffect(() => {
    fetch('https://home.houyewei.com/fxrate').then(
      data => {
        return data.json()
      }
    ).then(
      data => {
        setQuotes(data)
        console.log(data)
      }
    )
  }, [])

  const rates = currencies.map(item => {
    return <Rate currency={item} rate = {quotes[item]} />
  })
  return (
    <div className="App">
      {rates}
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
