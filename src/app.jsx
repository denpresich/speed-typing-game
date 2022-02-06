import React from "react";
import ReactGA from "react-ga";

import Game from "./components/game";

ReactGA.initialize("UA-219589386-1");
ReactGA.pageview(window.location.href);

export default function App() {
  return <Game />;
}
