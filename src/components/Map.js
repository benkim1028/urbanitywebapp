import SearchBox from "react-google-maps/lib/components/places/SearchBox"
import * as _ from 'lodash'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

export class Map extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const refs = {}

        this.setState({
            bounds: null,
            center: {
                lat: 41.9, lng: -87.624
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
                this.props.changePlace(places[0].name + ", " + places[0]["formatted_address"].split(',')[1]);
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
        const props = this.state
        return (
            <GoogleMap
                ref={props.onMapMounted}
                defaultZoom={15}
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
                        placeholder="Search..."
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            marginTop: `27px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </SearchBox>
                {props.markers.map((marker, index) =>
                    <Marker key={index} position={marker.position}/>
                )}
            </GoogleMap>
        )
    }
}

export const MapWithHOC = withScriptjs(withGoogleMap(Map));