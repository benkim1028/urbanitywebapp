import React, {Component} from 'react'
import {Button, Container, Divider, Icon, Image, Input, Menu, Segment} from 'semantic-ui-react'

export default class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'home',
            authenticated: false
        };
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {name}) {
        this.setState({activeItem: name})
    };

    renderIdTag(name, imageURL) {
        if (this.state.authenticated)
            return (
                <Menu.Item style={{paddingTop: 3 + "px", paddingBottom: 3 + "px"}} name="id" content={name}
                           icon={<Image circular id='Id-Tag'
                                        src={imageURL}/>}/>
            )
    }

    renderLoginButton() {
        if (this.state.authenticated)
            return(
                <Menu.Item name='log out' onClick={() => this.setState({authenticated: !this.state.authenticated})}/>
            );
        else
            return (
                <Menu.Item style={{fontSize: 13 + "px"}}>
                    <Button id='Navbar-Login' name='login' content='Log In'
                            onClick={() => this.setState({authenticated: !this.state.authenticated})}/>;
                </Menu.Item>
            );
    }

    render() {
        const {activeItem} = this.state;

        return (
            <Menu attached={true} style={{backgroundColor: "#ffa31d", color: "white"}} size='large' pointing secondary
                  stackable>
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
                        <Input id='Search-Bar' icon={<Icon style={{color: "white"}} inverted name='search'/>}
                               iconPosition='left' placeholder='Search Urbanity'
                               action={<Button style={{height: 35 + 'px'}} id='Navbar-Search' name='search'
                                               content='Search' onClick={() => alert("PlaceHolder")}/>}/>
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        {this.renderIdTag('John', 'https://vignette.wikia.nocookie.net/walkingdead/images/5/54/Link.jpg/revision/latest?cb=20140613144939')}
                        <Menu.Item name="blog" content="Blog"/>
                        <Menu.Item name="help" content="Help"/>
                        {this.renderLoginButton()}
                    </Menu.Menu>

                </Container>
            </Menu>
        )
    }
}
