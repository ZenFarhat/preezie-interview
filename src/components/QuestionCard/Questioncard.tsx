import React from 'react'
import '../../styles/style.css'
import { useState } from 'react'

function Questioncard(props: {
  topic: string
  type: string
  id: string
  correctAnswer: string
  answerOptions: string[]
  checked: boolean
  index: number
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
      setAnswer('')
    } else {
      console.log('Incorrect answer detected: ' + score)
      setAnswer('')
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
      id={props.id}
    >
      <h1 className='form__header'>{`${props.index}. ${props.topic}`}</h1>
      {props.type === 'SingleSelect' ? (
        props.answerOptions?.map((option) => {
          return (
            <label className='form__label'>
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
          className='form__text-input'
          type='text'
          required
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value)
          }}
        />
      )}
      <button className='form__button' type='submit'>
        Submit Answer
      </button>
    </form>
  )
}

export default Questioncard
