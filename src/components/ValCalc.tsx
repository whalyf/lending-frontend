import React from 'react';



import '../styles/components/val-calc.css';

export default function ValCalc(){
    interface Value {
        val:number;
    }

    function handleCalculate(val: Value){

    }

    return(
        <div className="input-area">
            <label htmlFor="Value">Valor Desejado</label>
            <div className="input-field">
                <input placeholder="R$0,00"></input>
                <button className="button" onClick={()=>{}}>Calcular</button>
            </div>
        </div>
    )
}