import React, { Component } from "react";

class Counter extends Component {
  // this method is called after the component is updated, which means we have new state or new props
  // we use this method to decide whether we should make an ajax call to get new data based on
  // the changes in props and state
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    // compare before and after to see if we need to do some ajax or i/o call
    if (prevProps.counter.value !== this.props.counter.value) {
      // ajax call and get new data from the server
    }
  }

  // this method is called just before a component is removed from the DOM
  // gives us the opportunity to do any kind of cleanup (remove timers, listeners, etc. to prevent memory leaks)
  componentWillUnmount() {
    console.log("Counter --- Unmount");
  }

  render() {
    console.log("Counter --- Rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter; // getting the count property from the state and using it
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
