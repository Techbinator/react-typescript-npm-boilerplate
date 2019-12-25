import React from 'react';

import TestPlugin from 'react-typescript-npm-boilerplate';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Products demo: </header>
      <TestPlugin text="world" />
    </div>
  );
};

export default App;
