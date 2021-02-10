import React, { useEffect, useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from "react-redux";

import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
    render() {
        return (
            <div class="container-fluid p-0 pb-3 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.891055335591!2d-6.732928485404678!3d33.9953319806215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7410627280caf%3A0x79a3fa54b059c55e!2sAniboom!5e0!3m2!1sfr!2sma!4v1612953366188!5m2!1sfr!2sma" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>		
            </div>
        
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBEdZQN87aJJFm9CHk1s9-2xPIdB2hEs7E'
})(MapContainer)