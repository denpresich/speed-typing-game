import "./counter.css";

import React from "react";
import PropTypes from "prop-types";

import Typography from "../typography";

export default function Counter({ duration }) {
  const [number, setNumber] = React.useState(duration / 1000);

  React.useEffect(() => {
    const intervalId = setInterval(
      () =>
        setNumber((value) => {
          if (value === 0) {
            clearInterval(intervalId);
            return value;
          }

          return value - 1;
        }),
      1000
    );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="counter">
      <Typography className="counter__label">Time left</Typography>
      <Typography className="counter__value">{number}s</Typography>
    </div>
  );
}

Counter.propTypes = {
  duration: PropTypes.number.isRequired,
};
