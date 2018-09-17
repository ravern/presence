import { Component, Fragment } from "react";

import { firebase, getCurrentUser, snapshotToArray } from "../../firebase";

interface IMember {
  name: string;
}

interface IState {
  name: string;
  members: IMember[];
}

const initialState = {
  members: [],
  name: "Overflow",
};

export default class extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  public async componentDidMount() {
    const adminRef = firebase
      .firestore()
      .collection("admins")
      .doc((await getCurrentUser()).uid);
    const membersRef = adminRef.collection("members");

    const admin = await adminRef.get();
    const members = snapshotToArray(await membersRef.get()).map(
      (doc) => doc.data() as IMember,
    );

    this.setState({
      members,
      name: admin.data().name,
    });
  }

  public render() {
    return (
      <Fragment>
        <h1>Admin</h1>
        <h2>{this.state.name}</h2>
        {this.state.members.map(this.renderMember)}
      </Fragment>
    );
  }

  private renderMember(member: IMember, i: number) {
    return (
      <Fragment key={i}>
        <h3>{member.name}</h3>
      </Fragment>
    );
  }
}
