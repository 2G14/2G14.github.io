import * as React from "react";
import { Route } from "react-router-dom";
import { pages } from "./pages";

// Main Component
export class Main extends React.Component {
  // render
  render() {
    return (
      <main>
        {pages.map((page, i) => {
          return <Route key={i} exact={page.exact} {...page.route} />;
        })}
      </main>
    );
  }
}
