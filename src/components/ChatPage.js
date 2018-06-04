import React, {Component} from 'react'
import MainMenu from "./MainMenu/MainMenu";
import ChatBoard from "./ChatBoard/ChatBoard";

export default class ChatPage extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <MainMenu/>
        <ChatBoard/>
      </div>
    )
  }
}