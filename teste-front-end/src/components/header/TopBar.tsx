import react from "react";

function TopBar() {
    return <div className="TopBar">
        <ul className="MenuTopBar">
            <li className="ShieldCheck">
                <img src="/Assets/ShieldCheck.png" alt="Logo de compra segura" />
                <p>
                    <span>Compra </span>100% segura
                </p>
            </li>

            <li className="Truck">
                <img src="/Assets/Truck.png" alt="Caminhão indicando frete grátis acima de R$ 200" />
                <p>
                    <span>Frete grátis </span> acima de R$ 200
                </p>
            </li>

            <li className="CreditCard">
                <img src="/Assets/CreditCard.png" alt="Cartão simbolizando o parcelamento de compras" />
                <p>
                    <span>Parcele </span> suas compras
                </p>
            </li>


        </ul>
    </div>
}

export default TopBar;