import React, { Component } from 'react';
import './LandingPage.css'
import Picture from '../../uploads/chef.png'
class LandingPage extends Component {
    render() {
        return (
            <div className="landing">
                <h1 style={{fontSize:'50px', marginRight:'40px'}}>WELCOME TO OUR RESTAURANT</h1>
                <h2 style={{fontSize:'60px', marginRight:'40px', color:'black'}}>
                    RATATOUILLE
                </h2>
                <h3 style={{fontSize:'30px', marginLeft:'720px'}}>~"Anyone Can Cook"~</h3>
                <img alt="" className='rat' src={Picture}></img>
            </div>
        );
    }
}

export default LandingPage;