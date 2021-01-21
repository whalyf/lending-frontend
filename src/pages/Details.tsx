import React,{ useState } from 'react';
import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';
import {FiAlertCircle, FiCheckCircle} from 'react-icons/fi';
import _ from 'lodash';
import '../styles/pages/details.css';
import archiveImg from '../images/archive.svg';
import backend from '../services/api';

interface ClientCardData{
    name: string;
    card_number: string;
    month_year: string;
    code: string;
}

export default function Details(){
    const tables = backend.rateTable;
    const clients = backend.client;
    const [tableId, setTableId] = useState(Number(localStorage.getItem('@table/type')));
    const tableData = (_.find(tables,{id:tableId}));
    const [quotaId, setQuotaId] = useState(Number(localStorage.getItem('@table/quota')));
    const [client, setClient] = useState<ClientCardData>(JSON.parse(String(localStorage.getItem('@card/data'))));
    const [clientId, setclientId] = useState<number>(JSON.parse(String(localStorage.getItem('@client/id'))));
    const [type, setType] = useState((localStorage.getItem('@confirm/type')));
    let total_value = (tableData?.installments[quotaId].fullValue);
    let quota_value = (tableData?.installments[quotaId].installmentValue);
    const clientAllData = (_.find(clients,{id:clientId}));
    
    return(
        <>
            <HeaderBar/>
            <div className="container">
                <TitleItem text="Detalhes de Solicitação"/>
                <div className="columns">
                    <div className="left-column">
                        <label className="left-column-title" htmlFor="">Solicitação gerada por <strong>Sistema Credifica</strong></label>
                        <ul>
                            <li>
                                <label className="total-text" htmlFor="total">Valor total</label>
                                <label className="total-value" htmlFor="total">R$ {total_value}</label>
                            </li>
                            <li>
                                <label className="total-text" htmlFor="total">Valor a depositar</label>
                                <label className="total-value" htmlFor="total">R$ {total_value}</label>
                            </li>
                            <li>
                                <label className="card-text" htmlFor="total">Frente do cartão</label>
                                <img src={archiveImg} alt="archive"/>
                                <a href="#">Ver Comprovante</a>
                            </li>
                            <li>
                                <label className="card-text" htmlFor="total">Verso do cartão</label>
                                <img src={archiveImg} alt="archive"/>
                                <a href="#">Ver Comprovante</a>
                            </li>
                            <li>
                                <label className="card-text" htmlFor="total">Selfie com cartão</label>
                                <img src={archiveImg} alt="archive"/>
                                <a href="#">Ver Comprovante</a>
                            </li>
                        </ul>
                    </div>
                    <div className="right-column">
                        <label className="right-column-title" htmlFor="">Fluxo de Solicitação: {type?.length === 4 ? (<strong>Automático</strong>):(<strong>Manual</strong>)}</label>
                        <div className="modality infos">
                            <label className="right-cels-title" htmlFor="">Modalidade:</label>
                            <ul>
                                <li>Cartão de Crédito</li>
                                <li>Número do cartão: {client.card_number}</li>
                                <li>Validade: {client.month_year} CVC: {client.code}</li>
                                <li>parcela de:<strong>  R$ {quota_value}</strong></li>
                                <li>Tabela: {tableData?.name}</li>
                            </ul>
                        </div>
                        <div className="client-infos infos">
                            <label className="right-cels-title" htmlFor="">Informações do Cliente:</label>
                            <ul>
                                <li>Nome: {client.name}</li>
                                <li>CPF: {clientAllData?.cpf}</li>
                                <li>Agência: {clientAllData?.bank.label.split('-')[0]}</li>
                                <li>{clientAllData?.bank.label.split('-')[1]}</li>
                                <li>Tipo de Conta: {clientAllData?.bank.accountTypeLabel}</li>
                                <li>Número da conta: {clientAllData?.bank.accountNumber}</li>
                            </ul>
                        </div>
                        <div className="general-infos infos">
                            <label className="right-cels-title" htmlFor="">Informações Gerais:</label>
                            <div className="all-buttons">
                                <label className="last-field" htmlFor="">Data:{}</label>
                                <button className="wait-button" type="button">
                                    <FiAlertCircle size={24} color="#FFF"/>
                                    Aguardando</button>
                                <div className="down-buttons">
                                    <button className="aprove-button" type="button">
                                        <FiCheckCircle size={24} color="#FFF"/>
                                        Pré Aprovar
                                    </button>
                                    <button className="disaprove-button" type="button">
                                        <FiAlertCircle size={24} color="#FFF"/>
                                        Reprovar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}