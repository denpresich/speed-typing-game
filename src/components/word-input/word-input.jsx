import React from "react";
import PropTypes from "prop-types";

import Word from "../word";

export default function WordInput({ word, onSuccess }) {
  const [successCount, setSuccessCount] = React.useState(0);
  const [lastFail, setLastFail] = React.useState(false);

  const handleKeyDown = (event) => {
    const correct = event.key === word[successCount];

    if (!correct) return setLastFail(true);

    const lastChar = word.length - 1 === successCount;

    setSuccessCount((count) => count + 1);

    if (lastChar) {
      setTimeout(() => {
        onSuccess(word);
        setSuccessCount(0), setLastFail(false);
      }, 300);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return <Word word={word} successCount={successCount} lastFail={lastFail} />;
}

WordInput.propTypes = {
  word: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};
