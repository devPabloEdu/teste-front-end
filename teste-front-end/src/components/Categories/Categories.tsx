import React from "react";

function Categories() {
    return <section className="CategoriesContainer" aria-label="Categorias de produtos e serviços">
        <ul>
            <li>
                <button className="CategoriasImgContainer">
                    <img src="/Assets/Tecnologia.png" alt="" />
                </button>
                <h3 className="TecnologiaTitle">Tecnologia</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer">
                    <img src="/Assets/supermercados.png" alt="" />
                </button>
                <h3>Supermercado</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer">
                    <img src="/Assets/whiskey.png" alt="" />
                </button>
                <h3>Bebidas</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer">
                    <img src="/Assets/ferramentas.png" alt="" />
                </button>
                <h3>Ferramentas</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer">
                    <img src="/Assets/cuidados.png" alt="" />
                </button>
                <h3>Saúde</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer">
                    <img src="/Assets/corrida.png" alt="" />
                </button>
                <h3>Esportes e fitness</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer">
                    <img src="/Assets/moda.png" alt="" />
                </button>
                <h3>Moda</h3>
            </li>

        </ul>
    </section>
}

export default Categories;