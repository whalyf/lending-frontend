import React, {FormEvent, useState} from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';

import '../styles/pages/borrow.css';

import backend from '../api.json';

interface Client{
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: {
        label: string;
        accountTypeLabel: string;
        accountNumber: string;
    };
}

export default function Borrow(){
    const history = useHistory();
    
    const [cpf, setCpf] = useState<string>('');
    const [response, setResponse] = useState<Client>();
    const data = backend.client;
    const tagClient = '@client/id';

    function handleSearch(event: FormEvent){
        event.preventDefault();
        setResponse(_.find(data,{cpf:cpf}));
    };

    function handleSolicitate(){
        alert(`Redirecionando ${response?.name}...`);
        localStorage.setItem(tagClient, JSON.stringify(response?.id));
        history.push('/card-type');
    };

    return(
        <div>
            <HeaderBar/>
            <div className="container">
                <TitleItem text="Solicitar Empréstimo"/>
                <div>
                    <div className="input-client">
                        <label htmlFor="Simulacao">Busque o Cliente</label>
                        <form onSubmit={handleSearch} className="input-field">
                            <input 
                                placeholder="000.000.000-00"
                                maxLength={11}
                                required={true}
                                value={cpf}
                                onChange={event=>setCpf(event.target.value)}
                            />
                            <button className="button" type="submit">Buscar</button>
                        </form>
                    </div>
                    {response ? (
                        <div className="client-found">
                            <label className="title-found" htmlFor="Simulacao">Cliente Encontrado</label>
                            <label className="cpf" htmlFor="Simulacao">{response.cpf}</label>
                            <label className="client-name" htmlFor="Simulacao">{response.name}</label>
                            <button className="button" onClick={()=>handleSolicitate()}>Solicitar</button>
                        </div>
                    ):(
                        <div className="client-not-found">
                            <label className="client-not-found" htmlFor="Simulacao">Cliente Não Encontrado</label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}