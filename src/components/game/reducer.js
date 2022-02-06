const HIGHSCORE_LOCAL_KEY = "highscore";

export const INITIAL_STATE = {
  started: false,
  words: [],
  word: null,
  wordIndex: 0,
  score: 0,
  highscore: Number(localStorage.getItem(HIGHSCORE_LOCAL_KEY)),
};

export const ACTION_TYPES = {
  start: "START",
  stop: "STOP",
  wordSuccess: "WORD_SUCCESS",
};

const startReducer = ({ payload }) => ({
  ...INITIAL_STATE,
  started: true,
  words: payload.words,
  word: payload.words[0],
});
const stopReducer = (state) => ({ ...state, started: false });

const wordSuccessReducer = (state, { payload }) => {
  const score = state.score + payload.word.length;
  const highscore = Math.max(state.highscore, score);

  if (highscore > state.highscore) {
    localStorage.setItem(HIGHSCORE_LOCAL_KEY, highscore);
  }

  return {
    ...state,
    word: state.words[state.wordIndex + 1],
    wordIndex: state.wordIndex + 1,
    score,
    highscore,
  };
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.start:
      return startReducer(action);
    case ACTION_TYPES.stop:
      return stopReducer(state);
    case ACTION_TYPES.wordSuccess:
      return wordSuccessReducer(state, action);
    default:
      return state;
  }
}
