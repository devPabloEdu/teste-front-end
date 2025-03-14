import React from "react";

function InformationFooter() {
    return <div className="FooterMainContainer">
            <div>
                <img src="/Assets/Logo.png" className="LogoFooter" alt="LogoDaEconverse" aria-label="Logo da empresa ECONVERSE" />
                <p>Lorem ipsum dolor sit amet, consectetur odipiscing elit</p>

                <div>
                    <a href="/Instagram"><img src="/Assets/instagram.png" alt="Logo do instagram" aria-label="Instagram da Econverse" /></a>
                    <a href="/Facebook"><img src="/Assets/facebook.png" className="RedesImg" alt="Facebook" aria-label="Facebook da empresa econverse" /></a>
                    <a href="/Linkedin"><img src="/Assets/linkedin.png" className="RedesImg" alt="Linkedin" aria-label="Linkedin da empresa Econverse" /></a>
                </div>
            </div>

            <hr />

            <div className="InfosContainerFooter">
                <div>
                    <h3>Institucional</h3>
                    <a href="/Sobre Nós">Sobre Nós</a>
                    <a href="/Movimento">Movimento</a>
                    <a href="/Trabalhe conosco">Trabalhe conosco</a>
                </div>


                <div>
                    <h3>Ajuda</h3>
                    <a href="/Suporte">Suporte</a>
                    <a href="/Fale Conosco">Fale Conosco</a>
                    <a href="/Perguntas Frequentes">Perguntas Frequentes</a>
                </div>


                <div>
                    <h3>Termos</h3>
                    <a href="/Termos e Condições">Termos e Condições</a>
                    <a href="/Politica de Privacidade">Politica de Privacidade</a>
                    <a href="/Troca e Devolução">Troca e Devolução</a>
                </div>
            </div>
    </div>
}

export default InformationFooter;