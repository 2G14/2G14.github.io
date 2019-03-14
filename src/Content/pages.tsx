import * as React from "react";
import { Hello } from "./Hello/Hello";
import { About } from "./About/About";
import { Welcome } from "./Welcome/Welcome";

// ページ情報
interface Page {
  name: string;
  exact: boolean;
  link: {
    to: string;
  };
  route: {
    path: string;
    render: () => JSX.Element;
  };
}

const home: Page = {
  name: "Home",
  exact: true,
  link: {
    to: "/"
  },
  route: {
    path: "/",
    render: () => <Hello greeting="Hello!!" />
  }
};
const about: Page = {
  name: "About",
  exact: false,
  link: {
    to: "/about"
  },
  route: {
    path: "/about",
    render: () => <About />
  }
};
const welcome: Page = {
  name: "Welcome",
  exact: false,
  link: {
    to: "/welcome"
  },
  route: {
    path: "/welcome",
    render: () => <Welcome />
  }
};

export const pages = [home, about, welcome];
