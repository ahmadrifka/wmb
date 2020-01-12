import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Card} from '@material-ui/core'
import './Menu.css'
import * as MenuService from './services/MenuService'



class Menu extends Component {
    
    LoadingMenu(){
            
            console.log(this.props.loading);
            
            const{dispatch, menu}= this.props;

            // dispatch({type:'FETCH_USERS'});
            if (menu.length === 0) {
                MenuService.list()
                .then((menu)=> {
                    // console.log('meja')
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


    renderUserRows(menu){
        // console.log('ini meja',meja);
        return menu.map((user)=>{
            return(
                <tr key={user.id}>
                    <Card>LOADING...</Card>
                </tr>

            )
        });
    }



    render() {
        const{menu} = this.props;
        console.log('renderUserlist');
        console.log(menu)

        return (
            <div>

            <div className="menus">
         {menu.map((menus)=>
             <Card className='card'>
                 <img alt="" src={menus.image} className="pic"></img>
                 <h3>{menus.name}</h3>
                 <h3> Harga : Rp. {menus.price}</h3>
                 </Card>
         )}
            </div>
         </div>
        );
    }
}


function mapStateToProps(state){
    return{...state.menu}
}

export default connect(mapStateToProps)(Menu);