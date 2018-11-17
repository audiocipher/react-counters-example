import React, { Component } from "react";

class Counter extends Component {
  // state is an object that includes any data that this component needs
  state = {
    count: 0
  };

  // make sure to have used create-react-app or be using babel in order to use this syntax
  handleIncrement = (product) => {
    console.log(product)
    this.setState({ count: this.state.count + 1 });
  };

  render() {

    const product = 'basket';

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={ () => this.handleIncrement(product) }
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // getting the count property from the state and using it
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
