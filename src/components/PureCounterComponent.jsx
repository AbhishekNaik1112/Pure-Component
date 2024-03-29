import React, { PureComponent } from "react";

class PureCounterComponent extends PureComponent {
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

  toggleIncrement = () => {
    this.setState((prevState) => ({
      isIncrementAllowed: !prevState.isIncrementAllowed,
    }));
  };

  render() {
    console.log("This is Pure Component");
    const { count, isIncrementAllowed } = this.state;

    return (
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Pure Counter</h2>
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

export default PureCounterComponent;
