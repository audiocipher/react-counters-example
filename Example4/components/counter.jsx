import React, { Component } from "react";

class Counter extends Component {
  // state is an object that includes any data that this component needs
  state = {
    value: this.props.value
  };

  // make sure to have used create-react-app or be using babel in order to use this syntax
  handleIncrement = (product) => {
    console.log(product)
    this.setState({ value: this.state.value + 1 });
  };

  render() {

    console.log('These are the props:', this.props);

    const product = 'banana';

    return (
      <div>
        {/* {this.props.children.props.children[1]} */}
        {this.props.children}
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state; // getting the count property from the state and using it
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
