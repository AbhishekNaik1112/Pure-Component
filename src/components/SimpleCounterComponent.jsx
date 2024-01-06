import React, { Component } from "react";

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isIncrementAllowed: true,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  toggleIncrement = () => {
    this.setState((prevState) => ({
      isIncrementAllowed: !prevState.isIncrementAllowed,
    }));
  };

  render() {
    console.log("This is Simple Component");
    const { count, isIncrementAllowed } = this.state;

    return (
      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Simple Counter</h2>
        <p className="text-lg mb-4">Count: {count}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={this.toggleIncrement}
        >
          {isIncrementAllowed ? "Disable Increment" : "Enable Increment"}
        </button>
        <button
          className={`${
            isIncrementAllowed ? "bg-green-500" : "bg-gray-300"
          } text-white px-4 py-2 rounded ml-2`}
          onClick={this.increment}
          disabled={!isIncrementAllowed}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
