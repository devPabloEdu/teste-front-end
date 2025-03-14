import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import RelatedProductsTwo from './components/RelatedProducts/RelatedProductsTwo';


function App() {
  return (
    <main className="App">
      <header className='AppHeader'>
        <Header />
      </header>
      <Banner />
      <Categories />
      <RelatedProducts />
      <RelatedProductsTwo />
    </main>
  );
}

export default App;
