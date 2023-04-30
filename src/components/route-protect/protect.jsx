import { Routes, Route, useNavigate} from "react-router-dom";

const Protect = ({element:Components, ...restProps})=>{
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem("x-auth-token")

    return (
        <>
            <Routes>
                <Route {...restProps} element={(props)=>{
                    return isLoggedIn ? <Components {...props}/> : navigate("/auth/login")
                }}/>
            </Routes>
        </>
    )
}

export default Protect;