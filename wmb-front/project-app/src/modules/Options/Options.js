import React, { Component } from 'react';
import {connect} from 'react-redux';
import './options.css';
import { Card, Button } from '@material-ui/core';
import {TextField} from '@material-ui/core';
import swal from 'sweetalert';
import * as OptionsService from './service/OptionService';

class Options extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.props.dispatch({
            type: 'ADD_NEW_MENU',
            menu: {...this.props.menu, [name]: value }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const{menu} = this.props
        OptionsService.save(menu)
            .then((response)=>{
                if(response.ok){
                    swal("New Menu Added","", "success", {
                        button: "OK",
                      });
                }
                else {
                    swal("Added Failed!" , "","error", {
                        button: "OK",
                      });
                }
            })
    }






    render() {
        return (
            <div className="options">
                <Card className="formMenu">
                    <h2>ADD MENU</h2>
                    <TextField id = "outlined-basic"
                    style = {
                    { width: '250px' } }
                    label = "New Menu Name"
                    margin = "normal"
                    name = "name"
                    variant = "outlined"
                    onChange = { e => this.handleChange(e) }/>
                    <br></br>
                    <TextField id = "outlined-basic"
                    style = {
                    { width: '250px' } }
                    label = "Price Menu Item"
                    margin = "normal"
                    name = "price"
                    variant = "outlined"
                    type ="number"
                    onChange = { e => this.handleChange(e) }/>
                    <br></br>
                    <Button onClick={(e)=>this.handleSubmit(e)}>ADD MENU</Button>
                </Card>
                <Card className="formMenu">
                    <h2>ADD TABLE</h2>
                </Card>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{...state.options}
}

export default connect (mapStateToProps)(Options);