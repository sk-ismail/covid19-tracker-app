import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Bar, Line, Bubble, Chart, Pie, Radar, Scatter, PolarArea } from 'react-chartjs-2'
import './StatesData.css'
import colors from './colors'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

function StatesData() {

    const [chart, setChart] = useState([])
    
    const [loading, setLoading] = useState(true)


    const chartData=()=>{

       let locations=[]
       let confirmedCasesIndian=[]
       
    
           axios.get('https://api.rootnet.in/covid19-in/stats/latest')
            .then(({data}) => {
                
                for(let i=0; i<(data.data.regional).length; i++){

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
        chartData()
        //setLoading(false)
        setTimeout(() => setLoading(false), 1000)
    },[])

    return (
    <div className='StatesApp'>

     {loading===false ?(
        <div className='chartStates'>
     <Bar
	data={chart}
    width={1000}
    height={500}
	options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
	/>
    </div>):( <div> 
                    <SkeletonTheme color="lightgray" highlightColor="#999">
                    <div >
                        <Skeleton className='skeletonTimeline' width={500} height={50} delay={0.1} count={2} />
                    </div>
                    </SkeletonTheme></div>)
                }
        </div>

    )
}

export default StatesData
