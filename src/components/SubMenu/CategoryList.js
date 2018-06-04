import * as _ from "lodash"
import React, {Component} from 'react'
import {Form, Grid, Radio, Segment} from "semantic-ui-react";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.subCategory
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, {value}) {
    this.props.changeSubCategory(value);
    this.setState({category: value});
  }

  renderRadioButtons() {
    return (
      _.map(list, (category) =>
        <Grid.Column>
          <Form.Field key={category}>
            <Radio
              label={category}
              name='radioGroup'
              value={category}
              checked={this.state.category === category}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Grid.Column>)
    )
  }

  render() {
    return (
      <Segment basic>
        <Form>
          <Grid columns={3} stackable>
            {this.renderRadioButtons()}
          </Grid>
        </Form>
      </Segment>
    )
  }
}

const list = ["All Categories", "Electronics & Gadget", "Photography", "Ladies' Fashion", "Gentlemen's Fashion", "Video Gaming/Hobby", "Sporting", "Furniture & Appliances", "Parents, Babies & Kids", "Cars & Motorbikes", "Books & Stationary", "Tickets", "Pet ItemList", "Vintage, Antiques & Collectibles", "Gardening & Plants", "Property", "Others"];

