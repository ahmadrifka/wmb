import React from 'react';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
import Customers from '../../modules/Customers/Customers';
import Menu from '../../modules/Menu/Menu';
import Transaction from '../../modules/Transaction/Transaction';
import Table from '../../modules/Table/Table';
import ListOrder from '../../modules/Order/ListOrder'
import LandingPage from './LandingPage'
import Options from '../../modules/Options/Options';

function Content (){
    return(

        <Switch>
           <Route exact path="/">
              <LandingPage/>
           </Route>
            <Route path="/customers">
                <Customers/>
             </Route>
             <Route path="/menu">
                <Menu/>
             </Route>
             <Route path="/table">
                <Table/>
             </Route>
             <Route path="/order">
                <ListOrder/>
             </Route>
             <Route path="/transaction">
                <Transaction/>
             </Route>
             <Route path="/options">
                <Options/>
             </Route>
        </Switch>
    )
}

export default Content;