import React, { Component } from "react";

function sendEmail(name, mail, message) {
  const params = { name, mail, message };
  let alertText = "Email sending request in process.\nEmail params:\n";
  alertText += Object.keys(params)
    .map((i) => `${i}: ${params[i]}`)
    .join("\n");
  alert(alertText);
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.mailRef = React.createRef();
    this.messageRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //sendEmail(name, mail, message);
    sendEmail(
      this.nameRef.current.value,
      this.mailRef.current.value,
      this.messageRef.current.value
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* change code below this line */}
        <div>
          <label htmlFor="name">Name:</label>
          <input ref={this.nameRef} type="text" id="name" name="user_name" />
        </div>

        <div>
          <label htmlFor="mail">E-mail:</label>
          <input ref={this.mailRef} type="email" id="mail" name="user_mail" />
        </div>

        <div>
          <label htmlFor="msg">Message:</label>
          <textarea
            ref={this.messageRef}
            id="msg"
            name="user_message"
          ></textarea>
        </div>
        <button type="submit">Submit!</button>
        {/* change code above this line */}
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
    </div>
  );
};

export default Task;
