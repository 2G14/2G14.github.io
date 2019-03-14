import * as React from "react";
import { NavLink } from "react-router-dom";

// Header Component
export class Header extends React.Component {
  // render
  render() {
    const home = {
      name: "Home",
      linkProps: { exact: true, to: "/" }
    };
    const about = {
      name: "About",
      linkProps: { exact: false, to: "/about" }
    };
    const Welcome = {
      name: "Welcome",
      linkProps: { exact: false, to: "/welcome" }
    };
    const pages = [home, about, Welcome];
    return (
      <header>
        <nav>
          <ul>
            {pages.map((page, i) => {
              return (
                <li key={i}>
                  <NavLink
                    {...page.linkProps}
                    className="header-item"
                    activeClassName="active"
                  >
                    {page.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
