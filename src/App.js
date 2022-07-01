import './App.css';
import React from 'react';
import Card from './componenents/card';

function App() {
  const listCard = [1,2,3]
  const onClick = (event) => {
    console.log('event', event)
  }

  const onEvent = (e) => {
    console.log('e', e)
  }
  return (
    
    <div>
      <button onClick={onClick}>Click me</button>
      {listCard.map((el => <Card key={el} onEvent={onEvent}/>)) }
      <Card onEvent={onEvent}/>
      <Card onEvent={onEvent}/>
      <Card onEvent={onEvent}/>
    </div>
  );
}



export default App;
