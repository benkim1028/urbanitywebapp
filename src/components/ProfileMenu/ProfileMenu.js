import React, {Component} from 'react';
import {Button, Container, Header, Menu, Popup, Segment} from "semantic-ui-react";
import CategoryList from "../SubMenu/CategoryList";
import {MapWithHOC} from "../SubMenu/CityMap";
import SortbyList from "../SubMenu/SortbyList";

export default class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  renderIdTag(name, imageURL) {
    if (this.state.authenticated)
      return (
        <Menu.Item style={{paddingTop: 3 + "px", paddingBottom: 3 + "px"}} name="id" content={name}
                   icon={<Image circular id='Id-Tag'
                                src={imageURL}/>}/>
      )
  }


  render() {
    return (
      <div>
        <Menu borderless stackable attached={true} id="Shadow-Box">
          <Container style={{justifyContent: 'center'}} textAlign='center'>
            <Header textAlign='left' as='h4'>
              <Header.Content id='Text'>
                Sort By {this.state.active !== "" && this.isSelected("sortby") ? '▴' : '▾'}
              </Header.Content>
              <Header.Subheader>
                {this.state.sortBy}
              </Header.Subheader>
            </Header>
          </Container>
        </Menu>
      </div>
    )
  }
}