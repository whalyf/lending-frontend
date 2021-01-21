import React from 'react';
import {FiLogOut, FiMenu} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import '../styles/components/header-bar.css';

import logoImg from '../images/logo.svg';

function handleClearStorage(){
    localStorage.clear();
}

export default function HeaderBar(){
    return(
        <header className="app-header">
            <div className="header-icons">
                <Link className='menu-link' to ='/'>
                    <FiMenu size={40} color="#FFF"/>
                </Link>
                <Link className='logo-link' to ='/'>
                    <img src={logoImg} alt="LogoKlutch"/>
                </Link>
                <Link className='logout-link' onClick={()=>handleClearStorage()} to ='/'>
                    <FiLogOut size={40} color="#FFF"/>
                </Link>
            </div>
        </header>
    )
}