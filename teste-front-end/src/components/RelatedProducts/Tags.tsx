import React from "react";

function Tags() {
    return <nav className="TagsContainer">
        <ul aria-label="Categorias de produtos">
            <li>
                <a href="/celulares" className="CelularOption" aria-label="Categoria de celulares">CELULAR</a>
            </li>

            <li>
                <a href="/Acessórios" aria-label="Categoria de Acessórios">ACESSÓRIOS</a>
            </li>

            <li>
                <a href="/Tablets" aria-label="Categoria de Tablets">TABLETS</a>
            </li>

            <li>
                <a href="/Notebooks" aria-label="Categoria de Notebooks">NOTEBOOKS</a>
            </li>

            <li>
                <a href="/TVS" aria-label="Categoria de Tv's">TVS</a>
            </li>

            <li>
                <a href="/VerTodos" aria-label="Ver itens de todas as categorias">VER TODOS</a>
            </li>

        </ul>
    </nav>
}

export default Tags;