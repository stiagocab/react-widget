import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// WIDGET
let init = null;
const MyWidget = {
  config: (config) => {
    init = config;
  },
  widget: {
    new: () => {
      return {
        render: () => {
          ReactDOM.render(<App />, document.querySelector(init.selector));
        },
        unmount() {
          ReactDOM.unmountComponentAtNode(
            document.querySelector(init.selector)
          );
        },
      };
    },
  },
};

export default MyWidget;
