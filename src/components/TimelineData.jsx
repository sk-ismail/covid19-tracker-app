import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import './Timeline.css'
import { Line } from 'react-chartjs-2'
import colors from './colors'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'


function TimelineData() {

    //still working on it

    const [TimeLinechart, setTimeLinechart] = useState([])
    const [loading, setLoading] = useState(true)

    let dates=[]
    let casesperday=[]
  const fetchData=()=>{ axios.get('https://api.rootnet.in/covid19-in/stats/history')
    .then((res)=>{ 
        
        for(let i=0; i<=(res.data.data).length; i++){

            let date=res.data.data[i].day;
            let caseperday=res.data.data[i].summary.total;
            //console.log(res.data.data[i].day)
            //console.log(res.data.data[i].summary.total)
            casesperday.push(caseperday)
            dates.push(date)

            setTimeLinechart({
                labels : dates,
                datasets : [
                    {
                        label: 'TimeLine',
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
                        
                    }
                ]
                
            })

        }
    })
    .catch((err)=>{ console.log(err)})}

    useEffect(()=>{
        fetchData()
        setTimeout(() => setLoading(false), 8000)
    },[])

    return (

        
    <div className='TimelineApp'>

            {loading===false ? (
            <div className='chartTimeline'>
     <Line
	data={TimeLinechart}
 
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
