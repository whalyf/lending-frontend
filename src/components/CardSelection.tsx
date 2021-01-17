import React from 'react';
import '../styles/components/card-selection.css';

export default function CardSelection(){
    return(
        <div className="choose-items">
            <label className="choose" htmlFor="choose">Escolha a modalidade:</label>
            <button className="credit-card">
            Cartão de Crédito
            </button>
            <label className="or" htmlFor="or">Ou</label>
            <div className="last-button">
                <button className="payroll-loans">
                Crédito Consignado
                </button>
                <label className="soon" htmlFor="soon">Em Breve</label>
            </div>
        </div>
    )
}