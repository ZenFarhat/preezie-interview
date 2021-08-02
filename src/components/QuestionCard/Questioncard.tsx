import React from 'react'
import { useState } from 'react'

function Questioncard(props: {
  topic: string
  type: string
  id: string
  correctAnswer: string
  answerOptions: string[]
  checked: boolean
}) {
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (answer.toLowerCase() === props.correctAnswer.toLowerCase()) {
      setScore(score + 1)
      setQuestionsAnswered(questionsAnswered + 1)
      console.log('Correct answer detected: ' + score)
    } else {
      console.log('Incorrect answer detected: ' + score)
    }
  }

  console.log(props)

  return (
    <form
      action=''
      className='question__container'
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <p>{props.topic}</p>
      {props.type === 'SingleSelect' ? (
        props.answerOptions?.map((option) => {
          return (
            <label htmlFor=''>
              {option}
              <input
                type='radio'
                name='action'
                id=''
                required
                value={option}
                onChange={(e) => {
                  setAnswer(e.target.value)
                }}
              />
            </label>
          )
        })
      ) : (
        <input
          type='text'
          required
          onChange={(e) => {
            setAnswer(e.target.value)
          }}
        />
      )}
      <button type='submit'>Submit Answer</button>
    </form>
  )
}

export default Questioncard
