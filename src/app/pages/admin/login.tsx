import { Component, Fragment } from "react";

import firebase from "../../firebase";

interface IState {
  form: {
    email: string;
    password: string;
  };
}

const initialState = {
  form: {
    email: "",
    password: "",
  },
};

export default class extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleEmailChange(event) {
    this.setState({
      form: {
        ...this.state.form,
        email: event.target.value,
      },
    });
  }

  public handlePasswordChange(event) {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        password: event.target.value,
      },
    });
  }

  public async handleSubmit(event) {
    event.preventDefault();

    await firebase
      .auth()
      .signInWithEmailAndPassword(
        this.state.form.email,
        this.state.form.password,
      );

    this.setState(initialState);
  }

  public render() {
    return (
      <Fragment>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={this.state.form.email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={this.state.form.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </Fragment>
    );
  }
}
