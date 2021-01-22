import React,{useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';
import Headerbar from '../components/HeaderBar';
import TitleItem from '../components/TitleItem';
import '../styles/pages/register.css';

export default function Register(){
    const history = useHistory();
    const [tableId, setTableId] = useState(localStorage.getItem('@table/type'));
    const[name, setName] = useState<string>('');
    const[card_number, setCardNumber] = useState<string>('');
    const[month_year, setMonthYear] = useState<string>('');
    const[code, setCode] = useState<string>('');
    const tagCard = '@card/data';

    console.log(typeof tableId)
    console.log(tableId)

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        const data = {
            'name': name,
            'card_number': card_number,
            'month_year': month_year,
            'code': code
        }
        localStorage.setItem(tagCard, JSON.stringify(data));
        history.push(`/confirmation/${tableId}`);
    };

    return(
        <>
            <Headerbar/>
            <div className="container">
                <TitleItem text="Solicitar Empréstimo"/>
                <form onSubmit={handleSubmit}>
                    <div className="all-info-card">
                        <div className="card-left-data">
                            <label className="title" htmlFor="left-lable">Insira os dados do Cartão</label>
                            <div className="card-data">                
                                <input 
                                    id="name"
                                    required={true}
                                    placeholder="Nome" 
                                    value={name}
                                    type="text" 
                                    onChange={event => setName(event.target.value)}
                                />
                            </div>
                            <div className="card card-data">                
                                <input 
                                    id="card-number"
                                    required={true}
                                    placeholder="Numero do cartão" 
                                    value={card_number} 
                                    onChange={event => setCardNumber(event.target.value)}
                                />
                            </div>
                            <div className="card-data">                
                                <input 
                                    id="month_year"
                                    required={true}
                                    placeholder="Data de Validade MM/AA" 
                                    value={month_year} 
                                    onChange={event => setMonthYear(event.target.value)}
                                />
                            </div>
                            <div className="card-data">                
                                <input 
                                    id="code"
                                    required={true}
                                    placeholder="CVC"
                                    max="999"
                                    type="number" 
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