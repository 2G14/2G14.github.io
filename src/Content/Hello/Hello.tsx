import * as React from "react";
//import { Input } from "./Input";
//import { Output } from "./Output";
//import { Button } from "./Button";

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
    const tmp: string | null = sessionStorage.getItem("name");
    const name: string = tmp !== null ? String(tmp) : "";
    this.state = {
      name: name
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // handleChange
  handleChange(event: React.FormEvent<HTMLInputElement>): void {
    const name: string = event.currentTarget.value;
    sessionStorage.setItem("name", name);
    this.setState({
      name: name
    });
  }
  // handleClick
  handleClick(): void {
    this.setState({
      name: ""
    });
    sessionStorage.removeItem("name");
  }
  // render
  render(): JSX.Element {
    const { greeting } = this.props;
    return (
      <div>
        <h1>
          {greeting} <div>{this.state.name}</div>
        </h1>
        <input
          type="text"
          placeholder="Input any name."
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Clear</button>
      </div>
    );
    //    <Output greeting={greeting} name={this.state.name} />
    //    <Input name={this.state.name} handleChange={this.handleChange} />
    //    <Button handleClick={this.handleClick} />
  }
}
