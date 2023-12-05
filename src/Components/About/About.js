import { Component } from "react";
import UserClass from "../Common/UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Page</h1>
        <UserClass name={"Frist"} Location={"Germany"}></UserClass>
      </div>
    );
  }
}

export default About;
