import React, {Component} from 'react'
import {Form, Grid, Radio, Segment} from "semantic-ui-react";

export default class SortbyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: this.props.sortBy
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, {value}) {
    this.props.changeSortby(value);
    this.setState({sortBy: value});
  }

  renderSortby(value) {
    return (
      <Grid.Column>
        <Form.Field key={value}>
          <Radio
            label={value}
            name='radioGroup'
            value={value}
            checked={this.state.sortBy === value}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Grid.Column>
    )
  }

  render() {
    return (
      <Segment basic>
        <Form>
          <Grid columns={1} stackable>
            {this.renderSortby("Popular")}
            {this.renderSortby("Latest")}
            {this.renderSortby("Price: Low to High")}
            {this.renderSortby("Price: High to Low")}
          </Grid>
        </Form>
      </Segment>
    )
  }
}

