import React from 'react';

import '../styles/components/title-item.css';

import Folders from '../images/folders.svg';
import Plus from '../images/plus.svg';

interface TitleProps{
    text: string
}

export default function TitleItem(props: TitleProps){
    return(
        <div className="items">
            <img className="plus-icon" src={Plus} alt="plus"/>
            <img className="folders-icon" src={Folders} alt="folders"/>
            <label htmlFor="Simulacao">{props.text}</label>
        </div>
    )
}