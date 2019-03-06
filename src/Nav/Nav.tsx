import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
//import { Hello } from "./../Hello/Hello";

export class Nav extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Friends">Friends</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Friends" component={Friends} />
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to Home Page</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>Welcome to About Page</p>
  </div>
);

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>Welcome to Friends Page</p>
  </div>
);
