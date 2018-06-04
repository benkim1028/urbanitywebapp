import React, {Component} from 'react';
import {Feed, Image, Segment} from "semantic-ui-react";

export default class ChatItem extends Component {
  getUserName() {
    return this.props.username;
  }

  getImageURL() {
    return this.props.url;
  }

  getLastMessage() {
    return this.props.lastmessage;
  }

  getDate() {
    return this.props.date;
  }

  render() {
    return (
      <Segment>
        <Feed>
          <Feed.Event>
            <Feed.Label
              style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <Image circular
                     src={this.getImageURL()}/>
            </Feed.Label>
            <Feed.Content>
              <Feed.User as='span' content={this.getUserName()}/>
              <Feed.Summary content={this.getLastMessage()}/>
              <Feed.Date content={this.getDate()}/>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Segment>
    )
  }
}
