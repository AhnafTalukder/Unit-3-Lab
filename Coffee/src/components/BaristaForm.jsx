import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json"


const BaristaForm = () => {

  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });

  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');

  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({

  });

  const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  }


  const onNewDrink = () =>{
    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');

    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': '' });
      
    getNextDrink();

  }

  const getNextDrink = () =>{
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  }

  const onCheckAnswer = () =>{

    if (trueRecipe.temp != inputs['temperature']){
      setCheckedTemperature('wrong');
    }
    else {
      setCheckedTemperature("correct");
    }


    if (trueRecipe.syrup != inputs['syrup']){
      setCheckedSyrup('wrong');
    }
    else {
      setCheckedSyrup("correct");
    }

    if (trueRecipe.milk != inputs['milk']){
      setCheckedMilk('wrong');
    }
    else {
      setCheckedMilk("correct");
    }

    if (trueRecipe.blended != inputs['blended']){
      setCheckedBlended('wrong');
    }
    else {
      setCheckedBlended("correct");
    }

  }
  
  return (
    <>
   
    <div>
      <h2>Hi, I'd like to order a:</h2>
      <div className="drink-container"><h2 className="mini-header">{currentDrink}</h2></div>
      <form>
        {Object.keys(inputs).map(key => (
          <div>
          <h3>{key}</h3>
          <div  className="answer-space" >
            {inputs[key]} 
          </div>
          <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }))}
            label={key}
            choices={ingredients[key]}
            checked={inputs[key]}
          />
          </div>

        ))}
      </form>
      <button onClick={onCheckAnswer} type="submit" className="button submit">Check Answer</button>
      <button onClick={onNewDrink} type="new-drink-button" className="button newdrink">🔄</button>
    </div>
    </>

    )
  
  
};

export default BaristaForm;