export const INITIAL_STATE = {
  words: [],
  word: null,
  wordIndex: 0,
  letterSuccessCount: 0,
  letterLastFail: false,
};

export const ACTION_TYPES = {
  setWords: "SET_WORDS",
  setNextWord: "SET_NEXT_WORD",
  incrementLetterSuccess: "INCREMENT_LETTER_SUCCESS",
  setLetterFail: "SET_LETTER_FAIL",
};

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
});

export default function reducer(state, action) {
  switch (action.type) {
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
