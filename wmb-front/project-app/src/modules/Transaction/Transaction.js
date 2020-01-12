import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Card, Button} from '@material-ui/core'
import * as TransactionService from './service/TransService';
import './trans.css';
import swal from 'sweetalert';

class Transaction extends Component {
constructor(props) {
    super(props);
    this.handleChange= this.handleChange.bind(this);
}

handleChange = (trxIndex, paymentValue) => {
    this.props.dispatch({type:'INPUT_PAYMENT', trxIndex, paymentValue})
 }


handleSubmit = (event, trx) => {
    event.preventDefault();
    console.log('transaction: ', trx)
    TransactionService.update(trx)
    .then(response => {
        this.LoadingTrans();
        console.log(response)
        if(response.ok){
            swal("Payment Successfull!","", "success", {
                button: "OK",
              });

        }else if(response.status === 404){
            swal("Payment Failed!" , "Insuffisient Cash ","error", {
                button: "OK",
              });
        }
        else {
            swal("Payment Failed!" , "","error", {
                button: "OK",
              });
        }

    })
}
    LoadingTrans(){
            const{dispatch}= this.props;

            console.log('ini loading trans')
            // if (transaction.length === 0) {
            TransactionService.list()
                .then((transaction)=> {
                    console.log('service')
                    dispatch({type:'FETCH_TRANSACTION_DONE', loading: false, transaction});
                })
                .catch((error)=>{
                    console.log(error)
                    dispatch({type:'FETCH_TRANSACTION_DONE', loading: false, transaction:[]});
                })
            console.log(this.props)

            // }
        }

    componentDidMount(){

        if (this.props.loading){
        this.LoadingTrans();
        console.log('didmount list');
        }

    }

    componentDidUpdate(){
        if(this.props.loading){
        this.LoadingTrans();
        }
    }


    renderUserRows(transaction){
        console.log('ini transaksi',transaction);
        const formatter =  new Intl.NumberFormat(`en-US`,{
            style : 'currency',
            currency: 'IDR',
            minimumFractionDigits: 2
        })
        return transaction.map((trx, index)=>{
            return(
                <tr key={trx.id}>
                  <td>{trx.id}</td>
                  <td>{trx.date}</td>
                  <td>{trx.name}</td>
                  <td>{formatter.format(trx.total_Price)}</td>
                  <td><input type="number" onChange={(event) => this.handleChange(index, event.target.value)}/></td>
                    <td>{trx.change}</td>
                  <td>
                  <Button style={{border:'solid 2px green'}} onClick={(e) => { this.handleSubmit(e, trx) }}>
                  PAY
                  </Button>
                  </td>
                    <td>{trx.status}</td>
                </tr>

            )
        });
    }

    render() {
        const{transaction, loading} = this.props;
        console.log('renderUserlist');

        // const {path} = this.props.match;
        let rows =(<tr><td colSpan={6}>LOADING...</td></tr>)
        if (!loading){
            rows = this.renderUserRows(transaction);
        }

        return (
            <div>
              <Card className="trans">
                <table class="table" >
                    <thead>
                        <tr>
                            <th scope="col">TRANSACTION ID</th>
                            <th scope="col">DATE</th>
                            <th scope="col">CUSTOMERS</th>
                            <th scope="col">TOTAL PAYMENT</th>
                            <th scope="col">INPUT PAYMENT</th>
                            <th scope="col">CHANGES</th>
                            <th scope="col">ACTION</th>
                            <th scope="col">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
                </Card>
            </div>

        );
    }
}


function mapStateToProps(state){
    return{...state.transaction}
}

export default connect(mapStateToProps)(Transaction);