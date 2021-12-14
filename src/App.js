import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

// Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;