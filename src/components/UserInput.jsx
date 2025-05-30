export default function UserInput({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onInitialInvestmentChange,
  onAnnualInvestmentChange,
  onExpectedReturnChange,
  onDurationChange,
}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(event) => onInitialInvestmentChange(event.target.value)}
            required
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={(event) => onAnnualInvestmentChange(event.target.value)}
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
            onChange={(event) => onExpectedReturnChange(event.target.value)}
            required
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(event) => onDurationChange(event.target.value)}
            required
          ></input>
        </p>
      </div>
    </div>
  );
}
