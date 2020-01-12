import React from 'react'
import HeadSidebar from "./HeadSidebar/HeadSidebar";
import Content from './Content/Content';
import {BrowserRouter as Router} from 'react-router-dom'



function SingleLayout() {
    return(
        <div>
            <Router>
            <HeadSidebar/>
            <Content/>
            </Router>
        </div>
    )
}

export default SingleLayout;