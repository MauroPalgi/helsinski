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

const Statistic = ({ name, good, bad, neutral, all, positive, average }) => {
  //console.log(props);
  if (all === 0) return <div>No feedback given</div>;
  // let positive = value[4] - value[3];
  // let average = value[4] / value[5];
  let porcentalAvrg = (all / average) * 100;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              {name[0]} {good}
            </td>
          </tr>
          <tr>
            <td>
              {name[1]} {neutral}
            </td>
          </tr>
          <tr>
            <td>
              {name[2]} {bad}
            </td>
          </tr>
          <tr>
            <td>
              {name[3]} {average}
            </td>
          </tr>
          <tr>
            <td>
              {name[4]} {all / positive}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const addValueGood = () => {
    setAll(all + 1);
    setAverage(average + 1);
    setPositive(positive + 1);
    return setGood(good + 1);
  };
  const addValueBad = () => {
    setAll(all + 1);
    setAverage(average - 1);
    return setBad(bad + 1);
  };
  const addValueNeutral = () => {
    setAll(all + 1);
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
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        positive={positive}
        average={average}
        name={["good", "neutral", "bad", "all", "positive"]}
      />
    </div>
  );
};

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
