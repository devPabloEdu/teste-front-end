import React from "react";

function BottomBar() {
    return <div>
        <nav className="BottomBarBox">
            <ul className="BottomBarOpcoes">
                <li>
                    <a href="/TodasAsCategorias" aria-label="Todas as categorias">TODAS AS CATEGORIAS</a>
                </li>

                <li>
                    <a href="/Supermercado" aria-label="Supermercado">SUPERMERCADO</a>
                </li>

                <li>
                    <a href="/Livros" aria-label="Livros">LIVROS</a>
                </li>

                <li>
                    <a href="/Moda" aria-label="Moda">MODA</a>
                </li>

                <li>
                    <a href="/Lançamentos" aria-label="Lançamentos">LANÇAMENTOS</a>
                </li>

                <li>
                    <a href="/OfertasDoDia" aria-label="Ofertas do dia" className="OfertaDoDia">OFERTAS DO DIA</a>
                </li>

                <li>
                    <a href="/Assinatura" aria-label="Assinatura">
                        <img src="/Assets/CrownSimple.png" alt="" />
                        ASSINATURA
                    </a>
                </li>

            </ul>
        </nav>
    </div>
}

export default BottomBar;