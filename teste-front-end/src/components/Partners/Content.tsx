import React from "react";

function Content(){
    return <div className="PartnerContainer">
        <div className="PartnersTextContainer">
            <h2>Parceiros</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button aria-label="Conferir parceiro da empresa">CONFIRA</button>
        </div>

        <img src="/Assets/Partners.png" alt="ParceirosDaEmpresa" loading="lazy"/>
    </div>
}

export default Content;