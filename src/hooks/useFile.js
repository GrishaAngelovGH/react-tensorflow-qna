import { useState, useEffect } from "react"

const useFile = () => {
  const [fileContent, setFileContent] = useState("")

  useEffect(() => {
    const readFile = async () => {
      try {
        const response = await fetch("files/london.txt")
        const data = await response.text()
        setFileContent(data)
      } catch (err) {
        console.log(err)
      }
    }

    readFile()
  }, [])

  return fileContent
}

export default useFile