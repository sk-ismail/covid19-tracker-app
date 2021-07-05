import axios from 'axios'
import './CovidTests.css'
import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL,{ Marker, Popup} from 'react-map-gl';
import {Room } from '@material-ui/icons'
const CovidTests = () => {
    const [currentplace, setCurrentplace] = useState([]);
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 17.6868,
        longitude: 83.2185,
        zoom: 2
      });
      const [pin, setpin] = useState([])
    useEffect(() => {
         const fetchData=async ()=>{
                     await axios.get('https://disease.sh/v3/covid-19/countries')
                     .then((res)=>{
                         setpin(res.data)
                           console.log(res.data)
                           for(let i=0; i<(res.data).length; i++){
                               console.log(res.data[i].countryInfo._id)
                           }

                     })
                     .catch((err)=>{console.log(err)})

         }
         fetchData()
    }, [])

    const handleRoomClick=(id, lat, long)=>{
        setCurrentplace(id)
        setViewport({...viewport, latitude: lat, longitude: long})
      }
    return (
        <div>
         <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle='mapbox://styles/sk-ismail/ckqjtp95c0ls317mkbqhic7cz'
      mapboxApiAccessToken='pk.eyJ1Ijoic2staXNtYWlsIiwiYSI6ImNrcWpyY2FjeDAxeTcyd3BtMnNoMTJidGgifQ.nKSUusfBsmDiVaPASKUcYg'
      transitionDuration={200}
    >
{pin.map((p, key)=>(
       <>
      <Marker
      latitude={p.countryInfo.lat}
      longitude={p.countryInfo.long}
      offsetLeft={-viewport.zoom*3.5}
      offsetTop={-viewport.zoom*7}
      key={p.countryInfo._id}
          >
  
  <Room onClick={()=>handleRoomClick(p.updated, p.countryInfo.lat, p.countryInfo.long)} style={{ fontSize: viewport.zoom*7 , color: p._id === currentplace? "red" : "white" , cursor: "pointer"}}/>

</Marker>
{ p.updated === currentplace && (<Popup
    latitude={p.countryInfo.lat}
    longitude={p.countryInfo.long}
    closeButton={true}
    closeOnClick={false}
    onClose={() => setCurrentplace(null)}
    className="popupCard1"
    anchor="top" >
    <div className='popupCard'>
        <div>
            {p.country}
        </div>
      </div>
    
  </Popup>)}
</>
))}

    </ReactMapGL>
        </div>
    )
}

export default CovidTests
