import "./letter.css";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

export default function Letter({ letter, variant }) {
  return (
    <div
      className={cn({
        letter: variant === "pending",
        "letter--success": variant === "success",
        "letter--fail": variant === "fail",
      })}
    >
      {letter}
    </div>
  );
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["pending", "success", "fail"]),
};

Letter.defaultProps = {
  variant: "pending",
};
