import * as React from "react";

// About
export class About extends React.Component {
  // render
  render() {
    const twitter = {
      href: "https://twitter.com/TSJKZSH",
      src: "./../../../public/img/Twitter_Logo_Blue.png",
      alt: "twitter"
    };
    const github = {
      href: "https://github.com/2G14",
      src: "./../../../public/img/GitHub-Mark-Light-120px-plus.png",
      alt: "github"
    };
    const links = [twitter, github];
    return (
      <div>
        <h1>About</h1>
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a href={link.href} target="_blank">
                  <img src={link.src} alt={link.alt} width="200" height="200" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
