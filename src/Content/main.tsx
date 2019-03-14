import * as React from "react";
import { Route } from "react-router-dom";
import { Hello } from "./Hello/Hello";
import { About } from "./About/About";
import { Welcome } from "./Welcome/Welcome";

// Main Component
export class Main extends React.Component {
  // render
  render() {
    const home = {exact: true, path: "/", render: () => <Hello greeting="Hello!!" />};
    const about = {exact: false, path: "/about", render: () => <About />};
    const welcome = {exact: false, path: "/welcome", render: () => <Welcome />};
    const routes = [home, about, welcome];
    return (
      <main>
        {routes.map((route, i) => {
          return <Route key={i} {...route} />;
        })}
      </main>
    );
  }
}
