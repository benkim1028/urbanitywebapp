import React, {Component} from 'react'
import NavBar from "../Navbar";
import SubMenu from "../SubMenu";
import Items from "../Items";

export default class Page1 extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <SubMenu/>
                <Items/>
            </div>
        )
    }
}