import React from "react";

const Counter = (props) => {

  const incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  const decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={decrementScore}> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment" onClick={incrementScore}> + </button>
    </div>
  );
}

export default Counter;