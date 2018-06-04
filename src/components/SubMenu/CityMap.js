import SearchBox from "react-google-maps/lib/components/places/SearchBox"
import * as _ from 'lodash'
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import React, {Component} from 'react';
import {Input} from "semantic-ui-react";

export class CityMap extends Component {

  constructor(props) {
    var refs = {};
    super(props);
    var citymap = this;
    this.state = {
      bounds: null,
      center: {
        lat: 49.2577143, lng: -123.1939434
      },
      markers: [],
      onMapMounted: (ref) => {
        refs.map = ref;
      },
      onSearchBoxMounted: (ref) => {
        refs.searchBox = ref;
      },
      onBoundsChanged() {
        citymap.setState({
          bounds: refs.map.getBounds(),
          center: refs.map.getCenter(),
        })
      },
      onPlacesChanged() {
        const places = refs.searchBox.getPlaces();
        const bounds = new google.maps.LatLngBounds();
        console.log(places);
        if (places[0] !== undefined && places[0]["formatted_address"] !== undefined)
          citymap.props.changeCity(places[0].name + ", " + places[0]["formatted_address"].split(',')[1]);
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
        const nextCenter = _.get(nextMarkers, '0.position', citymap.state.center);

        citymap.setState({
          center: nextCenter,
          markers: nextMarkers,
        });
      }
    };
  }

  render() {
    return (
      <GoogleMap
        ref={this.state.onMapMounted}
        defaultZoom={12}
        center={this.state.center}
        onBoundsChanged={this.state.onBoundsChanged}
      >
        <SearchBox
          ref={this.state.onSearchBoxMounted}
          bounds={this.state.bounds}
          controlPosition={google.maps.ControlPosition.TOP_CENTER}
          onPlacesChanged={this.state.onPlacesChanged}
        >
          <Input
            placeholder="Search City"
            id='Search-Map'
          />
        </SearchBox>
        {this.state.markers.map((marker, index) =>
          <Marker key={index} position={marker.position}/>
        )}
      </GoogleMap>
    )
  }
}

export const MapWithHOC = withScriptjs(withGoogleMap(CityMap));