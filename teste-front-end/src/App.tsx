import React from 'react';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import RelatedProductsTwo from './components/RelatedProducts/RelatedProductsTwo';
import Partners from './components/Partners/Partners';


function App() {
  return (
    <main className="App">
      <header className='AppHeader'>
        <Header />
      </header>
      <Banner />
      <Categories />
      <RelatedProducts />
      <Partners />
      <RelatedProductsTwo />
      <Partners />
    </main>
  );
}

export default App;
