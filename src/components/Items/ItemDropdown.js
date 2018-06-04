import React, {Component} from 'react'
import {Button, Dropdown} from 'semantic-ui-react'


export default class ItemDropdown extends Component {

  triggerButton() {
    <Button style={{backgroundColor: "#ffffff"}} id='Text' icon='ellipsis horizontal'/>
  }

  dropdownElements() {
    return [
      {
        key: 'report', text: 'Report Item', onClick: (e) => {
          this.props.handleOpen()
        }
      },
    ]
  }

  render() {
    return (
      <Dropdown trigger={this.triggerButton()} options={this.dropdownElements()} pointing='bottom right' icon={null}/>
    );
  }
}
