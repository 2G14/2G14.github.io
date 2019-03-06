import * as React from "react";
import { Input } from "./Input";
import { Output } from "./Output";
import { Button } from "./Button";

// Props
interface HelloProps {
  greeting: string;
}

// State
interface HelloState {
  name: string;
}

// Hello Component
export class Hello extends React.Component<HelloProps, HelloState> {
  // constructor
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // handleChange
  handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      name: event.currentTarget.value
    });
  }
  // handleClick
  handleClick(): void {
    this.setState({
      name: ""
    });
  }
  // render
  render(): JSX.Element {
    const { greeting } = this.props;
    return (
      <div>
        <Output greeting={greeting} name={this.state.name} />
        <Input name={this.state.name} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}
