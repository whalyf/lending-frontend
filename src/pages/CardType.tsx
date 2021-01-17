import React from 'react';
import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';
import CardSelection from '../components/CardSelection';
export default function CardType(){
    return(
        <>
        <HeaderBar/>
        <div className="container">
                <TitleItem text="Solicitar Empréstimo"/>
                <CardSelection/>
        </div>
        </>
    )
}