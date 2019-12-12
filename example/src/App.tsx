import React from 'react';

import TestPlugin from 'react-typescript-npm-boilerplate';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Product demo: </header>
      <TestPlugin text="aaa" />
    </div>
  );
};

export default App;
