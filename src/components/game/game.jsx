import "./game.css";

import React from "react";
import randomWords from "random-words";

import Counter from "../counter";
import WordInput from "../word-input";
import Button from "../button";
import Typography from "../typography";

import reducer, { INITIAL_STATE, ACTION_TYPES } from "./reducer";

const GAME_DURATION = 60000; // 60s

export default function Game() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const handleStop = React.useCallback(
    () => dispatch({ type: ACTION_TYPES.stop }),
    [dispatch]
  );

  const handleStart = React.useCallback(() => {
    const words = randomWords(100);

    dispatch({ type: ACTION_TYPES.start, payload: { words } });

    setTimeout(handleStop, GAME_DURATION);
  }, [dispatch, handleStop]);

  const handleSuccess = React.useCallback(
    (word) => dispatch({ type: ACTION_TYPES.wordSuccess, payload: { word } }),
    [dispatch]
  );

  return (
    <div className="game">
      {state.started && state.stopped ? (
        <div className="game__stat">
          <div className="stat">
            <Typography className="stat__label">Characters</Typography>
            <Typography className="stat__value">
              {state.charactersCount}
            </Typography>
          </div>

          <div className="stat">
            <Typography className="stat__label">Words</Typography>
            <Typography classname="stat__value">{state.wordIndex}</Typography>
          </div>
        </div>
      ) : null}
      {state.started && !state.stopped ? (
        <>
          <div className="game__helper">
            <div className="stat">
              <Typography className="stat__label">Word</Typography>
              <Typography className="stat__value">{state.word}</Typography>
            </div>
            <Counter duration={GAME_DURATION} />
          </div>
          <div className="game__word-container">
            <div className="game__word">
              <WordInput word={state.word} onSuccess={handleSuccess} />
            </div>
          </div>
        </>
      ) : (
        <Button onClick={handleStart}>
          {state.stopped ? "Play again" : "Play"}
        </Button>
      )}
    </div>
  );
}
