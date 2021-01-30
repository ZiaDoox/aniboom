import React, { useEffect, useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from "react-redux";

const MapContainer = withScriptjs(withGoogleMap((props) => {
    return ( 
        <GoogleMap
            defaultZoom={11}
            center={props.focusLocation}
        >
            <Marker
                position={{
                lat: 40.844,
                lng: 40.844,
                }}
            >
            </Marker>
        </GoogleMap>
    
    ); 
})
);

const mapStateToProps = (state) => {
    //default location
    let focusLocation = {
      lat: 40.844,
      lng: -73.8648,
    };
    
    return {
        focusLocation
  };
}


export default connect(mapStateToProps)(MapContainer);