import "./word.css";

import React from "react";
import PropTypes from "prop-types";

import { getLetterVariant } from "./utils";

import Letter from "../letter";

export default function Word({ word, successCount, lastFail }) {
  return (
    <div className="word">
      {[...word].map((letter, i) => (
        <Letter
          key={letter + ":" + i}
          letter={letter}
          variant={getLetterVariant(i, successCount, lastFail)}
        />
      ))}
    </div>
  );
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  successCount: PropTypes.number,
  lastFail: PropTypes.bool,
};

Word.defaultProps = {
  successCount: 0,
  lastFail: false,
};
