import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './Timeline.css'
import { Line, Bar, Pie, Bubble, Chart, Radar, Scatter, PolarArea } from 'react-chartjs-2'
import colors from './colors'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'

const url='https://api.rootnet.in/covid19-in/stats/history'

function TimelineData() {

    //still working on it

    const [TimeLinechart, setTimeLinechart] = useState([])
    const [loading, setLoading] = useState(true)
    const [Dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    let dates=[]
    let casesperday=[]
    let deaths=[]
    let discharged=[]
  const fetchData=async ()=>{ await axios.get(url)
    .then((res)=>{ 
        //console.log(res)
        for(let i=0; i<=(res.data.data).length; i++){

            let date=res.data.data[i*20].day;
            let caseperday=res.data.data[i*20].summary.total;
            //console.log(res.data.data[i].day)
            //console.log(res.data.data)
            casesperday.push(caseperday)
            dates.push(date)
            deaths.push(res.data.data[i*20].summary.deaths)
            discharged.push(res.data.data[i*20].summary.discharged)
           
        
            setTimeLinechart({
                labels : dates,
                datasets : [
                    {
                        label: 'Total Cases',
                        data: casesperday,
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
                        
                    },
                    {
                        label: 'Deaths',
                        data: deaths,
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
                        
                    },
                    {
                        label: 'Discharged',
                        data: discharged,
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
        }
        
    })
    .catch((err)=>{ console.log(err)})}

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setDimensions({
                width: window.innerWidth,
                heigh: window.innerHeight
            })
        })
        
        fetchData()
        //setLoading(false)
        setTimeout(() =>setLoading(false) , 3000)
    },[])

    return (

        
    <div className='TimelineApp'>

            {loading===false ? (
            <div className='chartTimeline' style={{width: (Dimensions.width)/1.5, height: (Dimensions.height)/1.5}}>
     <Line
	data={TimeLinechart}
 
    width={1000}
    height={500}
	options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
	/>
    </div>):(<div >
                    <SkeletonTheme color="lightgray" highlightColor="#999">
                    <div >
                        <Skeleton className='skeletonTimeline' width={500} height={50} delay={0.1} count={5} />
                    </div>
                    </SkeletonTheme>
            </div>)

            }
           
        </div>
    )
}

export default TimelineData
