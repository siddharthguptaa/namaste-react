import React from "react";
import { GITHUB_USER_API } from "../../Utils/constant";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API);
    const json = await data.json();
    //console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  async componentDidUpdate() {}

  async componentWillUnmount() {}

  render() {
    const { login, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>{login}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : {avatar_url}</h2>
      </div>
    );
  }
}

export default UserClass;
