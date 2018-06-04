import React, {Component} from 'react';
import {Button, Card, Container, Grid, Header, Icon, Image, Input, Segment} from "semantic-ui-react";
import MainPage from "../MainPage";
import * as _ from 'lodash';

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: data,
      newMessage: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.constructMessage = this.constructMessage.bind(this);
  }

  getImageURL() {
    return 'https://previews.123rf.com/images/honzahruby/honzahruby1404/honzahruby140400169/27595592-vector-flat-design-modern-url-icon-wit-hand-clicking-on-website-link-webdesigner-teplate-isolated-on.jpg';
  }

  renderArrow() {
    return (
      <Icon style={{fontSize: 14 + "px", color: '#ffa31d'}} as='i' name='angle right'
            size='small'/>
    )
  }

  renderImage() {
    return (
      <Image style={{paddingTop: 14 + 'px', margin: 0, width: 77 + 'px', height: 77 + 'px'}} floated='left'
             size='tiny'
             src="https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125"/>
    )
  }

  renderOffer() {
    return (
      <Grid>
        <Grid.Row style={{paddingBottom: 0 + 'px'}}>
          <Grid.Column floated='left' width={5}>
            <Header as='h4' content='Original Offer'/>
          </Grid.Column>
          <Grid.Column floated='right' width={4}>
            <a style={{color: '#ffa31d'}}>View Items</a>{this.renderArrow()}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{paddingTop: 0 + 'px'}}>
          <Grid.Column floated='left' width={5}>
            Item Price: <b>$50 CAD</b><br/>
            Total Price: <b>$50 CAD</b>
          </Grid.Column>
          <Grid.Column compact floated='left' width={11}>
            Preferred Delivery Method:<br/>
            <b>MEET UP + CASH</b>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  renderChatBoxMenu() {
    return (
      <Segment style={{
        backgroundColor: '#ffa31d',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0
      }}>
        <div>
          <Card.Header style={{color: '#ffffff'}} content={<b>Olivia Bradson</b>}/>
          <Card.Meta style={{color: '#ffffff'}} content="Sony Extra Bass Headphones"/>
        </div>
        <Button style={{
          height: 35 + 'px',
          color: '#ffffff',
          borderRadius: 5 + 'px',
          backgroundColor: '#ffa31d',
          border: 'solid ' + 1 + 'px ' + '#ffffff',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px 0px'
        }} name='MakeOffer' content='Make Offer' onClick={() => alert("PlaceHolder")}/>
      </Segment>
    )
  }

  renderInputBar() {
    return (
      <Container style={{display: 'flex', marginTop: '10px'}}>
        <Button icon style={{padding: 0, margin: 0, backgroundColor: 'transparent'}}><Icon
          style={{color: '#ffa31d', fontSize: 40 + 'px'}} name='camera' size='huge'
          onClick={() => alert('placeholder')}/></Button>
        <form onSubmit={this.constructMessage}
              style={{width: 92 + '%', paddingLeft: 10 + 'px', display: 'inline-block'}}>
          <input style={{
            width: 87 + '%',
            height: 40 + 'px',
            border: 1 + 'px' + ' ' + 'solid',
            borderColor: '#ffa31d',
            borderRadius: 5 + 'px'
          }}
                 value={this.state.newMessage}
                 autoComplete='off'
                 onChange={this.handleInputChange}></input>
          <Button style={{
            backgroundColor: 'transparent',
            color: '#ffa31d',
            fontSize: 20 + 'px',
            padding: '0 0 0 15px'
          }}>Send</Button>
        </form>
      </Container>
    )
  }

  constructMessage(e) {
    var messages = this.state.messages;
    var length = messages.length;
    messages.push({uid: length, userid: 'me', message: this.state.newMessage});
    this.setState({
      messages: messages,
      newMessage: ''
    });
    e.preventDefault();
  }


  handleInputChange(event) {
    this.setState({newMessage: event.target.value});
    console.log(this.state.newMessage);
  }

  renderMessages() {
    return (
      _.map(this.state.messages, (data) => {
        if (data.userid === 'me')
          return this.renderMyMessage(data);
        else
          return this.renderOtherMessage(data);
      })
    )
  }

  renderMyMessage(data) {
    return (
      <Container>
        <Segment
          style={{
            backgroundColor: '#c3c3c3',
            color: '#707070',
            fontWeight: 'normal',
            marginTop: '5px',
            marginBottom: '5px',
          }}
          key={data.uid} floated='right' compact content={data.message}/>
      </Container>
    )
  }

  renderOtherMessage(data) {
    return (
      <Container style={{display: 'flex'}}>
        <Image style={{
          width: '35px',
          height: '35px',
          marginTop: 'auto',
          marginBottom: 'auto',
          marginRight: '10px'
        }} circular
               src={this.getImageURL()}/>
        <Segment style={{color: '#707070', marginTop: '5px', marginBottom: '5px'}} key={data.uid}
                 floated='left' compact content={data.message}/>
      </Container>
    )
  }


  render() {
    return (
      <Card style={{minWidth: 100 + "%"}}>
        {this.renderChatBoxMenu()}
        <Segment attached>
          <Container>
            {this.renderImage()}
            {this.renderOffer()}
          </Container>
        </Segment>
        <Segment style={{backgroundColor: '#f9f9f9', minHeight: '70%', display: 'flex', flexDirection: 'column'}}
                 attached>
          {this.renderMessages()}
          {this.renderInputBar()}
        </Segment>
      </Card>
    )
  }
}
const data = [
  {
    uid: 1,
    userid: 'me',
    message: 'Hi, i am interested. Is it still available?'
  },
  {
    uid: 2,
    userid: 'Olivia Bradson',
    message: 'Hi, it is still available. Did you want to see more photos?'
  },
  {
    uid: 3,
    userid: 'me',
    message: 'I just sent you an offer. it if works for you, please accept'
  },
  {
    uid: 4,
    userid: 'Olivia Bradson',
    message: 'Alright!'
  },
]