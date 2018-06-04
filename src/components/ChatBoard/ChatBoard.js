import React, {Component} from "react";
import {Card, Container, Feed, Grid, Header, Image, Segment} from "semantic-ui-react"
import * as _ from 'lodash';
import ChatItem from "./ChatItem";
import ChatBox from "./ChatBox";

export default class ChatBoard extends Component {
  constructor(props) {
    super(props);
  }

  renderChatItems() {
    return (
      <Segment.Group>
        {_.map(data, (data) => <ChatItem url={data.url}
                                         lastmessage={data.lastmessage}
                                         date={data.date}
                                         username={data.username}
                                         onClick={() => alert('placeholder')}/>)}
      </Segment.Group>)
  }

  render() {
    return (
      <Segment style={{height: '100%'}} attached secondary>
        <Container>
          <Header style={{paddingTop: 20 + "px", paddingBottom: 20 + "px"}} as='h2' content="Chat"/>
          <Grid columns={2}>
            <Grid.Column width={6}>
              {this.renderChatItems()}
            </Grid.Column>

            <Grid.Column width={10} style={{height: '70%'}}>
              <ChatBox/>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

const data = [
  {
    url: 'https://previews.123rf.com/images/honzahruby/honzahruby1404/honzahruby140400169/27595592-vector-flat-design-modern-url-icon-wit-hand-clicking-on-website-link-webdesigner-teplate-isolated-on.jpg',
    lastmessage: "Test Message",
    date: '1 day ago',
    username: 'Ben Kim'
  },
  {
    url: 'https://previews.123rf.com/images/honzahruby/honzahruby1404/honzahruby140400169/27595592-vector-flat-design-modern-url-icon-wit-hand-clicking-on-website-link-webdesigner-teplate-isolated-on.jpg',
    lastmessage: "Test Message",
    date: '1 day ago',
    username: 'Clara Kim'
  },
  {
    url: 'https://previews.123rf.com/images/honzahruby/honzahruby1404/honzahruby140400169/27595592-vector-flat-design-modern-url-icon-wit-hand-clicking-on-website-link-webdesigner-teplate-isolated-on.jpg',
    lastmessage: "Test Message",
    date: '1 day ago',
    username: 'John Bang'
  },
  {
    url: 'https://previews.123rf.com/images/honzahruby/honzahruby1404/honzahruby140400169/27595592-vector-flat-design-modern-url-icon-wit-hand-clicking-on-website-link-webdesigner-teplate-isolated-on.jpg',
    lastmessage: "Test Message",
    date: '1 day ago',
    username: 'David Park'
  },
]