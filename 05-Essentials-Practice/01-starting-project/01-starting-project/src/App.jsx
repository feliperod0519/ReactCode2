import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";

function App() {

  const [userInput,setUserInput] = useState({
                                                  initialInvestment: 10000,
                                                  annualInvestment: 1200,
                                                  expectedReturn: 6,
                                                  duration: 10,
                                      });
  
  function handleChange(inputIdentifier,newValue){
    setUserInput( p=>{
        return {
                  ...p,
                  [inputIdentifier]:+newValue
                }
    })
  }

  const inputIsVaid = userInput.duration >= 1

  return (
    <>
        <Header />
        <UserInput onChange={handleChange} userInput={userInput} />
        {!inputIsVaid && <p className="center">Please enter duration bigger than 0</p>}
        {inputIsVaid && <Results input={userInput} />}
    </>
  )
}

export default App
