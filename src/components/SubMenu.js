import React, {Component} from 'react';
import {Button, Container, Header, Menu, Popup, Segment} from "semantic-ui-react";
import CategoryList from "./CategoryList";
import {MapWithHOC} from "./CityMap";
import SortbyList from "./SortbyList";


export default class SubMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "",
            subCategory: "All Categories",
            city: "Elsewhere",
            sortBy: "Popular"
        };
        this.handleSubCategory = this.handleSubCategory.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleSortby = this.handleSortby.bind(this);
    }

    handleActive(menu) {
        if (this.state.active === menu) this.setState({active: ""});
        else this.setState({active: menu})
    }

    handleSubCategory(subCategory) {
        this.setState({subCategory})
    }

    handleCity(city) {
        this.setState({city})
    }

    handleSortby(sortBy){
        this.setState({sortBy})
    }

    isSelected(menu) {
        if (this.state.active === menu)
            return '▴'
        else
            return '▾'
    }
    categorySubmenu() {
        return (
            <Popup
                trigger={
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
                content={<CategoryList subCategory={this.state.subCategory}
                                       changeSubCategory={this.handleSubCategory}/>}
                on='click'
                position='bottom center'
                basic
                style={{minWidth: 60 + "%", left: 20 + "%", right: 20 + "%"}}
            >
            </Popup>
        )
    }

    citySubmenu() {
        return (
            <Popup
                trigger={
                    <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}}
                               onClick={() => this.handleActive("city")}>
                        <Header textAlign='left' as='h4'>
                            <Header.Content id='Text'>
                                City {this.isSelected("city")}
                            </Header.Content>
                            <Header.Subheader>
                                {this.state.city}
                            </Header.Subheader>
                        </Header>
                    </Menu.Item>
                }
                content={
                    <MapWithHOC
                        changeCity={this.handleCity}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5eD_wWeBBi44frbGcMy6B6rzZYR96CUY&libraries=geometry,drawing,places"
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
        )
    }

    sortbySubmenu() {
        return (
            <Popup
                trigger={
                    <Menu.Item style={{marginLeft: 5 + "%", marginRight: 5 + "%"}}
                               onClick={() => this.handleActive("sortby")}>
                        <Header textAlign='left' as='h4'>
                            <Header.Content id='Text'>
                                Sort By {this.isSelected("sortby")}
                            </Header.Content>
                            <Header.Subheader>
                                {this.state.sortBy}
                            </Header.Subheader>
                        </Header>
                    </Menu.Item>
                }
                content={<SortbyList changeSortby={this.handleSortby}/>}
                on='click'
                position='bottom center'
                basic
            >
            </Popup>
        )
    }

    render() {
        return (
            <div>
                <Menu borderless stackable attached={true} id="Shadow-Box">
                    <Container style={{justifyContent: 'center'}} textAlign='center'>
                        {this.categorySubmenu()}
                        {this.citySubmenu()}
                        {this.sortbySubmenu()}
                    </Container>
                </Menu>
            </div>
        )
    }
}