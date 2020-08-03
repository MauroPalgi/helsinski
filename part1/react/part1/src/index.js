import React, {useState} from 'react'
import ReactDOM from 'react-dom'

//! lesson C - part 1

// const Hello = ({age, name}) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - age;
//   }
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were Probably born in {bornYear()} </p>
//     </div>
//   )
// }


// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

//ReactDOM.render(<App />, document.getElementById('root'))

//! End lesson C - part 1

//! lesson C - part 2

// let counter = 1

// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />, document.getElementById("root"))
// }

// setInterval( () => {
//   refresh()
//   counter += 1 
// }, 1000)

//! End lesson C - part 2


const Display = ({counter}) => <div>{counter}</div>

const Increment = ({handleClick, text}) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>

  )
}

const Decrement = ({handleClick, text}) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>

  )
}

const Reset = ({handleClick, text}) => {
  return(
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}
const App = () => {
  const [counter, setCounter] = useState(0)

  // setTimeout(() => {
  //  return setCounter(counter < 10 ? counter + 1: "Termino el show")  
  // }, 1000) 

  // const handleClick = () => {
  //   console.log("Clicked", counter);
  //   return setCounter(counter +1)
  // }
  const incrementByOne = () => setCounter(counter + 1);
  const decrementByOne = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return(
    <div>
    <Display counter={counter} />
    <Increment handleClick={incrementByOne} text="plus"/>
    <Decrement handleClick={decrementByOne} text="minus"/>
    <Reset handleClick={reset} text="reset"/>    
    </div>
    )
  }    
  

ReactDOM.render(<App />, document.getElementById("root"))