import React from 'react';

import '../styles/components/client-search.css'

export default function ClientSearch(){
    function handleRequest(){

    }

    return(
        <div>
            <div className="input-client">
                <label htmlFor="Simulacao">Busque o Cliente</label>
                <div className="input-field">
                    <input placeholder="000.000.000-00"></input>
                    <button className="button" onClick={()=>{}}>Buscar</button>
                </div>
            </div>
                <div className="client-found">
                <label className="title-found" htmlFor="Simulacao">Cliente Encontrado</label>
                <label className="cpf" htmlFor="Simulacao">000.000.000-00</label>
                <label className="client-name" htmlFor="Simulacao">Ariane Novaes</label>
                <button className="button" onClick={()=>handleRequest()}>Solicitar</button>
            </div>
        </div>
    )
}