import { useState } from 'react';
import Questions from './components/Question'
import './App.css';

function App() {

  const questionBank = [{
    id: 0,
    type: 'text',
    text: 'what is your name ?',
  },
  {
    id: 1,
    type: 'select',
    text: 'what is your gender ?',
    options: ['Male', 'Female'],
  },
  {
    id: 2,
    type: 'radio',
    text: 'what is your fav color ?',
    options: ['Red', 'Yellow', 'Green'],
  }];

  let QuestionAnswers = {
    0: 'jithin',
    1: 'Female',
    2: 'Yellow'
  }

  const [answers, setAnswers] = useState(QuestionAnswers);

  let [currentQuestion, setCurrentQuestion] = useState(0);

  function onChange(args) {
    let updatedAnswers = { ...answers, [args["id"]]: args["value"] }
    console.log(updatedAnswers);
    setAnswers(updatedAnswers);
  }

  function moveToNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function submit() {
    console.log(questionBank[0].value);
  }

  return (
    <div className="App">
      <h1>Questions</h1>
      {[0, 1, 2].includes(currentQuestion) && <Questions question={questionBank[currentQuestion]} answer={answers[currentQuestion]} onChange={(args) => onChange(args)} />}
      {currentQuestion <= 2 && <button className="Next-btn" onClick={moveToNext}>Next Question</button>}
      {currentQuestion === 3 &&
        <div>
          <p>Thanks for taking the survey. Submit your Results!</p>
          <button className="Next-btn" onClick={submit}>submit</button>
        </div>
      }
    </div>
  );
}

export default App;
