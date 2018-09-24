import { Component, Fragment } from "react";

interface IProps {
  url: any;
}

export default class extends Component<IProps, {}> {
  public render() {
    return (
      <Fragment>
        <h1>{this.props.url.query.organisation}</h1>
      </Fragment>
    );
  }
}
