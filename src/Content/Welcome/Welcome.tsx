import * as React from "react";

// Peops
interface WelcomeProps {}

// State
interface WelcomeState {
  name: string;
}

// Welcome Component
export class Welcome extends React.Component<WelcomeProps, WelcomeState> {
  // constructor
  constructor(props: WelcomeProps) {
    super(props);
    const tmp: string | null = sessionStorage.getItem("name");
    const name: string = tmp !== null ? String(tmp) : "";
    this.state = {
      name: name
    };
  }
  // render
  render() {
    // 同じものを100行生成
    const lines: string[] = [];
    for (let i = 0; i < 100; i++) lines.push(this.state.name);
    return (
      <div>
        <h1>Welcome</h1>
        <ul>
          {lines.map((line, i) => {
            return (
              <li key={i}>
                Welcome to My GitHub Pages{" "}
                <div className="user-name">{line}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
