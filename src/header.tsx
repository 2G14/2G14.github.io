import * as React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import { Hello } from "./Hello/Hello";

export class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <NavLink
              exact
              to="/"
              className="header-item"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="header-item"
              activeClassName="active"
            >
              About
            </NavLink>
            <NavLink
              to="/friends"
              className="header-item"
              activeClassName="active"
            >
              Friends
            </NavLink>
          </nav>
          <Route exact path="/" render={() => <Hello greeting="Hello!!" />} />
          <Route path="/about" component={About} />
          <Route path="/friends" component={Friends} />
        </div>
      </BrowserRouter>
    );
  }
}

/*const Home = () => (
  <div>
    <h1>Home</h1>
    <p>Welcome to Home Page</p>
  </div>
);*/

const About = () => (
  <div>
    <h1>About</h1>
    <p>Welcome to About Page</p>
  </div>
);

const Friends = () => (
  <div>
    <h1>Friends</h1>
    <p>Welcome to Friends Page</p>
  </div>
);
