import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import _ from 'lodash';

import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';

import '../styles/pages/confirmation-succeed.css';
import backend from '../services/api';

interface Client{
    name: string;
    card_number: string;
    month_year: string;
    code: string;
}

export default function ConfirmationSucceed(){
    const history = useHistory();
    //Recoverying localStorageData
    const tables = backend.rateTable;
    const [tableId, setTableId] = useState(Number(localStorage.getItem('@table/type')));
    const tableData = (_.find(tables,{id:tableId}));
    const [client, setClient] = useState<Client>(JSON.parse(String(localStorage.getItem('@card/data'))));
    const [intended_value, setIntendedValue] = useState(Number(localStorage.getItem('@value/intended')));
    const [quotaId, setQuotaId] = useState(Number(localStorage.getItem('@table/quota')));
    let total_value = Number(tableData?.installments[quotaId].fullValue);
    let quota_value = Number(tableData?.installments[quotaId].installmentValue);
    let fee = Number(tableData?.installments[quotaId].installmentInterest);
    let quota = Number(tableData?.installments.length);
       
    function ClientData(){
        return(
            <div className="all-form">
                <div className="confirms">
                    <div className="confirm">
                        <label className="confirm-name label" htmlFor="IntendedValue">Name:</label>
                        <div className="right-confirm">
                            <label className="confirm-name-value" htmlFor="IntendedValueValue">{client.name}</label>
                            <FiCheck size={39} color="#228A95"/>
                        </div>
                    </div>
                    <div className="confirm">
                        <label className="confirm-fee label" htmlFor="IntendedValue">Taxa:</label>
                        <div className="right-confirm">
                            <label className="confirm-fee-value" htmlFor="IntendedValueValue">{fee} %</label>
                            <FiCheck size={39} color="#228A95"/>
                        </div>
                    </div>
                    <div className="confirm">
                        <label className="confirm-card label" htmlFor="IntendedValue">Cartão:</label>
                        <div className="right-confirm">
                            <label className="confirm-card-value" htmlFor="IntendedValueValue">{client.card_number}</label>
                            <FiCheck size={39} color="#228A95"/>
                        </div>
                    </div>
                    <div className="confirm">
                        <label className="confirm-quota label" htmlFor="IntendedValue">Parcelas:</label>
                        <div className="right-confirm">
                            <label className="confirm-quota-value" htmlFor="IntendedValueValue">{quota}</label>
                            <FiCheck size={39} color="#228A95"/>
                        </div>
                    </div>
                    <div className="confirm">
                        <label className="confirm-intended label" htmlFor="IntendedValue">Valor Desejado</label>
                        <div className="right-confirm">
                            <label className="confirm-intended-value" htmlFor="IntendedValueValue">R$ {intended_value}</label>
                            <FiCheck size={39} color="#228A95"/>
                        </div>
                    </div>
                    <div className="confirm">
                        <label className="confirm-quota-total label" htmlFor="IntendedValue">Valor da Parcela:</label>
                        <div className="right-confirm">
                            <label className="confirm-quota-total-value" htmlFor="IntendedValueValue">R$ {quota_value}</label>
                            <FiCheck size={39} color="#228A95"/>
                        </div>
                    </div>
                </div>

                <div className="total">
                    <div className="confirm">
                        <label className="confirm-total label" htmlFor="IntendedValue">Valor total do empréstimo</label>
                        <div className="right-confirm">
                            <label className="confirm-total-value" htmlFor="IntendedValueValue">R$ {total_value}</label>
                            <FiCheck size={39} color="#228A95"/>
                        </div>
                    </div>
                    <button className="button" onClick={()=>history.push('/details')}>
                        Detalhe da Solicitação
                    </button>
                    <label className="last-text" htmlFor="credfica">O CredFica avaliará a solicitação</label>
                </div>
        </div>    
        )
    }
    return(
        <>
            <HeaderBar/>
            <div className="container">
                <TitleItem text="Solicitar Empréstimo"/>
                <h2>Solicitação Realizada com Sucesso !</h2>
                <h3>Resumo da Solicitação</h3>
                <ClientData/>
            </div>
        </>
    )
}