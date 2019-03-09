import * as React from "react";
import { HashRouter } from "react-router-dom";
import { Header } from "./Content/header";
import { Main } from "./Content/main";

// App Component
export class App extends React.Component {
  // render
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Main />
        </div>
      </HashRouter>
    );
  }
}
