import {useContext} from "react";
import SalesTable from "../home/body/sales table & news/salesTable";
import Navbar from "../home/header/navbar";
import UserContext from "../../context/user";
import BodyContext from "../../context/body";
const Cinema = ()=>{
    let bodycontext = useContext(BodyContext)
    let usercontext = useContext(UserContext);
    console.log(BodyContext)
    console.log(usercontext)
    return (
        <>
            <div className="d-flex m-0">
                <Navbar user={usercontext.User}/>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-9">
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="salestableandnews">
                            <SalesTable Sales={bodycontext.Sales}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cinema;