import React from 'react';

import FooterBar from '../components/FooterBar';
import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';
import ValCalc from '../components/ValCalc';

import '../styles/pages/lending-calc.css'

export default function LendingCalc(){
    return(
        <div>
            <HeaderBar/>
            <div className="container">
                <TitleItem text="Simulacão de taxas"/>
                <ValCalc/>
            </div>
            <FooterBar/>
        </div>
    )
}