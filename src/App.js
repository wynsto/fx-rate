import './App.css';
import {Rate} from './Rate'
import { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
import { FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';

const currencies = ['hkd', 'usd', 'cny', 'eur', 'aud', 'cad', 'gbp', 'jpy', 'sgd', 'thb']

function App() {
  const [quotes, setQuotes] = useState({})
  const [base, setBase] = useState('hkd')
  const [amount, setAmount] = useState(0)
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
    return <Rate currency={item} rate = {quotes[item]} baseRate={quotes[base]} amount={amount} />
  })
  return (
    <div className="App">
      <div>
      <FormControl>
      <InputLabel id="simple-select-label">Base Currency</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          value={base}
          label="Base Currency"
          onChange={event => {
            setBase(event.target.value);
          }}
        >
          {
          currencies.map(item => {
            return <MenuItem key={item} value={item}>{item.toUpperCase()}</MenuItem>
          })
          }
        </Select>
        <TextField id="standard-basic" label="Base" variant="standard"  value={amount}
          onChange={event => {
            setAmount(event.target.value);
          }}
        />
      </FormControl>
       
      </div>
      {rates}
      {/* <Button variant="contained">Rate</Button> */}
    </div>
  );
}

export default App;
