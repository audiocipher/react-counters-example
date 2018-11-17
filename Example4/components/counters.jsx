import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 3 },
      { id: 3, value: 11 },
      { id: 4, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => {
          return <Counter key={counter.id} value={counter.value} >
            <h4>Counter #{counter.id}</h4> {/* will be passed to counter as this.props.children */}
          </Counter>;
        })}
      </div>
    );
  }
}

export default Counters;
