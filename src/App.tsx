import * as React from "react";
import { HashRouter, NavLink, Route } from "react-router-dom";
import { Hello } from "./Hello/Hello";
import { About } from "./About/About";

// App Component
export class App extends React.Component {
  // render
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    exact
                    to="/"
                    className="header-item"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="header-item"
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/friends"
                    className="header-item"
                    activeClassName="active"
                  >
                    Friends
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Route exact path="/" render={() => <Hello greeting="Hello!!" />} />
            <Route path="/about" component={About} />
            <Route path="/friends" component={Friends} />
          </main>
        </div>
      </HashRouter>
    );
  }
}

const Friends = () => (
  <div>
    <h1>Friends</h1>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
    <p>Welcome to Friends Page</p>
  </div>
);
