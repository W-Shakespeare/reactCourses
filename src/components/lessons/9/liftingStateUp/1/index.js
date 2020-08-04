import React from "react";

class VoteComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  style = {
    padding: "8px",
    marginTop: "16px",
    border: "solid 1px grey",
  };

  increase = () => {
    this.setState(({ votesNumber }) => ({ votesNumber: votesNumber + 1 }));
    this.props.onVote(+1);
  };

  decrease = () => {
    this.setState(({ votesNumber }) => ({ votesNumber: votesNumber - 1 }));
    this.props.onVote(-1);
  };

  render() {
    console.log("VoteComponent render");
    const { resolution, terminalNumber } = this.props;
    return (
      <div style={this.style}>
        <h6>Terminal number: {terminalNumber}</h6>
        <h3>Resolution: "{resolution}"</h3>
        <button onClick={this.decrease}>No</button>
        <button onClick={this.increase}>Yes</button>
      </div>
    );
  }
}

const VotingDisplay = ({ resolution, result }) => {
  return (
    <React.Fragment>
      <h1>Resolution: {resolution}</h1>
      <h2>Result: {result}</h2>
    </React.Fragment>
  );
};

class VotingSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terminalNumber1: 0,
      terminalNumber2: 0,
      terminalNumber3: 0,
      votesNumber: 0,
    };
  }

  onVote = (plusOrMinus1, terminalNumber) => {
    this.setState({
      votesNumber: this.state.votesNumber + plusOrMinus1,
      terminalNumber,
    });
  };

  render() {
    const { resolution } = this.props;
    const { votesNumber } = this.state;
    return (
      <React.Fragment>
        <VotingDisplay resolution={resolution} result={votesNumber} />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          terminalNumber={1}
        />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          terminalNumber={2}
        />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          terminalNumber={3}
        />
      </React.Fragment>
    );
  }
}

const resolution = "Free beer to all programmers";

const Task = () => {
  return (
    <div>
      <VotingSystem resolution={resolution} />
    </div>
  );
};

export default Task;
