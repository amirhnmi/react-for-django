import { useEffect, useState} from "react";
import axios from "axios"
import Dashboard from "./dashboard/dashboard";

const AdminDashboard = ()=>{
    const [adminuser, setadminuser]= useState({})
  useEffect(()=>{
      const token = localStorage.getItem("x-auth-token")
      if(!token){
        setadminuser(null)
        return
      }

      axios.post("http://localhost:4000/admin/dashboard", {token:token}).then((response)=>{
        setadminuser(response.data.data)
      }).catch(()=>{
        setadminuser(null)
      })
  },[])

  return (
    <>
     {
        adminuser === null ? (
            window.location="/not-found"

        ) : (
          <Dashboard adminuser={adminuser}/>  
        )
     }
    </>
  )  
    
}

export default AdminDashboard;