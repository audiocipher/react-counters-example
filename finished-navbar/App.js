import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  // state is an object that includes any data that this component needs
  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 3 },
      { id: 3, value: 11 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;

    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(count => {
      count.value = 0;
      return count;
    });

    this.setState({ counters: newCounters });
  };

  handleDelete = counterId => {
    console.log("Event handled called", counterId);

    const newCounters = this.state.counters.filter(
      count => count.id !== counterId
    );

    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
