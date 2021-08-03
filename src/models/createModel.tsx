import { useState } from 'react'
import { createModel } from 'hox'

function useCounter() {
  const [score, setScore] = useState(0)
  const [questionNumber, setQuestionNumber] = useState(0)
  const incrementScore = () => setScore(score + 1)
  const incrementQuestion = () => setQuestionNumber(questionNumber + 1)

  return {
    score,
    incrementScore,
    questionNumber,
    incrementQuestion,
  }
}

export default createModel(useCounter)
