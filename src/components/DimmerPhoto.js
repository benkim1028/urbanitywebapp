import React, {Component} from 'react'
import {Button, Dimmer, Image} from 'semantic-ui-react'

export default class DimmerPhoto extends Component {


    render() {
        const active = this.props.isMouseOver;
        var style;
        if (active) {
            style = {height: 200 + "px"}
        } else
            style = {}
        return (

            <Dimmer.Dimmable
                dimmed={active}
            >
                <Dimmer active={active}>
                    <Button id='Text-Button' inverted>See Full Description</Button>
                </Dimmer>
                <div style={style}>
                    <Image src={this.props.url}/>
                </div>

            </Dimmer.Dimmable>
        )
    }
}
