import React, { useState } from 'react'
import Nav from './components/Nav/Nav'
import quizData from './assets/data.json'
import QuestionCard from './components/QuestionCard/Questioncard'
import Modal from './components/Modal/Modal'
import './styles/style.css'
import useQuestionModel from '../src/models/createModel'

function App() {
  const questionModel = useQuestionModel()
  const [isHidden, setHidden] = useState('hidden')

  const renderResults = (questionNumber: number) => {
    if (questionNumber >= 5) {
      return (
        <button
          onClick={() => {
            setHidden('')
          }}
        >
          View Results
        </button>
      )
    } else {
      return <h1>Complete quiz to see your results!</h1>
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
      <Modal />
    </div>
  )
}

export default App
