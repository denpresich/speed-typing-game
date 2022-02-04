import "./game.css";

import React from "react";
import randomWords from "random-words";

import Word from "../word";

import reducer, { INITIAL_STATE, ACTION_TYPES } from "./reducer";

export default function Game() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const handleKeyDown = (event) => {
    const correct = event.key === state.word[state.letterSuccessCount];

    if (correct) {
      dispatch({ type: ACTION_TYPES.incrementLetterSuccess });

      if (state.word.length - 1 === state.letterSuccessCount) {
        setTimeout(() => dispatch({ type: ACTION_TYPES.setNextWord }), 300);
      }
    } else {
      dispatch({ type: ACTION_TYPES.setLetterFail });
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleStart = () => {
    const words = randomWords(100);

    dispatch({ type: ACTION_TYPES.start, payload: { words } });
  };

  return (
    <div className="game">
      {state.started ? (
        <>
          <div className="game__stat">
            <div>Fails: {state.failCount}</div>
            <div>Words: {state.wordIndex}</div>
          </div>
          <div className="game__word-container">
            <div className="game__word">
              <Word
                word={state.word || ""}
                successCount={state.letterSuccessCount}
                lastFail={state.letterLastFail}
              />
            </div>
          </div>
        </>
      ) : (
        <button className="game__start-btn" onClick={handleStart}>
          Start
        </button>
      )}
    </div>
  );
}
