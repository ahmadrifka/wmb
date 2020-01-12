import React from 'react';
import {Card, Button, TextField} from '@material-ui/core'
import {connect} from 'react-redux'
import './Menu.css'
import Divider from '@material-ui/core/Divider';
import * as MenuService from './services/MenuService'
import * as OrderService from '../Order/service/OrderService'



class MenuOrder extends React.Component{
   constructor(props) {
      super(props);
      this.handleSubmitReserve = this.handleSubmitReserve.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }


   LoadingMenu(){
      // console.log(this.props.loading);
      const{dispatch, menu}= this.props;

      // dispatch({type:'FETCH_USERS'});
      if (menu.length === 0) {
          MenuService.list()
          .then((menu)=> {

              dispatch({type:'FETCH_MENU_DONE', loading: false, menu});
          })
          .catch((error)=>{
              dispatch({type:'FETCH_MENU_DONE', loading: false, menu: []});
          })
  }
}

componentDidMount(){

  if (this.props.loading){
  this.LoadingMenu();
  console.log('didmount list');
  }

}

componentDidUpdate(){
  if(this.props.loading){
  this.LoadingMenu();
  }
}






handleSubmitReserve = (event) => {
   console.log("menu",event)
   event.preventDefault();
   console.log(this.props.order)
   const{dispatch}=this.props;
   const{loading,selectOrders, transaction, ...payload}=this.props.order

   console.log(payload)
   const{order}=payload;
   OrderService.save(order)
   .then((resp)=> {
      this.LoadingMenu();
      console.log(resp)
   })
   OrderService.getOrder(order)
   .then((order) => {
      dispatch({type:'FETCH_LIST_ORDERS', orderId:order})
      console.log('ini getorder',order)
   })
}

handleChange = (event) => {
   let input = event.target.value;
   // const value = event.target.value;
   this.props.dispatch({type:'INPUT_QTY',
   input: input
 })
}


    render(){
    console.log(this.props.order)
    const{menu} = this.props
    return(
      <div>
      <Card>
      <h3>MENU LIST</h3>
         <div className='cardcontain'>
      {this.props.menu.map((menus,i) =>
      <Button onClick={()=> this.props.dispatch({type:'ADD_ITEMS', indexMenu: i, menus: menu})}>
       <Card className="card2">
          <img alt="" src={menus.image} className='pic'></img>
          <div style={{marginTop:'-22px'}}>
          <h3> {menus.name}</h3>
          <h4> Rp. {menus.price}</h4>
          <Button onClick={(menus)=> this.handleSubmitReserve(menus)} >SAVE</Button>

          </div>
       </Card>
      </Button>
      )}

         </div>
                <Divider/>
                <h3> Input Total:
                <TextField
      id="outlined-basic"
      className="inputan"
      // style={{marginTop:'-100px'}}
      // style={{width:'30px'}}
      label=""
      name="qty"
      margin="normal"
      type="number"
      variant="outlined"
      onChange={this.handleChange}
    />
      </h3>
    </Card>
   </div>
    )
    }
}

function mapStateToProps(state){
    return{ ...state.menu, order:{...state.order}};
}
export default connect(mapStateToProps)(MenuOrder);