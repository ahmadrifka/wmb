import React, { Component } from 'react';
import {connect} from 'react-redux'
import './table.css';
import {Button, Card} from '@material-ui/core'
import * as TableService from './service/services';
import * as OrderService from '../Order/service/OrderService';
import * as TransactionService from '../Transaction/service/TransService';
import swal from 'sweetalert';

const style = {
    btnClick:{
       border: '2px solid blue'
    },
}







class TableOrder extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitReserve = this.handleSubmitReserve.bind(this);
      }


      LoadingTrans(){

        const{dispatch}= this.props;

        if (this.props.trans.transaction.length === 0) {
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
        }
    }


    LoadingTable(){
            console.log(this.props.loading);
            const{dispatch, table}= this.props;
        if (table.length === 0) {
            TableService.list()
                .then((table)=> {
                    console.log('meja')
                    dispatch({type:'FETCH_TABLE_DONE', loading: false, table});
                })
                .catch((error)=>{
                    dispatch({type:'FETCH_TABLE_DONE', loading: false, table: []});
                    console.log(error)
                })
            }
        }

    handleSubmitReserve = (table) => {
        console.log("table",table)
        console.log('ini handle',this.props.transaction)
        const{dispatch}=this.props;
        const payload = {
            ...this.props.transaction, tables: table
        };
        console.log(payload)
        OrderService.reserve(payload)
        .then((trans) => {
            this.LoadingTrans();
            this.LoadingTable();
            dispatch({type:'SELECT_TABLE', trans, table});
            if(trans.status === 500){
                swal("Table is Already Reserved","", "error", {
                    button: "OK",
                  });
            }

         })
    }


    componentDidMount(){
        if (this.props.loading){
        this.LoadingTable();
        console.log('didmount list');
        }

    }

    componentDidUpdate(){
        if(this.props.loading){
        this.LoadingTable();
        }
        this.LoadingTrans();
    }


    renderUserRows(table){
        // const{dispatch}=this.props
        return table.map((user)=>{
            return(
               <tr key={user.id}>
                    <Card>LOADING...</Card>
                </tr>

            )
        });
    }




    render() {
        // const{table, loading} = this.props;
        console.log('renderUserlist', this.props.transaction );
        console.log('ini transaksi pada table order', this.props.trans.transaction)

        // if (!loading){
        //     rows = this.renderUserRows(table);
        // }
        return (
            <div>
                <div className="container">
               {this.props.table.map((item) =>
            <Card className="tableOrder">
                    <h2> {item.name}</h2>
                    <h3> Capacity {item.capacity}</h3>
                    <h3> {item.status}</h3>
                    <Button style={style.btnClick} onClick={()=>this.handleSubmitReserve(item)}>BOOK</Button>
            </Card>
      )}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{...state.table, ...state.order, trans:{...state.transaction}}
}

export default connect(mapStateToProps)(TableOrder);