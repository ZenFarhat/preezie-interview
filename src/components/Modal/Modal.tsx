import React, { useState } from 'react'
import useQuestionModel from '../../models/createModel'

function Modal() {
  const questionModel = useQuestionModel()
  const [isHidden, setHidden] = useState('none')

  return (
    <div className='modal__container' style={{ display: `${isHidden}` }}>
      <div className='modal'>
        <h1>Your score was:</h1>
        <h1>{questionModel.score}/5</h1>
        <button
          className='close__modal'
          onClick={() => {
            setHidden('none')
          }}
        >
          Check Answers
        </button>
      </div>
    </div>
  )
}

export default Modal
