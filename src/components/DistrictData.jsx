import React,{ useState, useEffect} from 'react'
import './District.css'
import axios from 'axios'
import { data } from 'browserslist'
import stateNamesData from './stateNamesData'
const DistrictData = () => {

    const [state, setState] = useState([])
   
   const fetchData= async ()=>{ 
    
    await axios.get('https://api.covid19india.org/state_district_wise.json')
    .then((res) => {
        setState(res)
        
        console.log(res.data)
            
        })
    .catch((error)=> console.log(error))}

    useEffect(() => {
        fetchData()
      }, [])

    return (
        <div className='DistrictApp'>
   <table >
  <tr>
    <th>State</th>
    <th>Cases</th>
    <th>Age</th>
  </tr>
  <tr>
    <td></td>
    <td>Smith</td>
    <td>50</td>
  </tr>

</table>

        </div>
    )
}

export default DistrictData
