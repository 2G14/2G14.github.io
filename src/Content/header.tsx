import * as React from "react";
import { LinkList } from "./link";

// Header Component
export class Header extends React.Component {
  // render
  render() {
    const home = { exact: true, name: "Home", to: "/" };
    const about = { exact: false, name: "About", to: "/about" };
    const friends = { exact: false, name: "Friends", to: "/friends" };
    const pages = [home, about, friends];
    return (
      <header>
        <nav>
          <ul>
            {pages.map(page => {
              return <LinkList {...page} />;
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
