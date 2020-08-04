import React from "react";

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`entry valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      checkbox: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const valueInput = name == "checkbox" ? !this.state.checkbox : value;
    this.setState({
      [name]: valueInput,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.email) {
      alert(`entry valid email first, please`);
    }

    if (this.state.checkbox) {
      alert(`email: ${this.state.email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { email, checkbox } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="email"
          type="email"
          value={email}
        />
        <input
          onChange={this.handleChange}
          name="checkbox"
          type="checkbox"
          value={checkbox}
        />
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
      <ControlledForm />
    </div>
  );
};

export default Task;
