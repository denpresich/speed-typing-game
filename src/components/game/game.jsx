import "./game.css";

import React from "react";

import Word from "../word";

import reducer, { INITIAL_STATE, ACTION_TYPES } from "./reducer";

export default function Game() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const handleKeyDown = (event) => {
    const correct = event.key === state.word[state.letterSuccessCount];

    if (correct) {
      state.word.length - 1 === state.letterSuccessCount
        ? dispatch({ type: ACTION_TYPES.setNextWord })
        : dispatch({ type: ACTION_TYPES.incrementLetterSuccess });
    } else {
      dispatch({ type: ACTION_TYPES.setLetterFail });
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="game">
      <Word
        word={state.word}
        successCount={state.letterSuccessCount}
        lastFail={state.letterLastFail}
      />
    </div>
  );
}
