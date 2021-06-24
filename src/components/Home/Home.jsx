import React from 'react'
import './Home.css'
//import Navbar from '../Navbar'
import MainData from '../MainData'
import IndiaData from '../IndiaData'
import StatesData from '../StatesData'
import TimelineData from '../TimelineData'
import DistrictData from '../DistrictData'


const Home = () => {
    return (
        <div>
       
     <MainData/>
     <IndiaData/>
     <StatesData/>
     <TimelineData/>
     <DistrictData/>
        </div>
    )
}

export default Home
