import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LendingCalc from './pages/LendingCalc';
import Borrow from './pages/Borrow';
import Register from './pages/Register';
import CardType from './pages/CardType';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LendingCalc}/>
                <Route path="/borrow" component={Borrow}/>
                <Route path="/register" component={Register}/>
                <Route path="/cardtype" component={CardType}/>
            </Switch>
        </BrowserRouter>
    )
}