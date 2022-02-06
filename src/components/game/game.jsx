import "./game.css";

import React from "react";
import randomWords from "random-words";

import Counter from "../counter";
import WordInput from "../word-input";

import reducer, { INITIAL_STATE, ACTION_TYPES } from "./reducer";

export default function Game() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const handleStop = React.useCallback(
    () => dispatch({ type: ACTION_TYPES.stop }),
    [dispatch]
  );

  const handleStart = React.useCallback(() => {
    const words = randomWords(100);

    dispatch({ type: ACTION_TYPES.start, payload: { words } });

    setTimeout(handleStop, 60000);
  }, [dispatch, handleStop]);

  const handleSuccess = React.useCallback(
    (word) => dispatch({ type: ACTION_TYPES.wordSuccess, payload: { word } }),
    [dispatch]
  );

  return (
    <div className="game">
      {state.started && state.stopped ? (
        <div className="game__stat">
          <div>Characters: {state.charactersCount}</div>
          <div>Words: {state.wordIndex}</div>
        </div>
      ) : null}
      {state.started && !state.stopped ? (
        <>
          <div className="game__helper">
            <div>Word: {state.word}</div>
            <Counter duration={60000} />
          </div>
          <div className="game__word-container">
            <div className="game__word">
              <WordInput word={state.word} onSuccess={handleSuccess} />
            </div>
          </div>
        </>
      ) : (
        <button className="game__start-btn" onClick={handleStart}>
          {state.stopped ? "Play again" : "Play"}
        </button>
      )}
    </div>
  );
}
