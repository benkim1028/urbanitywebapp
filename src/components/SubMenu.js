import React, {Component} from 'react';
import {Button, Container, Header, Menu, Popup, Segment} from "semantic-ui-react";
import Browse from "./Browse";
import {MapWithHOC} from "./Map";


export default class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "",
            subCategory: "All Categories",
            place: "Elsewhere"
        }
        this.handleSubCategory = this.handleSubCategory.bind(this);
        this.handlePlace = this.handlePlace.bind(this);
    }

    handleActive(menu) {
        if (this.state.active === menu) this.setState({active: ""});
        else this.setState({active: menu})
    }

    handleSubCategory(subCategory) {
        this.setState({subCategory})
    }

    handlePlace(place) {
        this.setState({place})
    }

    isSelected(menu) {
        if (this.state.active === menu)
            return '▴'
        else
            return '▾'
    }

    render() {
        return (
            <div>
                <Menu borderless stackable attached={true} id="Shadow-Box">
                    <Container style={{justifyContent: 'center'}} textAlign='center'>
                        <Popup trigger={
                            <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}}
                                       onClick={() => this.handleActive("category")}>
                                <Header textAlign='left' as='h4'>
                                    <Header.Content id='Text'>
                                        Category {this.isSelected("category")}
                                    </Header.Content>
                                    <Header.Subheader>
                                        {this.state.subCategory}
                                    </Header.Subheader>
                                </Header>
                            </Menu.Item>
                        }
                               content={<Browse subCategory={this.state.subCategory}
                                                changeSubCategory={this.handleSubCategory}/>}
                               on='click'
                               position='bottom center'
                               basic
                               style={{minWidth: 60 + "%", left: 20 + "%", right: 20 + "%"}}
                        >
                        </Popup>
                        <Popup trigger={
                            <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}}
                                       onClick={() => this.handleActive("city")}>
                                <Header textAlign='left' as='h4'>
                                    <Header.Content id='Text'>
                                        City {this.isSelected("city")}
                                    </Header.Content>
                                    <Header.Subheader>
                                        {this.state.place}
                                    </Header.Subheader>
                                </Header>
                            </Menu.Item>
                        }
                               content={<MapWithHOC
                                   changePlace={this.handlePlace}
                                   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                                   loadingElement={<div style={{height: `100%`}}/>}
                                   containerElement={<div style={{height: `400px`}}/>}
                                   mapElement={<div style={{height: `100%`}}/>}
                               />}
                               on='click'
                               position='bottom center'
                               basic
                               style={{minWidth: 60 + "%", left: 20 + "%", right: 20 + "%"}}

                        >

                        </Popup>
                        <Popup trigger={
                            <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}}
                                       onClick={() => this.handleActive("sortby")}>
                                <Header textAlign='left' as='h4'>
                                    <Header.Content id='Text'>
                                        Sort By {this.isSelected("sortby")}
                                    </Header.Content>
                                    <Header.Subheader>
                                        Popularity
                                    </Header.Subheader>
                                </Header>
                            </Menu.Item>
                        }

                               on='click'
                               position='bottom center'
                               basic
                        >
                        </Popup>
                    </Container>
                </Menu>
            </div>
        )
    }
}