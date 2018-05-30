import React, {Component} from 'react'
import {Button, Dropdown} from 'semantic-ui-react'


export default class ItemDropdown extends Component{
    render(){
        const trigger = (
            <Button style={{backgroundColor: "#ffffff"}} id='Text' icon='ellipsis horizontal' />
        );

        const options = [
            { key: 'report', text: 'Report Item', onClick: (e) => {console.log("item Clicked"); this.props.handleOpen()}},
        ];

        return(
            <Dropdown trigger={trigger} options={options} pointing='bottom right' icon={null}/>
        );
    }
}
