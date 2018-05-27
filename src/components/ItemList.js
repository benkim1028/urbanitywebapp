import React, {Component} from "react";
import * as _ from 'lodash';
import {Card, Container, Grid, Header, Icon, Image, Segment} from "semantic-ui-react";
import Item from "./Item";

export default class ItemList extends Component {
    renderItems(){
        return _.map(data,(data) => <Grid.Column><Item key={data.url} url={data.url} title={data.title} price={data.price} area={data.area} description={data.description} like={data.like}/></Grid.Column>)
    }

    render() {
        return (
            <Segment attached secondary>
                <Container>
                    <Header style={{paddingTop: 20 + "px", paddingBottom: 20 + "px"}} as='h2' content="Top Items on Urbanity"/>
                    <Grid columns={3} stackable>
                        {this.renderItems()}
                    </Grid>
                </Container>
            </Segment>

        )
    }
}

const data = [
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    },
    {
        url: "https://store.storeimages.cdn-apple.com/4980/as-images.apple.com/is/image/AppleInc/aos/published/images/4/2/42/alu/42-alu-silver-sport-white-s1-gallery1?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1512435135125",
        title: "42mm Stainless Apple Watch",
        price: "$500",
        area: "Vancouver, BC",
        description: "Brand new Apple watch with grey nylon bandm 42mm, with accessories and box",
        like: 12
    }
]