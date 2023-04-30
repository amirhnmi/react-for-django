import { useContext } from "react";
import Navbar from "./navbar"
import SubHeader from "./subheader"


import UserContext from "../../../context/user";


    
const Header = () => {
    const usercontext = useContext(UserContext);
    return (
        <>
            <div className="d-flex m-0">
                <Navbar user={usercontext.User}/>
                <SubHeader/>
            </div>
            
        </>
    )
}

export default Header;