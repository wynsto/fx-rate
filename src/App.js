import './App.css';
import {Rate} from './Rate'
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const currencies = ['hkd', 'usd', 'cny', 'eur', 'aud', 'cad', 'gbp', 'jpy', 'sgd', 'thb']

function App() {
  const [quotes, setQuotes] = useState({})
  const [base, setBase] = useState(0)
  useEffect(() => {
    fetch('https://houyewei.com/fxrate').then(
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
      <div>
        <TextField id="standard-basic" label="Base" variant="standard" />
      </div>
      {rates}
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
