import { useEffect } from "react";
const Logout = ()=>{
    useEffect(()=>{
        localStorage.removeItem("x-auth-token")
        window.location = "/"
    })

    return null
}

export default Logout;