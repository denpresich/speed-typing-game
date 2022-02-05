import React from "react";
import PropTypes from "prop-types";

export default function Counter({ duration }) {
  const [number, setNumber] = React.useState(duration / 1000);

  React.useEffect(() => {
    const intervalId = setInterval(
      () =>
        setNumber((number) => {
          if (number === 0) {
            clearInterval(intervalId);
            return number;
          }

          return number - 1;
        }),
      1000
    );

    return () => clearInterval(intervalId);
  }, []);

  return <div>Time left: {number}s</div>;
}

Counter.propTypes = {
  duration: PropTypes.number.isRequired,
};
