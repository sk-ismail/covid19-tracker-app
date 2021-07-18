import React, { useEffect, useState} from 'react'
import './IndiaData.css'
import axios from 'axios'
import india from '../images/india.png'
function IndiaData() {

    const [state, setState] = useState([])
   
   const fetchData= async ()=>{ 
    
    await axios.get('https://disease.sh/v3/covid-19/countries/india?strict=true')
    .then((res) => {
        setState(res.data)
            console.log(res)
        })
    .catch((error)=> console.log(error))}

    useEffect(() => {
        fetchData()
      }, [])

    return (
        <div className='IndiaApp'>
            <div className='indiaData'>
           <img className='indiaIcon' alt='india' src={india}></img>
           <div className='tIndiaCases'>
           <div className='cardIndia'><div className='datatxt'><b>Total Cases:</b><span className='totalIndia'>{state.cases}</span></div></div>
          <div className='cardIndia'><div className='datatxt'><b>Recovered:</b><span className='recoveredIndia'>{state.recovered}</span></div></div>
           </div>
           <div className='cardIndia'><div className='deathtxt'><b>Deaths:</b><span className='deathIndia'>{state.deaths}</span></div></div>
           <div className='tIndiaCases'>
           <div className='cardIndia'><div className='datatxt'><b>Today Cases:</b><span className='totalIndia'>{state.todayCases}</span></div></div>
          <div className='cardIndia'><div className='datatxt'><b>Today Recovered:</b><span className='recoveredIndia'>{state.todayRecovered}</span></div></div>
           </div>
           </div>
           
        </div>
    )
}

export default IndiaData
