export const INITIAL_STATE = {
  started: false,
  words: [],
  word: null,
  wordIndex: 0,
  letterSuccessCount: 0,
  letterLastFail: false,
  failCount: 0,
};

export const ACTION_TYPES = {
  start: "START",
  stop: "STOP",
  setWords: "SET_WORDS",
  setNextWord: "SET_NEXT_WORD",
  incrementLetterSuccess: "INCREMENT_LETTER_SUCCESS",
  setLetterFail: "SET_LETTER_FAIL",
};

const startReducer = ({ payload }) => ({
  ...INITIAL_STATE,
  started: true,
  words: payload.words,
  word: payload.words[0],
  wordIndex: 0,
});
const stopReducer = (state) => ({ ...state, started: false });

const setWordsReducer = (state, { payload }) => ({
  ...state,
  words: payload.words,
  word: payload.words[0],
  wordIndex: 0,
});

const setNextWordReducer = (state) => ({
  ...state,
  word: state.words[state.wordIndex + 1],
  wordIndex: state.wordIndex + 1,
  letterSuccessCount: 0,
  letterLastFail: false,
});

const incrementLetterSuccessReducer = (state) => ({
  ...state,
  letterSuccessCount: state.letterSuccessCount + 1,
  letterLastFail: false,
});

const setLetterFailReducer = (state) => ({
  ...state,
  letterLastFail: true,
  failCount: state.failCount + 1,
});

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.start:
      return startReducer(action);
    case ACTION_TYPES.stop:
      return stopReducer(state);
    case ACTION_TYPES.setWords:
      return setWordsReducer(state, action);
    case ACTION_TYPES.setNextWord:
      return setNextWordReducer(state);
    case ACTION_TYPES.incrementLetterSuccess:
      return incrementLetterSuccessReducer(state);
    case ACTION_TYPES.setLetterFail:
      return setLetterFailReducer(state);
    default:
      return state;
  }
}
