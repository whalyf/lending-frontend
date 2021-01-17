import React from 'react';

import '../styles/components/footer-bar.css';

export default function FooterBar(){

    function handleNext(){
        
    }
    
    return(
        <div className="footer">
            <div className="footer-content">
                <label htmlFor="Name">Nome: Tabela Padrão{}</label>
                <label htmlFor="Quota">Parcelas: 2{}</label>
                <label htmlFor="Quota Value">Valor da Parcela: R$ 1.115,00{}</label>
            </div>
                <button className="button"onClick={()=>handleNext()}>Avançar</button>
        </div>
    )
}