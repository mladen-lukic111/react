import { useState } from "react";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 200,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  )
}

export default App;
