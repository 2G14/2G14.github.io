import * as React from "react";
import { Route } from "react-router-dom";
import { Hello } from "./Hello/Hello";
import { About } from "./About/About";
import { Friends } from "./Friends/Friends";

// Main Component
export class Main extends React.Component {
  // render
  render() {
    return (
      <main>
        <Route exact path="/" render={() => <Hello greeting="Hello!!" />} />
        <Route path="/about" component={About} />
        <Route path="/friends" component={Friends} />
      </main>
    );
  }
}
