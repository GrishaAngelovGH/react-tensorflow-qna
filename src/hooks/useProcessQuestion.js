import { useState, useEffect } from "react"

import { tidy } from "@tensorflow/tfjs"
import * as qna from "@tensorflow-models/qna"

const useProcessQuestion = (question, fileContent) => {
  const [answers, setAnswers] = useState([])
  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    const process = async () => {
      try {
        setIsProcessing(true)
        const model = await qna.load()
        const receivedAnswers = await model.findAnswers(question, fileContent.replaceAll("\n", ""))
        setAnswers(receivedAnswers)
        setIsProcessing(false)
      } catch (err) {
        console.log(err)
      }
    }

    tidy(() => {
      question.length > 0 && process()
    })
  }, [question, fileContent])

  return [answers, isProcessing]
}

export default useProcessQuestion