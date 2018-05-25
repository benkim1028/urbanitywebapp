import React, {Component} from 'react'
import {Button, Container, Divider, Icon, Image, Input, Menu, Segment} from 'semantic-ui-react'
import SubMenu from "./SubMenu";

export default class NavBar extends Component {
    state = {activeItem: 'home'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu attached={true} style={{backgroundColor: "#ffa31d", color: "white"}} size='large' pointing secondary stackable>
                <Menu.Item header> LOGO </Menu.Item>
                <Container style={{borderLeft: -5 + "%"}} textAlign='center'>
                    <Menu.Menu position='left'>
                        <Menu.Item name="browse" content="Browse" active={activeItem === 'browse'}
                                   onClick={this.handleItemClick}/>
                        <Menu.Item name="post" content="Post" active={activeItem === 'post'}
                                   onClick={this.handleItemClick}/>
                        <Menu.Item name="chat" content="Chat" active={activeItem === 'chat'}
                                   onClick={this.handleItemClick}/>
                    </Menu.Menu>
                    <Menu.Item style={{minWidth: 38 + "%", paddingLeft: 0, paddingRight: 0}}>
                        <Input id='Search-Bar' icon={<Icon style={{color: "white"}} inverted name='search'/>} iconPosition='left' placeholder='Search Urbanity'
                               action={<Button id='Navbar-Search' name='search' content='Search' onClick={() => alert("PlaceHolder")}/>}/>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item name="blog" content="Blog"/>
                        <Menu.Item name="help" content="Help"/>
                        <Menu.Item style={{fontSize: 13 + "px"}}>
                            <Button id='Navbar-Login' name='login' content='Log In'/>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}
