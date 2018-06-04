import React, {Component} from 'react'
import MainMenu from "./MainMenu/MainMenu";
import SubMenu from "./SubMenu/SubMenu";
import ItemList from "./Items/ItemList";

export default class MainPage extends Component {
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