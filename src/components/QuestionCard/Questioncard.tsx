import React from 'react'
import '../../styles/style.css'
import { useState } from 'react'
import useQuestionModel from '../../models/createModel'

function Questioncard(props: {
  topic: string
  type: string
  id: string
  correctAnswer: string
  answerOptions: string[]
  checked: boolean
  index: number
}) {
  const questionModel = useQuestionModel()

  const [answer, setAnswer] = useState('')
  const [isDisabled, setDisabled] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (answer.toLowerCase() === props.correctAnswer.toLowerCase()) {
      questionModel.incrementScore()
      console.log('Correct answer detected')
      setAnswer('')
    } else {
      console.log('Incorrect answer detected')
      setAnswer('')
    }
    questionModel.incrementQuestion()
    console.log(questionModel.score)
    console.log(questionModel.questionNumber)
    setDisabled(true)
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
      <fieldset disabled={isDisabled}>
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
      </fieldset>
    </form>
  )
}

export default Questioncard
