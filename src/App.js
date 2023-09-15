import React, { useState } from "react";
import ChoiceButtons from "./Components/ChoiceButtons";
import ResultMessage from "./Components/ResultMessage";

const choices = [rock, paper, scissors];

function App(){
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  //......Rest of Code

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
