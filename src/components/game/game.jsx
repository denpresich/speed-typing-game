import "./game.css";

import React from "react";
import randomWords from "random-words";

import Word from "../word";
import Counter from "../counter";

import reducer, { INITIAL_STATE, ACTION_TYPES } from "./reducer";

export default function Game() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const handleKeyDown = (event) => {
    if (state.stopped) return;

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

  const handleStop = () => dispatch({ type: ACTION_TYPES.stop });

  const handleStart = () => {
    const words = randomWords(100);

    dispatch({ type: ACTION_TYPES.start, payload: { words } });

    setTimeout(handleStop, 60000);
  };

  return (
    <div className="game">
      {state.started && state.stopped ? (
        <div className="game__stat">
          <div>Fails: {state.failCount}</div>
          <div>Characters: {state.charactersCount}</div>
          <div>Words: {state.wordIndex}</div>
        </div>
      ) : null}
      {state.started && !state.stopped ? (
        <>
          <Counter duration={60000} />
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
