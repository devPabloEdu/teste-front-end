import React from "react";

function Newsletter() {
    return <div className="NewsletterContainer">

        <div className="NewsText">
            <h2>Inscreva-se na nossa newsletter</h2>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse</p>
        </div>

        <div className="ButtonsNewsletter">
            <div className="InputsDisplay">
                <form action="">
                    <input type="text" placeholder="Digite seu nome" required/>
                    <input type="email" placeholder="Digite seu e-mail" required/>
                    <button aria-label="Se inscrever na newsLetter">INSCREVER</button>
                </form>
            </div>
            <input type="checkbox"/> <span>Aceito os termos e condições</span>
        </div>
    </div>
}
export default Newsletter;