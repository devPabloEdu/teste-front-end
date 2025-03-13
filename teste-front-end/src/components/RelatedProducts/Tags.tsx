import React from "react";

function Tags() {
    return <nav className="TagsContainer">
        <ul aria-label="Categorias de produtos">
            <li>
                <a href="/celulares" className="CelularOption">CELULAR</a>
            </li>

            <li>
                <a href="/Acessórios">ACESSÓRIOS</a>
            </li>

            <li>
                <a href="/Tablets">TABLETS</a>
            </li>

            <li>
                <a href="/Notebooks">NOTEBOOKS</a>
            </li>

            <li>
                <a href="/TVS">TVS</a>
            </li>

            <li>
                <a href="/VerTodos">VER TODOS</a>
            </li>

        </ul>
    </nav>
}

export default Tags;