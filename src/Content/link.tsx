import * as React from "react";
import { NavLink } from "react-router-dom";

// Props
interface LinkListProps {
  exact: boolean;
  name: string;
  to: string;
}

// State
interface LinkListState {}

// LinkList Component
export class LinkList extends React.Component<LinkListProps, LinkListState> {
  // constructor
  constructor(props: LinkListProps) {
    super(props);
  }
  // render
  render() {
    const { exact, name, to } = this.props;
    return (
      <li>
        <NavLink
          exact={exact}
          to={to}
          className="header-item"
          activeClassName="active"
        >
          {name}
        </NavLink>
      </li>
    );
  }
}
