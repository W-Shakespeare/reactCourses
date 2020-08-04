import React from "react";
import { debounce } from "lodash";

class WindowSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "" };

    /* change code below this line */

    /* change code above this line */
  }

  componentDidMount() {
    this.getWindowSize();
    /* change code below this line */

    window.addEventListener(`resize`, this.onResize, false);

    /* change code above this line */
  }

  componentWillUnmount() {
    /* change code below this line */
    window.removeEventListener(`resize`, this.onResize, false);
    this.onResize.cancel();
    /* change code above this line */
  }

  getWindowSize() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    this.setState({ height, width });
  }

  onResize = debounce(() => {
    this.getWindowSize();
  }, 500);

  render() {
    const { height, width } = this.state;
    return (
      <div>
        <h2>Window size</h2>
        <div>
          Window height: {height} px, window width: {width} px
        </div>
        <br />
        <textarea />
      </div>
    );
  }
}

const Task = () => {
  return (
    <div className="task">
      <WindowSize />
    </div>
  );
};

export default Task;
