import React, { Component } from 'react';
import { Card} from '@material-ui/core';
import { connect } from 'react-redux';
import './order.css'
import * as OrderService from './service/OrderService'
import swal from 'sweetalert';
import * as TransactionService from '../Transaction/service/TransService';

 class Order extends Component {

constructor(props) {
    super(props);
    this.ListOrderbyId=this.ListOrderbyId.bind(this);
}




    LoadingTrans(){
        const{dispatch}= this.props;

// if (transaction.length === 0) {
        TransactionService.list()
            .then((transaction)=> {
                console.log('service')
                dispatch({type:'FETCH_TRANSACTION_DONE', loading: false, transaction});
            })
            .catch((error)=>{
                dispatch({type:'FETCH_TRANSACTION_DONE', loading: false, transaction:[]});
            })

        // }
    }


 
    LoadingOrder(){
        console.log(this.props.loading);
        const{dispatch}= this.props;
            OrderService.list()
            .then((order)=> {
                console.log('pesanan', order)
                dispatch({type:'FETCH_ORDER_DONE', loading: false, order});
            })
            .catch((error)=>{
                dispatch({type:'FETCH_ORDER_DONE', loading: false, order:[]});
            })
}

ListOrderbyId(order){
    const{transaction}= this.props
        OrderService.getOrder(transaction)
        console.log('masuk')
        .then({type:'FETCH_LIST_ORDERS', orderId:order})

    }





componentDidMount(){
    this.LoadingTrans();
    if (this.props.loading){
    this.LoadingOrder();
    console.log('didmount list');
    }
  }
  componentDidUpdate(){
      this.LoadingTrans();
    if(this.props.loading){
    this.LoadingOrder();
    }
  }




handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.order)
    const resp = OrderService.save(this.props.order)
    resp.then(response => {
        console.log(response)
        if(response.ok){
            swal("Order Successfull!", response.statusText  , "success", {
                button: "OK",
              });
        } else {
            swal("Order Failed!", response.statusText , "error", {
                button: "OK",
              });
            // alert(response.status)
        }

    })
}


    render() {

        const{transaction, selectOrders} =this.props
        console.log('ini select order',selectOrders);
        return (
            <div>
                <Card>
                    <h3>Detail Pesanan</h3>
                    <div className='borderPesan'>
                    <h4>No.Invoice: </h4>
                    <h4>Name: {transaction.name} </h4>
                    <h4>Amount of Customers: {transaction.amount_of_customer}</h4>
                    <h4>Table: {transaction.tables.name}</h4>
                    {/* <h4>Orders: {selectOrders.map(i =>
                        i.menu.name
                         )}</h4> */}
                    <h4>Status: {transaction.status}</h4>
                    {/* <h4>Total Price: {transaction.total_Price}</h4> */}
                    </div>
                    {/* <Button onClick={()=>this.ListOrderbyId()}>ORDER</Button> */}
                </Card>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {...state.order}
}
export default connect(mapStateToProps)(Order);