import { useState } from "react";

export default function UserInput() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(event) => setInitialInvestment(event.target.value)}
            required
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={(event) => setAnnualInvestment(event.target.value)}
            required
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={expectedReturn}
            onChange={(event) => setExpectedReturn(event.target.value)}
            required
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            required
          ></input>
        </p>
      </div>
    </div>
  );
}
