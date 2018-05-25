import React, {Component} from "react";
import {Button, Card, Container, Grid, Header, Icon, Image, Segment} from "semantic-ui-react";
import DimmerPhoto from "./DimmerPhoto";

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isMouseOver: false,
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isMouseOver: !state.isMouseOver,
        };
    }


    hiddenElement() {
        return (
            <Container style={{paddingTop: 5 + "px",}}>
                <p>{this.props.description}</p>
                <Card.Content style={{fontSize: 20 + "px", fontWeight: 'bold'}} extra>
                    <Container style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <Icon id='Text' name='empty heart'/>
                            {this.props.like}
                        </div>
                        <a>
                            <Icon id='Text' name='ellipsis horizontal' onClick={()=>alert("Placeholder")}/>
                        </a>
                    </Container>
                </Card.Content>
            </Container>

        )
    }

    render() {
        return (
            <Card onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                <DimmerPhoto isMouseOver={this.state.isMouseOver} url={this.props.url}/>
                <Card.Content>
                    <Card.Header>
                        {this.props.title} <Icon id='Text' style={{fontSize: 18 + "px"}} as='i' name='angle right'
                                                 size='small'/>
                    </Card.Header>
                    <Container style={{display: 'flex', justifyContent: 'space-between', paddingTop: 5 + "px"}}>
                        <p>{this.props.price}</p>
                        <p>{this.props.area}</p>
                    </Container>
                    {this.state.isMouseOver && this.hiddenElement()}
                </Card.Content>
            </Card>

        )
    }
}