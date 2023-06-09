import { useEffect } from "react";
const Logout = ()=>{
    useEffect(()=>{
        localStorage.removeItem("auth_token")
        window.location = "/"
    })

    return null
}

export default Logout;