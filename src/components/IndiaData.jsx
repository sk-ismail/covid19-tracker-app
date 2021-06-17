import React, { useEffect, useState} from 'react'
import './IndiaData.css'
import axios from 'axios'
import india from '../images/india.png'
function IndiaData() {

    const [state, setState] = useState([])
   
   const fetchData= async ()=>{ 
    
    await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
    .then(({data}) => {
        setState(data.data.summary)
            console.log(data.data)})
    .catch((error)=> console.log(error))}

    useEffect(() => {
        fetchData()
      }, [])

    return (
        <div className='IndiaApp'>
            <div className='indiaData'>
           <img className='indiaIcon' alt='india' src={india}></img>
           <div className='tIndiaCases'>
           <div className='cardIndia'><div className='datatxt'><b>Total Cases:</b>{state.total}</div></div>
          <div className='cardIndia'><div className='datatxt'><b>Recovered:</b>{state.discharged}</div></div>
           </div>
           <div className='cardIndia'><div className='deathtxt'><b>Deaths:</b><span className='deathIndia'>{state.deaths}</span></div></div>
           </div>
        </div>
    )
}

export default IndiaData
