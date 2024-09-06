import { useState } from 'react'

const Button = ({ text, clickHandler }) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

const Feedback = ({goodHandler, neutralHandler, badHandler}) => {
  return (
    <>
      <h1>give feedback</h1>
      <Button text={"bad"} clickHandler={badHandler} />
      <Button text={"neutral"} clickHandler={neutralHandler} />
      <Button text={"good"} clickHandler={goodHandler} />
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + bad + neutral

  const clickHandler = (previousValue, setter) => setter(previousValue + 1)
  const average = () => (good - bad) / total
  const positive = () => good * 100 / total

  return (
    <div>
      <Feedback 
        goodHandler={() => clickHandler(good, setGood)}
        neutralHandler={() => clickHandler(neutral, setNeutral)}
        badHandler={() => clickHandler(bad, setBad)}
      />

      <h1>statistics</h1>
      <table>
        <StatisticLine text={"good"} value={good}/>
        <StatisticLine text={"neutral"} value={neutral}/>
        <StatisticLine text={"bad"} value={bad}/>
        <StatisticLine text={"total"} value={total}/>
        <StatisticLine text={"average"} value={average()}/>
        <StatisticLine text={"positive"} value={positive()}/>
      </table>
    </div>
  )
}
 
export default App
