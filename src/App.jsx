import React from "react";
import SimpleCounterComponent from './components/SimpleCounterComponent';
import PureCounterComponent from './components/PureCounterComponent';

function App() {
  return (
    <div className="App bg-gray-200 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">My Components</h1>
      <div className="flex space-x-8">
        <div className="w-1/2">
          <SimpleCounterComponent />
        </div>
        <div className="w-1/2">
          <PureCounterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
