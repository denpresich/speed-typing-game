import "./typography.css";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

export default function Typography({ className, children }) {
  return <div className={cn("typography", className)}>{children}</div>;
}

Typography.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: null,
};
