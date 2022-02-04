import WORDS from "../../constants/words";

export const INITIAL_STATE = {
  word: WORDS[0],
  wordIndex: 0,
  letterSuccessCount: 0,
  letterLastFail: false,
};

export const ACTION_TYPES = {
  setNextWord: "SET_NEXT_WORD",
  incrementLetterSuccess: "INCREMENT_LETTER_SUCCESS",
  setLetterFail: "SET_LETTER_FAIL",
};

const setNextWord = (state) => ({
  ...state,
  word: WORDS[state.wordIndex + 1],
  wordIndex: state.wordIndex + 1,
  letterSuccessCount: 0,
  letterLastFail: false,
});

const incrementLetterSuccessReducer = (state) => ({
  ...state,
  letterSuccessCount: state.letterSuccessCount + 1,
});

const setLetterFailReducer = (state) => ({
  ...state,
  letterLastFail: true,
});

export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.setNextWord:
      return setNextWord(state);
    case ACTION_TYPES.incrementLetterSuccess:
      return incrementLetterSuccessReducer(state);
    case ACTION_TYPES.setLetterFail:
      return setLetterFailReducer(state);
    default:
      return state;
  }
}
