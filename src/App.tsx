/*
 * @LastEditors: night
 * @Author: night
 */
import React from 'react';
import Layout from './layout/layout';
import ImgCard from './components/imgCard/imgCard';
function App() {
  return (
    <div className="App">
      <Layout></Layout>
      <ImgCard />
      <header className="App-header">
       
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
