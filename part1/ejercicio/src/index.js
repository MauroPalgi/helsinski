import React from "react";
import ReactDOM from "react-dom";

const Header = ({ course: { name } }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

const Content = ({ course: { parts } }) => {
  // USAR DECONTRUCTOR PARA CÓDIGO MAS ENTENDIBLE
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

const Total = ({ course: { parts } }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return (
    <div>
      <p>Number of excercises {total}</p>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
