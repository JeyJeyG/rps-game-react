import React, { useState } from "react";
import ChoiceButtons from "./Components/ChoiceButtons";
import ResultMessage from "./Components/ResultMessage";

const choices = ['rock', 'paper', 'scissors'];

function App(){
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handlePlayerChoice = (choice) => {
    // Implement the logic for handling the player's choice here
  };

  const handleRestart = () => {
    // Implement the logic for restarting the game here
  };

  // ... Rest of your code


return(
  <div>
    <h1>Rock, Paper, Scissors</h1>
    <ResultMessage result={result} />
    <ChoiceButtons onChoice={handlePlayerChoice} />
    <button onClick={handleRestart}>Restart</button>
  </div>
);
}
export default App;
