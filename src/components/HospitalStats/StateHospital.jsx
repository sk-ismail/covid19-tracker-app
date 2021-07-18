import React,{useState, useEffect} from 'react'
import './StateHospital.css'
import axios from 'axios'
import { Bar } from 'react-chartjs-2'
import colors from '../colors'
const StateHospital = () => {

    const [totalBeds, setTotalBeds] = useState([])
    const stateNames=[]
    const Beds=[]
    const hospitals=[]
    const fetchData= async ()=>{ 
    
        //const distData=[]
    
        await axios.get('https://api.rootnet.in/covid19-in/hospitals/beds')
        .then((res) => {
            //setState(res)
            
            for(let i=0; i<(res.data.data.regional).length -1; i++){
                    
                stateNames.push(res.data.data.regional[i].state)
                Beds.push(res.data.data.regional[i].totalBeds)
                hospitals.push(res.data.data.regional[i].totalHospitals)
                //console.log(res.data.data.regional[i])
            }
            
            //console.log(Beds)
            //distData.push(distsData) 
            setTotalBeds({
                labels : stateNames,
                datasets : [
                    {
                        label: 'Total Beds',
                        data: Beds,
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
                        label: 'Total Hospitals',
                        data: hospitals,
                        borderWidth:2,
                        backgroundColor: "rgba(0,0,0,0.9)",
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
        .catch((error)=> console.log(error))}
    
       
        useEffect(() => {
            fetchData()
          })
    return (
        <div>
         <Bar
        data={totalBeds}
        width={1000}
        height={500}
        options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
        </div>
    )
}

export default StateHospital
