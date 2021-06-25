import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Bar, Pie } from 'react-chartjs-2'
import './StatesData.css'
import colors from './colors'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

function StatesData() {
    
// Line, Bubble, Chart, Pie, Radar, Scatter, PolarArea
    const [chart, setChart] = useState([])
    
    const [loading, setLoading] = useState(true)

    const [Dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight

    })

    const [pieBar, setpieBar] = useState(true)

    

    const chartData= async ()=>{

       let locations=[]
       let confirmedCasesIndian=[]
       
    
          await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
            .then(({data}) => {
                
                for(let i=1; i<(data.data.regional).length; i++){

                    let location = data.data.regional[i].loc
                    let confirmedCaseIndian = data.data.regional[i].confirmedCasesIndian
                    locations.push(location)
                    confirmedCasesIndian.push(confirmedCaseIndian)}

                   

                    
                    setChart({
                        labels : locations,
                        datasets : [
                            {
                                label: 'Confirmed Cases',
                                data: confirmedCasesIndian,
                                borderWidth:2,
                                backgroundColor: colors,
                                borderColor: "rgba(0,0,0,0.9)",
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: "miter",
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10
                                
                            }
                        ]
                        
                    })
                    
                
                
            })
            .catch((error)=> console.log(error))

           

        

    }
   

    useEffect(()=>{
        window.addEventListener('resize', ()=>{

                setDimensions({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
                
                
            })
        chartData()
        //setLoading(false)
        setTimeout(() => setLoading(false), 1000)
    },[])

    //console.log(Dimensions)

    const styles={
        chartsfx:{
            width: (Dimensions.width)/1.5,
            height: (Dimensions.height)/1.5
            
        }
        
    }

    const pieHandle=()=>{
        setpieBar(prevCheck=> !prevCheck)
    }
    const barHandle=()=>{
        setpieBar(false)
    }



    return (
    <div className='StatesApp'>


     {loading===false ?(
        <div className='chartStates' style={styles.chartsfx} >
            <div >
            <button className='chartbtns'onClick={()=>pieHandle()}>Bar</button>
            <button className='chartbtns'onClick={()=>barHandle()}>Pie</button>
           
        </div>
    { !pieBar? (
        <Pie
        data={chart}
        width={1000}
        height={500}
        options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
    ): (   <Bar
        data={chart}
        width={1000}
        height={500}
        options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />) } 
    </div>):( <div> 
                    <SkeletonTheme color="lightgray" highlightColor="#999">
                    <div >
                        <Skeleton className='skeletonTimeline' width={500} height={50} delay={0.1} count={5} />
                    </div>
                    </SkeletonTheme></div>)
                }
        </div>

    )
}

export default StatesData
