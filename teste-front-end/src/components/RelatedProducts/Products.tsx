import React, { useState } from "react";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Products: React.FC = () => {
  const ProductsObj = {
    success: true,
    products: [
      {
        productName: "Iphone 11 PRO MAX BRANCO 1",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 15000,
      },
      {
        productName: "IPHONE 13 MINI 1",
        descriptionShort: "IPHONE 13 MINI 1",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 9000,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 2",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 14990,
      },
      {
        productName: "IPHONE 13 MINI 2",
        descriptionShort: "IPHONE 13 MINI 2",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 12000,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 3",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 4550,
      },
      {
        productName: "IPHONE 13 MINI 3",
        descriptionShort: "IPHONE 13 MINI 3",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 38000,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 4",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 42000,
      },
      {
        productName: "IPHONE 13 MINI 4",
        descriptionShort: "IPHONE 13 MINI 4",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 520,
      },
      {
        productName: "Iphone 11 PRO MAX BRANCO 5",
        descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 149990,
      },
      {
        productName: "IPHONE 13 MINI 5",
        descriptionShort: "IPHONE 13 MINI 5",
        photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
        price: 100000,
      },
    ],
  };


  const [currentIndex, setCurrentIndex] = useState(0);
  const itensPorPagina = 4;

  const nextPage = () => {
    if (currentIndex + itensPorPagina < ProductsObj.products.length) {
      setCurrentIndex(currentIndex + itensPorPagina);
    }
  };

  const prevPage = () => {
    if (currentIndex - itensPorPagina >= 0) {
      setCurrentIndex(currentIndex - itensPorPagina);
    }
  };

  const currentProducts = ProductsObj.products.slice(currentIndex, currentIndex + itensPorPagina);

  return (
    <div className="ProductsList">
        <div className="ControlButtons">
            <button onClick={prevPage} disabled={currentIndex === 0}>
              <img src="/Assets/Anterior.png" alt="" />
            </button>
        </div>

      <div className="carousel-container">
        {currentProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.photo} alt={product.productName}/>
            <h3>{product.productName}</h3>
            <p>{product.descriptionShort}</p>
            <p>R$ 30,90</p>
            <p>R$ {product.price}</p>
            <span>ou 2x de R$49,95 sem juros</span>
            <span>Frete grátis</span>
            <button>COMPRAR</button>
          </div>
        ))}
      </div>

        <div className="ControlButtons"> 
            <button
              onClick={nextPage}
              disabled={currentIndex + itensPorPagina >= ProductsObj.products.length}
            >
                <img src="/Assets/Proximo.png" alt="" />
            </button>
        </div>
    </div>
  );
};

export default Products;
