import react from 'react'
import './Card.css'


const Card = (prop) =>{

    return(
        
        
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <div id="number"><h1>{prop.count}</h1></div>
                <h1>{prop.front}</h1>
            </div>
            <div class="flip-card-back">
                <h2>{prop.back}</h2>
            </div>
         </div>
        </div>
        
        
    )
   



}

export default Card;