import { useState, useEffect } from "react"

import { tidy } from "@tensorflow/tfjs"
import * as qna from "@tensorflow-models/qna"

const useProcessQuestion = (question, fileContent) => {
  const [answer, setAnswer] = useState({})
  const [isProcessing, setIsProcessing] = useState(true)

  useEffect(() => {
    const process = async () => {
      try {
        setIsProcessing(true)
        const model = await qna.load()
        const receivedAnswers = await model.findAnswers(question, fileContent.replaceAll("\n", ""))
        setAnswer(receivedAnswers[0])
        setIsProcessing(false)
      } catch (err) {
        console.log(err)
      }
    }

    tidy(() => {
      question.length > 0 && process()
    })
  }, [question, fileContent])

  return [answer, isProcessing]
}

export default useProcessQuestion