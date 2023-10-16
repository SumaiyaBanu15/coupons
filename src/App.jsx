import axios from "axios" 
import { useEffect,useState } from "react"
function App() {
  let [data,setData] = useState([])
  let getUsers = async()=>{
    try {
      let res = await axios.get(`${import.meta.env.VITE_APP_URL}/coupons`)
      console.log(res)
      if(res.status===200){
        setData(res.data.coupons)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <>
      <h1>FrontEnd and BackEnd Connectivity</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Offer Value</th>
            <th>Discount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{
          data.map((e)=>{
            return <tr key = {e._id}>
            <td>{e.name}</td>
            <td>{e.code}</td>
            <td>{e.startDate}</td>
            <td>{e.endDate}</td>
            <td>{e.offerValue}</td>
            <td>{e.discount}</td>
            <td>{e.status?"Active":"Inactive"}</td>
          </tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
