import React, {Component} from 'react'
import MainMenu from "../MainMenu";
import SubMenu from "../SubMenu";
import ItemList from "../ItemList";

export default class Page1 extends Component {
    render() {
        return (
            <div>
                <MainMenu/>
                <SubMenu/>
                <ItemList/>
            </div>
        )
    }
}