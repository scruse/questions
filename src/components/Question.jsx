const Question = ({ title, info, index, showQuestionInfo, selectedIndex }) => {
  return (
    <div className="question">
      <header>
        {title}{' '}
        <span className="question-btn" onClick={() => showQuestionInfo(index)}>
          +
        </span>
      </header>
      {selectedIndex === index && <p>{info}</p>}
    </div>
  )
}

export default Question
