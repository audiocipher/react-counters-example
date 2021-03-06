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

  // constructor is called only once, when an instance of the class is created
  // is used to initialize the state of the instance (based on props we may have received from a parent)
  // if we aren't receiving any props from a parent, then we don't need to include them in the constructor
  constructor(props) {
    super(props); // call the constructor of the parent class
    console.log("App --- Constructor", this.props);
    // this.state = this.props.something; // we set the state directly (only in the constructor)
  }

  // this method is called after the component is rendered into the DOM
  // the perfect place to make ajax calls to get data from the server
  componentDidMount() {
    console.log("App --- Mounted");
    // do some ajax call

    // this.setState({ data: someDataFromAjaxCall });
  }

  handleIncrement = counter => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    newCounters[index].value++;

    this.setState({ counters: newCounters }); // this will schedule a call to the render method
  };

  handleReset = () => {
    const newCounters = this.state.counters.map(count => {
      count.value = 0;
      return count;
    });

    this.setState({ counters: newCounters });
  };

  handleDelete = counterId => {
    // console.log("Event handled called", counterId);

    const newCounters = this.state.counters.filter(
      count => count.id !== counterId
    );

    this.setState({ counters: newCounters });
  };

  render() {
    console.log("App --- Rendered (All children are rendered recursively)");

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
