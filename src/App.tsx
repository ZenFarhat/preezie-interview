import React, { useState } from 'react'
import Nav from './components/Nav/Nav'
import quizData from './assets/data.json'
import QuestionCard from './components/QuestionCard/Questioncard'
import './styles/style.css'
import useQuestionModel from '../src/models/createModel'

function App() {
  const questionModel = useQuestionModel()
  const [isHidden, setHidden] = useState('hidden')

  const renderResults = (questionNumber: number) => {
    if (questionNumber >= 5) {
      return (
        <div className='score__container'>
          <h1 className='score'> Your score was: {questionModel.score}/5!</h1>
          <button
            onClick={() => {
              setHidden('')
            }}
            className='show__answers-btn'
          >
            Show Answers
          </button>
        </div>
      )
    } else {
      return (
        <div className='incomplete__container'>
          <h1 className='incomplete__quiz-text'>
            Complete the quiz to see your results!
          </h1>
        </div>
      )
    }
  }

  return (
    <div className='App'>
      <Nav />
      {quizData.map((question, i) => {
        return (
          <QuestionCard
            answerOptions={question.answerOptions ? question.answerOptions : []}
            topic={question.topic}
            type={question.type}
            id={question.id}
            correctAnswer={question.correctAnswer}
            checked={false}
            index={i + 1}
            hidden={isHidden}
          />
        )
      })}
      <div className='results__container' id='results'>
        {renderResults(questionModel.questionNumber)}
      </div>
    </div>
  )
}

export default App
