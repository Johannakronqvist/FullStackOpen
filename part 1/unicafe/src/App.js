import { useState } from 'react';

const handleClick = (
  good,
  neutral,
  bad,
  setCount,
  count,
  setAll,
  all,
  setAvrage
) => {
  const avrageScore = getAvrageScore(good, neutral, bad);
  setCount(count + 1);
  setAll(all + 1);
  setAvrage(avrageScore);
};

const getAvrageScore = (good, neutral, bad) => {
  const goodScore = good * 1;
  const neutralScore = neutral * 0;
  const badScore = bad * -1;
  const countAvrageScore = (goodScore + neutralScore + badScore) / 3;

  return countAvrageScore;
};

const Header = ({ text }) => <h1>{text}</h1>;

const Button = (props) => {
  return (
    <button
      onClick={() => {
        handleClick(
          props.good,
          props.neutral,
          props.bad,
          props.setCount,
          props.count,
          props.setAll,
          props.all,
          props.setAvrage
        );
      }}
    >
      {props.text}
    </button>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />

          <tr>
            <td>all</td>
            <td>{props.all}</td>
          </tr>
          <tr>
            <td>avrage </td>
            <td>{props.avrage}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td> {!props.all ? 0 : props.good / props.all} %</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avrage, setAvrage] = useState(0);

  //(good: 1, neutral: 0, bad: -1)
  //all, avrage, positive

  return (
    <div>
      <Header text={'Give feedback'} />

      <Button
        text={'good'}
        setCount={setGood}
        count={good}
        setAll={setAll}
        setAvrage={setAvrage}
        all={all}
        good={good}
        neutral={neutral}
        bad={bad}
      />
      <Button
        text={'neutral'}
        setCount={setNeutral}
        count={neutral}
        setAll={setAll}
        setAvrage={setAvrage}
        all={all}
        good={good}
        neutral={neutral}
        bad={bad}
      />
      <Button
        text={'bad'}
        setCount={setBad}
        count={bad}
        setAll={setAll}
        setAvrage={setAvrage}
        all={all}
        good={good}
        neutral={neutral}
        bad={bad}
      />

      <Header text={'statistics'} />

      {!all ? (
        <div>No feedback given</div>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          avrage={avrage}
        />
      )}
    </div>
  );
};

export default App;

// import { useState } from 'react';

// const Header = ({ text }) => <h1>{text}</h1>;

// const Button = ({ text, setCount, count }) => {
//   return <button onClick={() => setCount(count + 1)}>{text}</button>;
// };

// const Statistics = (props) => {
//   return (
//     <section>
//       <div>good {props.good}</div>
//       <div>neutral {props.neutral}</div>
//       <div>bad {props.bad}</div>
//     </section>
//   );
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   return (
//     <div>
//       <Header text={'Give feedback'} />

//       <Button text={'good'} setCount={setGood} count={good} />
//       <Button text={'neutral'} setCount={setNeutral} count={neutral} />
//       <Button text={'bad'} setCount={setBad} count={bad} />

//       <Header text={'statistics'} />

//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   );
// };

// export default App;
