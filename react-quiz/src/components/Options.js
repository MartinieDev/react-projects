function Options({ question, dispatch, answer }) {
  return (
    <div className="options">
      {question.options.map((option, idx) => (
        <button
          key={option}
          className={`btn btn-option  ${answer !== null ? (idx === question.correctOption ? 'correct' : 'wrong') : ''}`}
          disabled={answer !== null}
          onClick={() =>
            dispatch({
              type: 'newAnswer',  
              payload: idx,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
