import * as React from "react";
import { LinkList } from "./link";

// Header Component
export class Header extends React.Component {
  // render
  render() {
    const home = { exact: true, name: "Home", to: "/" };
    const about = { exact: false, name: "About", to: "/about" };
    const Welcome = { exact: false, name: "Welcome", to: "/welcome" };
    const pages = [home, about, Welcome];
    return (
      <header>
        <nav>
          <ul>
            {pages.map((page, i) => {
              return <LinkList key={i} {...page} />;
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
