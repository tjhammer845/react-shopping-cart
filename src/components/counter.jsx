import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    // ,tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // Note -- no need to bind this when you use arrow function below --  = () =>

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Add
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    const zeroText = <h2>Zero</h2>;
    return value === 0 ? zeroText : value;
  }
}

export default Counter;
