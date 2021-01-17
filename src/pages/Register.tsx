import React,{useState, FormEvent} from 'react';

import Headerbar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';

import '../styles/pages/register.css';

export default function Register(){

    const[name, setName]=useState('');
    const[card_number, setCardNumber]=useState('');
    const[month_year, setMonthYear]=useState('');
    const[code, setCode]=useState('');

    return(
        <>
            <Headerbar/>
            <div className="container">
                <TitleItem text="Solicitar Empréstimo"/>
                <form onSubmit={()=>{}} className="create-orphanage-form">
                    <div className="all-info-card">
                        <div className="card-left-data">
                            <label className="title" htmlFor="left-lable">Insira os dados do Cartão</label>
                            <div className="card-data">                
                                <input 
                                    id="name"
                                    placeholder="Nome" 
                                    value={name} 
                                    onChange={event => setName(event.target.value)}
                                />
                            </div>
                            <div className="card card-data">                
                                <input 
                                    id="card-number"
                                    placeholder="Numero do cartão" 
                                    value={card_number} 
                                    onChange={event => setCardNumber(event.target.value)}
                                />
                            </div>
                            <div className="card-data">                
                                <input 
                                    id="month_year"
                                    placeholder="Data de Validade" 
                                    value={month_year} 
                                    onChange={event => setMonthYear(event.target.value)}
                                />
                            </div>
                            <div className="card-data">                
                                <input 
                                    id="code"
                                    placeholder="CVC" 
                                    value={code} 
                                    onChange={event => setCode(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className="card-right-data">
                            <label className="title" htmlFor="left-lable">Insira os dados do Cartão</label>
                            <div className="card-attachment">
                                <label htmlFor="images">Cartão de Crédito (Frente)</label>
                                <a href="#">Adicionar</a>
                            </div>
                            <div className="card-attachment">
                                <label htmlFor="images">Cartão de Crédito (Verso)</label>
                                <a href="#">Adicionar</a>
                            </div>
                            <div className="card-attachment">
                                <label htmlFor="images">Selfie com cartão de crédito</label>
                                <a href="#">Adicionar</a>
                            </div>
                            <label className="attention" htmlFor="attention">Atenção: As fotos devem estar legíveis, com todas as informações visíveis do cartão.</label>
                        </div>
                    </div>
                    <button className="foward-button" type="submit">
                    Confirmar
                    </button>
                </form>
            </div>
        </>    
    )
}