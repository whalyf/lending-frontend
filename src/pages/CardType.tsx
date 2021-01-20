import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';

import '../styles/pages/card-type.css';


export default function CardType(){
    const history = useHistory();
    const [cardType, setCardType] = useState<Boolean>(true);
    const tagType = '@card/credit';

    function handleSelect(){
        setCardType(true);
        localStorage.setItem(tagType, JSON.stringify(cardType));
        history.push('/register');
    };

    return(
        <>
            <HeaderBar/>
            <div className="container">
                    <TitleItem text="Solicitar Empréstimo"/>
                <div className="choose-items">
                    <label className="choose" htmlFor="choose">Escolha a modalidade:</label>
                    <button className="credit-card" onClick={()=>handleSelect()} type="button">
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
            </div>
        </>
    )
}