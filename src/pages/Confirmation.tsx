import React, {useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import _ from 'lodash';

import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';

import '../styles/pages/confirmation.css';

import backend from '../services/api';

interface ClientCard{
    name: string;
    card_number: string;
    month_year: string;
    code: string;
}

interface Tbl{
    id:string
}


export default function Confirmation(){
    const history = useHistory();
    const params = useParams<Tbl>();
    const tables = backend.rateTable;
    let solic = backend.solicitation;
    
    const id = parseInt(params.id)
    
    const tableData = (_.find(tables,{id:id}));

    const [clientId, setClientiD] = useState<number>(JSON.parse(String(localStorage.getItem('@client/id'))));
    const [clientCard, setClientCard] = useState<ClientCard>(JSON.parse(String(localStorage.getItem('@card/data'))));
    const [intended_value, setIntendedValue] = useState(Number(localStorage.getItem('@value/intended')));
    const [quotaId, setQuotaId] = useState(Number(localStorage.getItem('@table/quota')));
    let quota = (tableData?.installments.length);
    let total_loan = (tableData?.installments[quotaId].fullValue) || 0;
    let quota_value = (tableData?.installments[quotaId].installmentValue) || 0;
    let comission = (tableData?.installments[quotaId].comission) || 0;
    let installment_interest = (tableData?.installments[quotaId].installmentInterest) || 0;
    const [automatic, setAutomatic] = useState<boolean>(true);
    const tagConfirm = '@confirm/type';
   
    console.log('SOLICITATION INICIAL', solic)

    //Esse é o objeto que deve ser inserido no api.json na parte `Solicitations`
    const newSolic = {
        id: (solic.length + 1),
        clientId:clientId,
        installmentInterest: installment_interest,
        installmentInterestValue: installment_interest,
        comission: comission,
        comissionValue: comission,
        installmentValue: quota_value,
        cardNumber: clientCard.card_number,
        desiredValue: intended_value,
        totalLoan: total_loan,
        installmentId: quotaId,
        rateTableId: id
    }
        
    function handleSubmit(){
        localStorage.setItem(tagConfirm, JSON.stringify(automatic));
        history.push('/confirmation-succeed');
        console.log('SOLICITATION INCREMENTADO',solic.concat(newSolic));
    };

    function ReviewData(){
        return(
            <form onSubmit={handleSubmit} className="create">
                <div className="all-table-type">
                    <div className="table">
                        <label className="table-text-left" htmlFor="Simulacao">Tabela:</label>
                        <label className="table-text-right" htmlFor="Tabela Padrão">{tableData?.name}</label>
                    </div>
                </div>
                <div className="fields">
                    <div className="field-left">
                        <div className="field up">
                            <label className="intended-value" htmlFor="IntendedValue">Valor desejado:</label>
                            <label className="intended-value-value" htmlFor="IntendedValueValue">R$ {intended_value}</label>
                        </div>
                        <div className="field">
                            <label className="quota" htmlFor="Quota">Parcelas:</label>
                            <label className="quota-selector" htmlFor="QuotaSelector">{quota}</label>
                        </div>
                    </div>
                    <div className="field-right">
                        <div className="field up">
                            <label className="total-value" htmlFor="TotalValue">Valor total do empréstimo:</label>
                            <label className="total-value-value" htmlFor="TotalValueValue">R$ {total_loan}</label>
                        </div>
                        <div className="field">
                            <label className="quota-value" htmlFor="QuotaValue">Valor da parcela:</label>
                            <label className="quota-value-value" htmlFor="QuotaValueValue">R$ {quota_value}</label>
                        </div>
                    </div>
                </div>
                <div className="contract-type">
                    <div className="button-select">
                        <button 
                        type="button" 
                        className={automatic ? 'active' : ''}
                        onClick={() => setAutomatic(true)}
                        >
                            Automático
                        </button>
                        <button 
                        type="button"
                        className={!automatic ? 'active' : ''}
                        onClick={() => setAutomatic(false)}
                        >
                            Manual
                        </button>
                    </div>
                    <button className="button" type="submit">
                        <FiCheck size={39} color="#FFF"/>
                        Concluir
                    </button>
                </div>
            </form>
        )
    };

    return(
        <>
            <HeaderBar/>
            <div className="container">
                <div className="head-confirm">
                    <TitleItem text="Solicitar Empréstimo"/>
                </div>
                <div className="confirms">
                    <ReviewData/>
                    <table className="tbl-confirm">
                        <div className="table-header">
                            <th>{tableData?.name}</th> 
                            <div className="headers">
                                <th>Parcela</th>
                                <th>Juros da Parcela</th>
                                <th>Valor Parcela</th>
                                <th>Valor Total</th>
                                <th>Comissão</th>
                            </div>
                            {tableData?.installments.map(eachItem=>(
                                <tr className="table-items">
                                    <td>{eachItem.installments}</td>
                                    <td>{eachItem.installmentInterest}%</td>
                                    <td>R${eachItem.installmentValue}</td>
                                    <td>R${eachItem.fullValue}</td>
                                    <td>R${eachItem.comission}</td>
                                </tr>
                            ))}
                        </div>
                    </table>
                </div>
            </div>
        </>
    )
}