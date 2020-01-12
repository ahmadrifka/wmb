import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as OrderService from './service/OrderService';
import * as TransactionService from '../Transaction/service/TransService';
import './order.css'
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core'
import swal from 'sweetalert';



class ListOrder extends Component {
  constructor(props) {
    super(props);
    this.handleChange= this.handleChange.bind(this);
    this.handlePaid=this.handlePaid.bind(this);
}





    LoadingOrder(){
        const{dispatch, order}= this.props;
      // console.log(order)
    if (order.length === 0) {
            OrderService.list()
                .then((order)=> {
                    console.log('service')
                    dispatch({type:'FETCH_ORDER_DONE', loading: false, order});
                })
                .catch((error)=>{
                    dispatch({type:'FETCH_ORDER_DONE', loading: false, order:[]});
                })
        }
    }
    LoadingTrans(){
      const{dispatch, transaction}= this.props;

    if (transaction.length === 0) {
            TransactionService.list()
                .then((transaction)=> {
                    console.log('service')
                    dispatch({type:'FETCH_TRANSACTION_DONE', loading: false, transaction});
                })
                .catch((error)=>{
                    dispatch({type:'FETCH_TRANSACTION_DONE', loading: false, transaction:[]});
                })
            }
        }

    componentDidMount(){

        if (this.props.loading){
        this.LoadingOrder();
        this.LoadingTrans();
        console.log('didmount list');
        }

    }

    componentDidUpdate(){
        this.LoadingOrder();
        this.LoadingTrans();
    }


    //PAYMENT

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
          } else {
              swal("Payment Failed!" , "","error", {
                  button: "OK",
                });
          }
      })
      .catch((error)=>{
          console.log(error)
          alert(error);
      })
  }

  handlePaid(){
    const ac = []
    console.log('ini masuk',ac )
    const {transaction} = this.props
      transaction.filter((e) => {
        if(e.status === "Unpaid"){
         const pay =  ac.push(e);
         return pay;
        }
      })
    return (
      ac.map(e =>
        <Card className='card'>
        <CardActionArea>
          <CardMedia
            className=''
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="h2">
              {e.tables.name}
              <h4 style={{fontSize:'20px'}}>Customers: {e.name}</h4>
              <h5 style={{fontSize:'20px'}}>Status: {e.status}</h5>
              <h5 style={{fontSize:'20px'}}>Total Price:  {e.total_Price}</h5>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
      )
    )}


    render() {
        return (
          <div className="containOrder">
            {/* <Card className="Payment">
                <h2>PAYMENT</h2>
                <h3>INPUT PAYMENT</h3>
                <TextField type="number" margin="normal" onChange={(event) => this.handleChange(index, event.target.value)}/>
              </Card> */}

            <div className="contain">
              {this.handlePaid()}

            </div>
          </div>
        );
    }
}




function mapStateToProps(state){
    return{...state.order,...state.transaction}
}

export default connect(mapStateToProps)(ListOrder);