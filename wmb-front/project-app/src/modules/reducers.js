// import React from 'react';
import { combineReducers } from 'redux';
import TableReducer from './Table/reducers/TableReducers';
import MenuReducer from './Menu/reducer/MenuReducer';
import TransactionReducer from './Transaction/reducer/TransactionReducer';
import OrderReducer from'./Order/reducer/OrderReducer';
import OptionsReducer from './Options/reducer/OptionsReducer'

export default combineReducers({
    table: TableReducer,
    menu: MenuReducer,
    transaction: TransactionReducer,
    order: OrderReducer,
    options: OptionsReducer,
})