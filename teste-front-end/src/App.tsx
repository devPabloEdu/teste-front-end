import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';


function App() {
  return (
    <main className="App">
      <header className='AppHeader'>
        <Header />
      </header>
      <Banner />
      <Categories />
    </main>
  );
}

export default App;
