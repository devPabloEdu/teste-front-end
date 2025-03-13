import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';


function App() {
  return (
    <main className="App">
      <header className='AppHeader'>
        <Header />
      </header>
      <Banner />
    </main>
  );
}

export default App;
