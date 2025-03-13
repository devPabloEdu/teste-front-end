import React from "react";

function Categories() {
    return <section className="CategoriesContainer" aria-label="Categorias de produtos e serviços">
        <ul>
            <li>
                <button className="CategoriasImgContainer" aria-label="Clique para verificar itens da categoria Tecnologia">
                    <img src="/Assets/Tecnologia.png" alt="Dispositivos de tecnologia" />
                </button>
                <h3 className="TecnologiaTitle">Tecnologia</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer" aria-label="Clique para verificar itens da categoria Supermercado">
                    <img src="/Assets/supermercados.png" alt="Restaurantes e supermercados" />
                </button>
                <h3>Supermercado</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer" aria-label="Clique para verificar itens da categoria Bebidas">
                    <img src="/Assets/whiskey.png" alt="Bebidas" />
                </button>
                <h3>Bebidas</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer" aria-label="Clique para verificar itens da categoria Ferramentas">
                    <img src="/Assets/ferramentas.png" alt="Ferramentas" />
                </button>
                <h3>Ferramentas</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer" aria-label="Clique para verificar itens da categoria Saúde">
                    <img src="/Assets/cuidados.png" alt="Cuidados e bem estar" />
                </button>
                <h3>Saúde</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer" aria-label="Clique para verificar itens da categoria Esportes">
                    <img src="/Assets/corrida.png" alt="Itens Fitness" />
                </button>
                <h3>Esportes e fitness</h3>
            </li>

            <li>
                <button className="CategoriasImgContainer" aria-label="Clique para verificar itens da categoria Moda">
                    <img src="/Assets/moda.png" alt="Moda" />
                </button>
                <h3>Moda</h3>
            </li>

        </ul>
    </section>
}

export default Categories;