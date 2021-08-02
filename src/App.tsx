import React from 'react'
import Nav from './components/Nav/Nav'
import quizData from './assets/data.json'
import QuestionCard from './components/QuestionCard/Questioncard'
import './styles/style.css'

function App() {
  console.log(quizData)

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
          />
        )
      })}
    </div>
  )
}

export default App
