import * as React from "react";

// Props
interface ButtonProps {
  handleClick: () => void;
}

// Button Component
export const Button: React.SFC<ButtonProps> = props => {
  const { handleClick }: ButtonProps = props;
  return <button onClick={handleClick}>Say Hello</button>;
};
