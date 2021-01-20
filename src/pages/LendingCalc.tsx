import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';

import HeaderBar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';
import '../styles/pages/lending-calc.css';

import backend from '../api.json';

interface TableData{
    id: number;
    name: string;
    installments: {
        id: number;
        installments: number;
        installmentInterest: number;
        installmentValue: number;
        fullValue: number;
        comission: number;
    };
}

interface FooterData{
    id: number;
    installments: number;
    installmentInterest: number;
    installmentValue: number;
    fullValue: number;
    comission: number;
}


export default function LendingCalc(){
    const history = useHistory();
    const tables = backend.rateTable;
    const [value, setValue]= useState<string>('');
    const [showTable, setShowTable] = useState<boolean>(false);
    const [tab, setTab] = useState<number>();
    const [footer, setFooter] = useState<number>();
    const [footerData, setFooterData] = useState<Object>();
    //const [tableDat, setTableDat] = useState<TableData>();

    //localStorage tags
    const tagTable = '@table/type';
    const tagQuota = '@table/quota';
    const tagValue = '@value/intended';

    function AllTables(){
        return(
            <td>
            {tables.map(category=>(
                <ul key={category.id}>
                    <table className="tbl">
                        <div className="table-header">
                            <div className="radio-title">
                                <input type="radio" onChange={()=>updateTableData(category.id)} name="table-select" id=""/>
                                <th>{category.name}</th> 
                            </div>
                            <div className="headers">
                                <th>Parcela</th>
                                <th>Juros da Parcela</th>
                                <th>Valor Parcela</th>
                                <th>Valor Total</th>
                                <th>Comissão</th>
                            </div>
                        </div>
                        {category.installments.map(eachItem=>(
                            <tr className="table-items">
                                <input type="radio" onChange={()=>updateFooterData(eachItem.id,category.id)} name="quota-select" id=""/>
                                <td>{eachItem.installments}</td>
                                <td>{eachItem.installmentInterest}%</td>
                                <td>R${eachItem.installmentValue}</td>
                                <td>R${eachItem.fullValue}</td>
                                <td>R${eachItem.comission}</td>
                            </tr>
                        ))}
                    </table>
                </ul>  
            ))}   
            </td>
        )
    };

    async function updateFooterData(each: number, cat:number){
        setFooter(each);
        setTab(cat);
        let tableData = (_.find(tables,{id:cat}));
        await setFooterData((_.find(tableData?.installments,{id:each})));
        console.log(footerData)
    };

    function updateTableData(num: number){
        setTab(num);
    };

    function handleSelectTable(){
        localStorage.setItem(tagTable, JSON.stringify(tab));
        localStorage.setItem(tagQuota, JSON.stringify(footer));
        history.push('/borrow');
    };

    function handleCalculate(event: FormEvent){
        event.preventDefault();
        localStorage.setItem(tagValue, value);
        setShowTable(true);
    }; 

    return(
        <div>
            <HeaderBar/>
            <div className="container">
                <TitleItem text="Simulacão de taxas"/>
                <div className="input-area">
                    <label htmlFor="Value">Valor Desejado</label>
                    <form className="input-field" onSubmit={handleCalculate}>
                        <input 
                            id="string"
                            placeholder="R$0,00"
                            type="number" 
                            value={value} 
                            required={true} 
                            min="300.00" 
                            max="10000.00" 
                            step=".05"
                            pattern="\d*" 
                            onChange={event=>setValue(event.target.value)}
                        />
                        <button className="button"type="submit">Calcular</button>
                    </form>
                </div>
                {showTable ?(
                    <>
                    <AllTables/>
                    <div className="footer">
                        <div className="footer-content">
                            <label htmlFor="Name">Nome:{}</label>
                            <label htmlFor="Quota">Parcelas:{}</label>
                            <label htmlFor="Quota Value">Valor da Parcela:{}</label>
                        </div>
                            <button className="button"onClick={handleSelectTable}>Avançar</button>
                    </div>
                    </>
                ):(
                    <p></p>
                )}
            </div>
            
        </div>
    )
}