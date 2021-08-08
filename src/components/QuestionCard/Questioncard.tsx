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
  nextQuestion: string
}) {
  const questionModel = useQuestionModel()

  const [answer, setAnswer] = useState('')
  const [isDisabled, setDisabled] = useState(false)
  const [isCorrect, setCorrect] = useState('Correct!')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (answer.toLowerCase() === props.correctAnswer.toLowerCase()) {
      questionModel.incrementScore()
      questionModel.incrementQuestion()
    } else {
      questionModel.incrementQuestion()
      setCorrect('Incorrect!')
    }
    console.log(questionModel.questionNumber)
    console.log(`${questionModel.score}/5`)
    console.log(props.nextQuestion)
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
        <p className={`${props.hidden}__answer-text answer__text`}>
          {isCorrect} The correct answer was: {props.correctAnswer}, You
          answered: {answer}
        </p>

        <button type='submit' className='form__button'>
          <a href={`#${props.nextQuestion}`}>Submit Answer</a>
        </button>
      </fieldset>
    </form>
  )
}

export default Questioncard
