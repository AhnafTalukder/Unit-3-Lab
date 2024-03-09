import { useState } from 'react'
import react from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  


  const dict = {
   
    1 : ["What is the capital of India", "New Delhi"],
    2 : ["Which ocean surrounds Kiribati?", "Pacific Ocean"],
    3 : ["What map projection stretches the poles?", "Mercator"],
    4 : ["Looking at a town level, is it a small scale or large scale map?", "large scale"],
    5 : ["What is the time zone for Virginia", "Eastern Standard Time"],
    6 : ["How many countries are in Europe?", "50 countries"],
    7 : ["Which part of Africa is Somalia in?", "East Africa"],
    8 : ["Which ocean is underneath India?", "Indian Ocean"],
    9 : ["What canal connects two oceans?", "Panama Canal"],
    10 : ["Where is the strait of Malacca located?", "Southeast Asia"]
  };




  const countForward = () =>{
    if(count == 10){
      
    }else{
      setCount(count+1);
    }
  }


  const countBackward = () =>{
    if (count == 1){

    }else{
      setCount(count-1);
    }
  }

  

  


  return (
    

<div> 

    <div className="container">
    <div className="card-container">

    <Card count={count} back={dict[count][1]} front={dict[count][0]}/>
    <button id="btn" onClick={countBackward}>←</button>
    <button id="btn" onClick={countForward}>→</button>
   
    </div>
    <div className='bot-container'>
      <h1>Bot Container</h1>
    </div>
  </div>


</div>
  )
}

export default App
