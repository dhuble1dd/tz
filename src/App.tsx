import React from 'react';
import { ExchangeRate } from './components/ExchangeRate';
import { GetData } from './asyncAction/getData';



function App() {

  GetData()

  return (
    <ExchangeRate />
  )
};


export default App;
