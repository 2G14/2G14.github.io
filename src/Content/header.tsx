import * as React from "react";
import { NavLink } from "react-router-dom";
import { pages } from "./pages";

// Header Component
export class Header extends React.Component {
  // render
  render() {
    return (
      <header>
        <nav>
          <ul>
            {pages.map((page, i) => {
              return (
                <li key={i}>
                  <NavLink
                    exact={page.exact}
                    {...page.link}
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
