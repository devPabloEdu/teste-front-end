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

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const openModal = (product : Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false)
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const currentProducts = ProductsObj.products.slice(currentIndex, currentIndex + itensPorPagina);

  return (
    <div>

      {/* renderizando o Modal */}
      {showModal && selectedProduct && (
          <div className="modalContainer">
            <button onClick={closeModal} className="FecharModal">X</button>
            <div className="modalContent">
              
            <div className="ModalImg">
                  <img src={selectedProduct.photo} alt={selectedProduct.productName} />
              </div>

              <div className="ModalText">
                <h1>{selectedProduct.productName}</h1>
                <h2>R$ {selectedProduct.price}</h2>
                <p>{selectedProduct.descriptionShort}</p>
                <a href="">Veja mais detalhes do produto</a>

                <div className="ModalInfoButtons">
                    <div className="ControleDeQuantidade">
                        <button onClick={decreaseQuantity} className="aumentarOuDiminuir">-</button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity} className="aumentarOuDiminuir">+</button>
                    </div>

                    <button className="ComrparButton">COMPRAR</button>
                </div>
              </div>
            </div>
          </div>
        )};


      <div className="ProductsList">
          <div className="ControlButtons">
              <button aria-label="avamçar para a esquerda" onClick={prevPage} disabled={currentIndex === 0}>
                <img src="/Assets/Anterior.png" alt="PaginaAnterior" />
              </button>
          </div>
        <div className="carousel-container">
          {currentProducts.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.photo} alt={product.productName}/>
              <h3 className="NomeDoProduto">{product.productName}</h3>
              <p className="DescricaoDoProduto">{product.descriptionShort}</p>
              <p className="PrecoAntigo">R$ 30,90</p>
              <p className="PrecoAtual">R$ {product.price}</p>
              <span className="OpcaoParcelamento">ou 2x de R$49,95 sem juros</span> <br />
              <span className="Frete">Frete grátis</span> <br />
              <button onClick={() => openModal(product)} aria-label="Comprar Celular">COMPRAR</button>
            </div>
          ))}
        </div>
          <div className="ControlButtons">
              <button
                aria-label="Avançar para a direita"
                onClick={nextPage}
                disabled={currentIndex + itensPorPagina >= ProductsObj.products.length}
              >
                  <img src="/Assets/Proximo.png" alt="ProximaPagina" />
              </button>
          </div>
      </div>
    </div>
  );
};

export default Products;
