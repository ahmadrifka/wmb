import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import './table.css';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import * as TableService from './service/services'

// const useStyles = makeStyles({
//     card: {
//       maxWidth: 245,
//       margin: 20,
//       boxShadow: 10
//     },
//     media: {
//       height: 40,
//     },
//   });





class Table extends Component{

  LoadingTable(){

    console.log(this.props.loading);
    const{dispatch}= this.props;
    // if (table.length === 0) {
    // dispatch({type:'FETCH_USERS'});
    TableService.list()
        .then((table)=> {
            console.log('table')
            dispatch({type:'FETCH_TABLE_DONE', loading: false, table});
        })
        .catch((error)=>{
            dispatch({type:'FETCH_TABLE_DONE', loading: false, table: []});
        })

    // }
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
}




  render() {
    const {table} = this.props;
    console.log(table)
    return (
        <div className="contain">
          {table.map((e)=>
        <Card className='tables'>
        <CardActionArea>
          <CardMedia
            className=''
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="h2">
              {e.name}
              <h5 style={{fontSize:'20px'}}>Capacity: {e.capacity}</h5>
              <h5 style={{fontSize:'20px'}}>status: {e.status}</h5>
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary" >
            ORDER
          </Button>
          <Button size="small" color="primary">
            PAY
          </Button>
        </CardActions> */}
      </Card>
         )}
      </div>

        );
    }
}


    function mapStateToProps(state){
      return{...state.table}
  }

export default connect(mapStateToProps)(Table);