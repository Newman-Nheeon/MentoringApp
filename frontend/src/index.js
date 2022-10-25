import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App/>, document.getElementById('root'));

if (module.hot) { // enables hot module replacement if plugin is installed
 module.hot.accept();
}