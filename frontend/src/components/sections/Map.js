import React from 'react'
import { GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';
import "../../styles/components/map.css"
import MapItemCard from '../MapItemCard';
const containerStyle = {
  width: '100%',
  height: '60vh',
  borderRadius: "15px"
};

const positions = [
    {
        lat: -3.745,
        lng: -38.523
    },
    {
        lat: -3.740,
        lng: -38.520
    },
    {
        lat: -3.750,
        lng: -38.533
    },
    {
        lat: -3.740,
        lng: -38.535
    },
    {
        lat: -3.745,
        lng: -38.527
    }
];
const Map = () => {
    const onClick = () => {
        console.info('I have been clicked!')
      };
      
      const divStyle = {
        background: 'white',
        border: '1px solid #ccc',
        padding: 15
      };
  return (
    <div className='map-section container section'>
    
        <h2 className='title'>Nearby items that you can rent</h2>

    <div className='map-div'>
        <LoadScript
        
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={positions[0]}
          zoom={15}
        >
          { /* Child components, such as markers, info windows, etc. */ 
         
        <>
        <OverlayView
        position={positions[0]}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
       <MapItemCard src={"/images/shini.jpg"}/>
      </OverlayView>
      <OverlayView
        position={positions[1]}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
       <MapItemCard src={"/images/niki.jpg"}/>
      </OverlayView>
      <OverlayView
        position={positions[2]}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
       <MapItemCard src={"/images/niki2.jpg"}/>
      </OverlayView>
      <OverlayView
        position={positions[3]}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
       <MapItemCard src={"/images/speaker.jpg"}/>
      </OverlayView>
      <Marker
          
          position={positions[4]}
          
        />
        </>
          }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
    </div>

  )
}

export default Map