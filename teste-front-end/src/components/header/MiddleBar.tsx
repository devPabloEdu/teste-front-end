import React from "react";

function MiddleBar() {
    return <div className="HeaderMiddleBar">
        <nav className="MiddleBarNav">

            <div className="LogoEconverse">
                <a href="/" aria-label="Econverse Logo">
                <img src="/Assets/Logo.png" alt="Logo da empresa ECONVERSE" />
                </a>
            </div>

            <form
            className="FormularioDeBusca"
            action="/search"
            method="GET"
            aria-label="Formulario de Busca"
            >
                <input 
                type="text"
                required
                id="form-search"
                placeholder="O que você está buscando?" 
                />

                <button
                type="submit"
                aria-label="Buscar"
                >
                    <img src="/Assets/MagnifyingGlass.png" alt="Icone simbolizando uma Lupa" />
                </button>
            </form>

            <div className="IconesMiddle">
                <a href="/MeusPedidos" aria-label="Meus pedidos">
                <img src="/Assets/Group.png" alt="Imagem simbolizando Pedidos" />
                </a>

                <a href="/Favoritos" aria-label="Favoritos">
                <img src="/Assets/Heart.png" alt="Itens Favoritos" />
                </a>

                <a href="/Usuário" aria-label="Perfil do Usuário">
                <img src="/Assets/UserCircle.png" alt="Perfil do Usuário" />
                </a>

                <a href="/CarrinhoDeCompras" aria-label="Carrinho de compras">
                <img src="/Assets/ShoppingCart.png" alt="Carrinho de compras" />
                </a>
            </div>
        </nav>
    </div>
}

export default MiddleBar;