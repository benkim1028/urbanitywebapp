import React, {Component} from 'react'
import {Button, Dimmer, Image} from 'semantic-ui-react'

export default class DimmerPhoto extends Component {

  isMouseOver() {
    return this.props.isMouseOver;
  }

  dimPhoto() {
    var style = {};
    if (this.isMouseOver()) style = {height: 200 + "px"};
    return style;
  }

  render() {

    const url = this.props.url;

    return (
      <Dimmer.Dimmable dimmed={this.isMouseOver()}>
        <Dimmer active={this.isMouseOver()}>
          <Button id='Text-Button' onClick={() => alert("place holder")} inverted>See Full Description</Button>
        </Dimmer>
        <div style={this.dimPhoto()}>
          <Image src={url}/>
        </div>

      </Dimmer.Dimmable>
    )
  }
}
