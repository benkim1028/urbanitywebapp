import SearchBox from "react-google-maps/lib/components/places/SearchBox"
import * as _ from 'lodash'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

export class CityMap extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const refs = {};

        this.setState({
            bounds: null,
            center: {
                lat: 49.2577143, lng: -123.1939434
            },
            markers: [],
            onMapMounted: ref => {
                refs.map = ref;
            },
            onBoundsChanged: () => {
                this.setState({
                    bounds: refs.map.getBounds(),
                    center: refs.map.getCenter(),
                })
            },
            onSearchBoxMounted: ref => {
                refs.searchBox = ref;
            },
            onPlacesChanged: () => {
                const places = refs.searchBox.getPlaces();
                const bounds = new google.maps.LatLngBounds();
                if(places[0] !== undefined)
                    this.props.changeCity(places[0].name + ", " + places[0]["formatted_address"].split(',')[1]);
                places.forEach(place => {
                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport)
                    } else {
                        bounds.extend(place.geometry.location)
                    }
                });
                const nextMarkers = places.map(place => ({
                    position: place.geometry.location,
                }));
                const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

                this.setState({
                    center: nextCenter,
                    markers: nextMarkers,
                });
                // refs.map.fitBounds(bounds);
            },
        })
    }

    render() {
        const props = this.state;
        return (
            <GoogleMap
                ref={props.onMapMounted}
                defaultZoom={12}
                center={props.center}
                onBoundsChanged={props.onBoundsChanged}
            >
                <SearchBox
                    ref={props.onSearchBoxMounted}
                    bounds={props.bounds}
                    controlPosition={google.maps.ControlPosition.TOP_LEFT}
                    onPlacesChanged={props.onPlacesChanged}
                >
                    <Input
                        placeholder="Search City"
                        id='Search-Map'
                    />
                </SearchBox>
                {props.markers.map((marker, index) =>
                    <Marker key={index} position={marker.position}/>
                )}
            </GoogleMap>
        )
    }
}

export const MapWithHOC = withScriptjs(withGoogleMap(CityMap));