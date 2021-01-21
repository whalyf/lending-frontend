import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LendingCalc from './pages/LendingCalc';
import Borrow from './pages/Borrow';
import Register from './pages/Register';
import CardType from './pages/CardType';
import Confirmation from './pages/Confirmation';
import ConfirmationSucceed from './pages/ConfirmationSucceed';
import Details from './pages/Details';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LendingCalc}/>
                <Route path="/borrow" component={Borrow}/>
                <Route path="/register" component={Register}/>
                <Route path="/card-type" component={CardType}/>
                <Route path="/confirmation/:id" component={Confirmation}/>
                <Route path="/confirmation-succeed" component={ConfirmationSucceed}/>
                <Route path="/details" component={Details}/>
            </Switch>
        </BrowserRouter>
    )
}