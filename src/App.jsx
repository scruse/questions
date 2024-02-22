import { useState } from 'react'

import questions from './data'
import Question from './components/Question'
const App = () => {
  const [questionsList, setQuestionsList] = useState(questions)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const showQuestionInfo = (clickedIndex) => {
    setSelectedIndex(clickedIndex)
  }
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        {questionsList.map((question, index) => {
          return (
            <Question
              {...question}
              index={index}
              key={question.id}
              showQuestionInfo={showQuestionInfo}
              selectedIndex={selectedIndex}
            />
          )
        })}
      </div>
    </main>
  )
}
export default App
