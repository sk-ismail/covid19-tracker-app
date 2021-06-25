import React,{ useEffect, useState} from 'react'
import './StatesDataTable.css'
import axios from 'axios'
import india from '../images/india.png'
const StatesDataTable = () => {

    const [Table, setTable] = useState([])

    const tableData=async ()=>{
        
        const apisData=[]
     
           await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
             .then(({data}) => {
                 
                 for(let i=1; i<(data.data.regional).length; i++){
 
                     //setTable(data.data.regional[i])
                     
                     //console.log(data.data.regional[i].loc)
                     let apiData=data.data.regional[i]
                     apisData.push(apiData)

                     


                    }

                    setTable(apisData)
                    console.log(apisData)

                    
 
                 
             })
             .catch((error)=> console.log(error + 'rwegreh'))
    }

    useEffect(()=>{
        tableData()
    },[])

    //console.log(Table.data)
    return (
        <div className='tableApp'>
            <div className="table-users">
   <div class="header">States Data</div>
   <div className='tableContent'>
   <table cellspacing="0"  >
      <tr className='fixedTop'>
         <th>State</th>
         <th>Confirmed</th>
         <th>Deaths</th>
         <th>Recovery</th>
         <th width="">Foreign Cases</th>
      </tr>

{Table.map((item)=>{
    return(<tr >

        <td className='imageandname'><div><img src={india} alt="pic"></img></div><div>{item.loc}</div></td>
        <td>{item.totalConfirmed}</td>
        <td>{item.deaths}</td>
        <td>{item.discharged}</td>
        <td>{item.confirmedCasesForeign}</td>
    
    </tr>)
})}



  
   </table>
   </div>
</div>
        </div>
    )
}

export default StatesDataTable
