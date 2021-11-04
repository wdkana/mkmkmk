import React from "react";
import { Kbd, Text } from "@chakra-ui/react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: new Date().getHours().toLocaleString(),
      minutes: new Date().getMinutes().toLocaleString(),
      seconds: new Date().getSeconds().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      hours: new Date().getHours().toLocaleString(),
      minutes: new Date().getMinutes().toLocaleString(),
      seconds: new Date().getSeconds().toLocaleString(),
    });
  }
  render() {
    return (
        <Text color={this.props.color} fontSize={this.props.size}>
            {this.state.hours}:{this.state.minutes}
          :{this.state.seconds}{" "}
        </Text>
    );
  }
}
export default Clock;
