import * as React from "react";

// Props
interface OutputProps {
  greeting: string;
  name: string;
}

// OutputComponent
export const Output: React.SFC<OutputProps> = props => {
  const { greeting, name }: OutputProps = props;
  const hasName: boolean = name !== "";
  const result: JSX.Element | "" = hasName ? (
    <h1>
      {greeting} {name}!
    </h1>
  ) : (
    ""
  );
  return <div>{result}</div>;
};
