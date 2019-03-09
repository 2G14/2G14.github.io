import * as React from "react";

// Props
interface AboutProps {}

// State
interface AboutState {}

// About
export class About extends React.Component<AboutProps, AboutState> {
  // constructor
  constructor(props: AboutProps) {
    super(props);
    this.state = {};
  }
  // render
  render(): JSX.Element {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}
