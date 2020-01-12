import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as TransactionService from '../../Transaction/service/TransService';
import { connect } from 'react-redux';

class InputForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }



    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.props.dispatch({
            type: 'ADD_CUSTOMER',
            transaction: {...this.props.transaction, [name]: value }
        })
    }


    LoadingTrans() {

        const { dispatch } = this.props;
        console.log('transainput:', this.props.trans.transaction)
        if (this.props.trans.transaction.length === 0) {
            TransactionService.list()
                .then((transaction) => {
                    console.log('service')
                    dispatch({ type: 'FETCH_TRANSACTION_DONE', loading: false, transaction });
                })
                .catch((error) => {
                    dispatch({ type: 'FETCH_TRANSACTION_DONE', loading: false, transaction: [] });
                })
            console.log(this.props)


        }
    }

    componentDidMount() {

        if (this.props.loading) {
            this.LoadingTrans();
            console.log('didmount list');
        }

    }

    componentDidUpdate() {
        if (this.props.loading) {
            this.LoadingTrans();
        }
    }





    render() {
        console.log('form', this.props.transaction)
        return ( 
        <form>
        <div>
        <h1> INPUT CUSTOMER </h1>

            <TextField id = "outlined-basic"
            style = {
                { width: '250px' } }
            label = "Customer Name"
            margin = "normal"
            name = "name"
            variant = "outlined"
            onChange = { e => this.handleChange(e) }/> 
            <br></br>
            <TextField id = "outlined-basic"
            style = {
                { width: '250px' } }
            label = "Amount Customer"
            name = "amount_of_customer"
            margin = "normal"
            type = "number"
            variant = "outlined"
            onChange = { e => this.handleChange(e) }/>

            </div> 
        </form> 
        )
    }
}


function mapToStateProps(state) {
    return {...state.order, trans: {...state.transaction } }

}

export default connect(mapToStateProps)(InputForm);