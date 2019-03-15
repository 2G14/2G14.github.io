import * as React from "react";
import { Twitter } from "./Twitter";
import { GitHub } from "./GitHub";

// About
export class About extends React.Component {
  // render
  render() {
    return (
      <div>
        <h1>About</h1>
        <ul>
          <li><Twitter /></li>
          <li><GitHub /></li>
        </ul>
      </div>
    );
  }
}
