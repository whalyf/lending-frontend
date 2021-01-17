import React from 'react';

import HeaderBar from '../components/HeaderBar';
import ClientSearch from '../components/ClientSearch';
import TitleItem from '../components/TitleItem';

import '../styles/pages/borrow.css'

export default function Borrow(){
    return(
        <div>
            <HeaderBar/>
            <div className="container">
                <TitleItem text="Solicitar Empréstimo"/>
                <ClientSearch/>
            </div>
        </div>
    )
}