import React, {Component} from 'react';
import {Button, Container, Header, Menu, Segment} from "semantic-ui-react";

export default class SubMenu extends Component {
    render() {
        return (
            <Menu borderless stackable attached={true} id="Shadow-Box">
                <Container style={{justifyContent: 'center'}} textAlign='center'>
                    <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}} onClick={() => alert("PlaceHolder")}>
                        <Header textAlign='left' as='h4'>
                            <Header.Content id='Text'>
                                Category ▾
                            </Header.Content>
                            <Header.Subheader>
                                All Categories
                            </Header.Subheader>
                        </Header>
                    </Menu.Item>
                    <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}} onClick={() => alert("PlaceHolder")}>
                        <Header textAlign='left' as='h4' >
                            <Header.Content id='Text'>
                                City ▾
                            </Header.Content>
                            <Header.Subheader>
                                Elsewhere
                            </Header.Subheader>
                        </Header>
                    </Menu.Item>
                    <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}} onClick={() => alert("PlaceHolder")}>
                        <Header textAlign='left' as='h4'>
                            <Header.Content id='Text'>
                                Sort By ▾
                            </Header.Content>
                            <Header.Subheader>
                                Popularity
                            </Header.Subheader>
                        </Header>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}