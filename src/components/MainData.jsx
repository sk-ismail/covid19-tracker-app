import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './MainData.css'
//import { Button } from '@material-ui/core'

//import { PieChart } from 'react-minimal-pie-chart'



function MainData() {


    const [state, setState] = useState([])

    
    const fetchData= async ()=>{

        await axios.get('https://disease.sh/v3/covid-19/all')
        .then(({data})=>{ 
          setState(data) 
          //console.log(data) 
        
        })
        .catch((error)=>{ console.log(error)})
        
      }
    
      useEffect(() => {
        fetchData()
      }, [])

    return (
        <div className='app'>
            
            <div className='wdtxt'>World Data</div>
            <div className='worldData'>
                 <div className='totals'>
                  <div className="card">
                      <div className="cardContainer">
                        <b>Total Cases: </b>               
                            {state.cases}
                      </div>
                  </div>
                    
                    <div className="card">
                    <div className="cardContainer">
                    <b>Total Deaths: </b>               
                          <span className='death'>{state.deaths}</span>    
                    </div>
                  </div>

                  </div>
                  
               <div className='totals2'>

                  <div className="card">
                    <div className="cardContainer">
                    <b>Active: </b>               
                          <span className='active'>{state.active}</span>    
                    </div>
                  </div>

                  <div className="card">
                    <div className="cardContainer">
                    <b>Critical: </b>               
                          <span className='death'>{state.critical}</span>    
                    </div>
                  </div>

               </div>

                  <div className='totals3'>
                  <div className="card">
                    <div className="cardContainer">
                    <b>Today Cases: </b>               
                          <span className='tCases'>{state.todayCases}</span>    
                    </div>
                  </div>
                  <div className="card">
                    <div className="cardContainer">
                    <b>Today Deaths: </b>               
                          <span className='death'>{state.todayDeaths}</span>    
                    </div>
                  </div>
                  </div>

                  <div className='totals3'>
                  <div className="card">
                    <div className="cardContainer">
                    <b>Total Recovered: </b>               
                          <span className='tCases'>{state.recovered}</span>    
                    </div>
                  </div>
                  <div className="card">
                    <div className="cardContainer">
                    <b>Today Recovered: </b>               
                          <span className='death'>{state.todayRecovered}</span>    
                    </div>
                  </div>
                  </div>
             
                  </div>
             
        </div>
    )
}

export default MainData
