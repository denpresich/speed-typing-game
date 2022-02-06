export const INITIAL_STATE = {
  started: false,
  words: [],
  word: null,
  wordIndex: 0,
  charactersCount: 0,
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

const wordSuccessReducer = (state, { payload }) => ({
  ...state,
  word: state.words[state.wordIndex + 1],
  wordIndex: state.wordIndex + 1,
  charactersCount: state.charactersCount + payload.word.length,
});

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
