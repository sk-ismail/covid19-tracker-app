import React,{useState, useEffect} from 'react'
import './TotalHospital.css'
import axios from 'axios'

const TotalHospitals = () => {

    const [totalBeds, setTotalBeds] = useState([])

    const fetchData= async ()=>{ 
    
        //const distData=[]
    
        await axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
        .then((res) => {
            //setState(res)
            
            
            //distData.push(distsData) 
            setTotalBeds(res.data.data.summary)
            //console.log(res.data.data.regional)
                
            })
        .catch((error)=> console.log(error))}
    
       
        useEffect(() => {
            fetchData()
          }, [])
    return (
        <div className='TotalHospitalApp' >
            <div><h1>Hospitals and Beds availability</h1></div>
            
            <div className="cardsContainer">
                <div className='borderCards'>
             <div className='ruralCard'>
                 <h2>Rural Area</h2>
              <div>Hospitals: <span>{totalBeds.ruralHospitals}</span> </div>
              <div>Beds: <span>{totalBeds.ruralBeds}</span> </div>  
            </div></div>
           <div className='borderCards'><div className='totalCard'>
                 <h2>Total Stats</h2>
              <div>Hospitals: <span>{totalBeds.totalHospitals}</span> </div>
              <div>Beds: <span>{totalBeds.totalBeds}</span> </div>  
            </div></div> 
           <div className='borderCards'><div className='urbanCard123'>
                 <h2>Urban Area</h2>
              <div>Hospitals: <span>{totalBeds.urbanHospitals}</span> </div>
              <div>Beds: <span>{totalBeds.urbanBeds}</span> </div>  
            </div></div> 
            </div>


        </div>
    )
}

export default TotalHospitals
