import React from 'react'
import NaverMap from 'react-naver-map'

class Map extends React.Component {
  clientId = 'LUIPzqCRXRTILrs7cQxw' 

  state = {
    lat :37.4982445,
    lng : 127.0343027
  }
  
  onMapClick(event){
    console.log('on Map Click')
    console.log(event)
  }
  onInit(map, naver){
    console.log('onInit')
    console.log(map)
    console.log(naver)
  }
  onBoundChange(bounds){
    console.log('bounds')
    console.log(bounds)
  }

  render() {
    return (
      
      <NaverMap
        clientId = {this.clientId}
        style={{width:'500px', height:'500px'}}
        initialPosition={{lat: this.state.lat, lng: this.state.lng}}
        initialZoom={12}

        // onInit={(map, naver) => {this.onInit(map,naver)}}  // map: naver map object, naver: window.naver object
        // onBoundChange={(bounds) => {this.onBoundChange(bounds)}}  // bounds: naver.maps.LatLngBounds
        // onMapClick={(event) => {this.onMapClick(event)}}  // event: PointerEvent 
        />
    
    )
  }
}
 

export default Map
