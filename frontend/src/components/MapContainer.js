import React, { useEffect, useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from "react-redux";

import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>
 
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBEdZQN87aJJFm9CHk1s9-2xPIdB2hEs7E'
})(MapContainer)