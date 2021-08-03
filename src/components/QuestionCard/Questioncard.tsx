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
  hidden: string
}) {
  const questionModel = useQuestionModel()

  const [answer, setAnswer] = useState('')
  const [isDisabled, setDisabled] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (answer.toLowerCase() === props.correctAnswer.toLowerCase()) {
      questionModel.incrementScore()
      questionModel.incrementQuestion()
    } else {
      questionModel.incrementQuestion()
    }
    console.log(questionModel.questionNumber)
    console.log(`${questionModel.score}/5`)
    setDisabled(true)
  }

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
      <fieldset className='form__fieldset' disabled={isDisabled}>
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
        <p className={`${props.hidden} answer__text`}>
          The correct answer was: {props.correctAnswer}, You answered: {answer}
        </p>
        <button className='form__button' type='submit'>
          Submit Answer
        </button>
      </fieldset>
    </form>
  )
}

export default Questioncard
