import React, {Component} from 'react'
import {Button, Container, Header, Icon, Image, Modal, Segment} from 'semantic-ui-react'
import ItemDropdown from "./ItemDropdown";

export default class ReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({modalOpen: true})
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  render() {
    return (
      <Modal
        trigger={<ItemDropdown handleOpen={this.handleOpen}/>}
        open={this.state.modalOpen}
        closeOnDocumentClick={false}
        onClose={this.handleClose}
        size='tiny'
      >
        <Header style={{backgroundColor: "#ffa31d", color: "#ffffff", textAlign: 'center'}}
                content='Report Sent'/>
        <Modal.Content>
          <Container style={{paddingLeft: 10 + '%', paddingRight: 10 + '%', height: 100 + 'px'}} textAlign='center'>
            <p>Thank you for taking the time to report this item. We have been notified and will investigate the
              item.</p>
          </Container>
          <Container textAlign='center'>
            <Button id='Modal-Button' onClick={this.handleClose}>
              Close
            </Button>
          </Container>
        </Modal.Content>
      </Modal>
    )
  }
}
