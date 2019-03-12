import * as React from "react";

interface WelcomeProps {}

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
    return (
      <div>
        <h1>Welcome</h1>
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
        <WelcomeLine />
      </div>
    );
  }
}

const WelcomeLine = () => {
  return <p>Welcome to My GitHub Pages</p>;
};
