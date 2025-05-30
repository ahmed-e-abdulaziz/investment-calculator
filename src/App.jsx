import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);
  const inputIsValid = duration > 0;
  return (
    <>
      <Header />
      <UserInput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        onInitialInvestmentChange={(val) => setInitialInvestment((_) => +val)}
        onAnnualInvestmentChange={(val) => setAnnualInvestment((_) => +val)}
        onExpectedReturnChange={(val) => setExpectedReturn((_) => +val)}
        onDurationChange={(val) => setDuration((_) => +val)}
      />
      {inputIsValid ? (
        <Results
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          expectedReturn={expectedReturn}
          duration={duration}
        />
      ) : (
        <p className="center">Please enter a duration greater than 0.</p>
      )}
    </>
  );
}

export default App;
