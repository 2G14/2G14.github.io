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
  inputName: string;
  outputName: string;
}

// Hello Component
export class Hello extends React.Component<HelloProps, HelloState> {
  // constructor
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      inputName: "",
      outputName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // handleChange
  handleChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      inputName: event.currentTarget.value
    });
  }
  // handleClick
  handleClick(): void {
    this.setState({
      inputName: "",
      outputName: this.state.inputName
    });
  }
  // render
  render(): JSX.Element {
    const { greeting } = this.props;
    return (
      <div>
        <Input name={this.state.inputName} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
        <Output greeting={greeting} name={this.state.outputName} />
      </div>
    );
  }
}
