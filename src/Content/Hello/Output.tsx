import * as React from "react";

// Props
interface OutputProps {
  greeting: string;
  name: string;
}

// OutputComponent
export const Output: React.SFC<OutputProps> = props => {
  const { greeting, name }: OutputProps = props;
  return (
    <h1>
      {greeting} <div>{name}</div>
    </h1>
  );
};
