import React from "react";
import { render } from "react-dom";

import AppContainer from "./components/AppContainer/AppContainer";

const App: React.FC = () => <AppContainer />;

const rootNode = document.querySelector("#root");
// eslint-disable-next-line fp/no-unused-expression
render(<App />, rootNode);
