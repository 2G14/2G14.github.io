import * as React from "react";

// Props
interface InputProps {
  name: string;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

// Input Component
export const Input: React.SFC<InputProps> = props => {
  const { name, handleChange }: InputProps = props;
  return (
    <input
      type="text"
      placeholder="Input any name."
      value={name}
      onChange={handleChange}
    />
  );
};
