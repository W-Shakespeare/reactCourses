import React from "react";

const buttons = ["first", "nano", "bob", "tomato"];

class Index extends React.Component {
  state = { activeButtonName: "" };

  clickHandler = (name) => {
    this.setState({ activeButtonName: name });
  };

  render() {
    const { activeButtonName } = this.state;
    return (
      <div>
        {buttons.map((i, index) => (
          <Button
            activeButtonName={activeButtonName}
            clickHandler={this.clickHandler}
            key={index}
            name={i}
          />
        ))}
        <Details name={activeButtonName} />
      </div>
    );
  }
}

class Button extends React.Component {
  clickHandler = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const { name } = this.props;
    const { activeButtonName } = this.props;

    return (
      <button
        onClick={this.clickHandler}
        style={{ color: activeButtonName === name ? "red" : "blue" }}
      >
        {name}
      </button>
    );
  }
}

function Details({ name }) {
  return <div>{name}</div>;
}

const Task = () => {
  return <Index />;
};

export default Task;
