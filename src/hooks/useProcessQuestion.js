import { useState, useEffect } from "react"

import { tidy } from "@tensorflow/tfjs"
import * as qna from "@tensorflow-models/qna"

const useProcessQuestion = (question, fileContent) => {
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    const process = async () => {
      try {
        const model = await qna.load()
        const receivedAnswers = await model.findAnswers(question, fileContent.replaceAll("\n", ""))
        setAnswers(receivedAnswers)
      } catch (err) {
        console.log(err)
      }
    }

    tidy(() => {
      question.length > 0 && process()
    })
  }, [question, fileContent])

  return answers
}

export default useProcessQuestion