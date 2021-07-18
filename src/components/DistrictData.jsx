import React,{  useEffect} from 'react'
import './District.css'
import axios from 'axios'

//import stateNamesData from './stateNamesData'
const DistrictData = () => {

    //const [state, setState] = useState([])
   
   const fetchData= async ()=>{ 
    
    const distData=[]

    await axios.get('https://api.covid19india.org/state_district_wise.json')
    .then((res) => {
        //setState(res)
        
        const distsData=res.data
        distData.push(distsData) 
        
        console.log(distData)
            
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
