import React,{useState,useEffect} from 'react'
import axios from 'axios'
function Vehicle() {
    const [users,setUser] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/vehicles/')
        .then(res =>{
            setUser(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    return (
      
        <div>
                {
                  
                    users.map(user=>(
                        <table >
                         
                            <tr>
                        <td key={user.id}>{user.make}</td> 
                        <td key={user.id}>{user.model}</td>
                        <td key={user.id}>{user.year}</td>
                        <td key={user.id}>{user.color}</td>
                        <td key={user.id}>{user.vehiclenumber}</td>
                        </tr>
                      
                        </table>
                    ))
                }
        </div>
    )
}
export default Vehicle