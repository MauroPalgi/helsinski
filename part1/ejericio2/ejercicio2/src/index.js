import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handler, name }) => {
  return (
    <div>
      {" "}
      <button onClick={handler}>{name}</button>
    </div>
  );
};

const Statistic = ({ name, value }) => {
  //console.log(props);
  if (value === 0) return <div>No feedback given</div>;
  let positive = value[4] - value[3];
  let average = value[4] / value[5];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {name[0]} {value[0]}
          </tr>
          <tr>
            {name[1]} {value[1]}
          </tr>
          <tr>
            {name[2]} {value[2]}
          </tr>
          <tr>average: {average}</tr>
          <tr>positive: {positive}</tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [positive, setPositive] = useState(0);
  let allFeed = good + neutral + bad;
  console.log(allFeed);

  const addValueGood = () => {
    setClicks(clicks + 1);
    setPositive(positive + 1);
    return setGood(good + 1);
  };
  const addValueBad = () => {
    setClicks(clicks + 1);
    return setBad(bad + 1);
  };
  const addValueNeutral = () => {
    setClicks(clicks + 1);
    return setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>give feedBack</h1>
      <Button handler={addValueGood} name="good" />
      <Button handler={addValueNeutral} name="neutral" />
      <Button handler={addValueBad} name="bad" />
      <h2>statics</h2>
      <Statistic
        value={[good, neutral, bad, positive, clicks, allFeed]}
        name={["good", "neutral", "bad"]}
      />
    </div>
  );
};

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
