import React from 'react'
import quizData from './assets/data.json'
import QuestionCard from './components/QuestionCard/Questioncard'
import './App.css'

function App() {
  console.log(quizData)

  return (
    <div className='App'>
      {quizData.map((question) => {
        return (
          <QuestionCard
            answerOptions={question.answerOptions ? question.answerOptions : []}
            topic={question.topic}
            type={question.type}
            id={question.id}
            correctAnswer={question.correctAnswer}
            checked={false}
          />
        )
      })}
    </div>
  )
}

export default App
