import React, { Component } from 'react';

class Counter extends Component {

  // state is an object that includes any data that this component needs
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/100',
    tags: ['tag1', 'tag2', 'tag3']
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt=""/>
        <hr />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // getting the count property from the state and using it
    return count === 0 ? 'Zero' : count;
  }

}

export default Counter;