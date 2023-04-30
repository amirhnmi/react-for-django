import { useContext } from "react";

import Carousel from "./carousel/carousel";
import ArtAndExpriens from "./categories/artAndExpriens";
import ChildrensTheater from "./categories/childrensTheater.jsx";
import ComedyTheater from "./categories/comedyTheater";
import Screening from "./categories/screening";
import Theater from "./categories/theater";
import News from "./sales table & news/news";
import SalesTable from "./sales table & news/salesTable";
import Magazine from "./magazine/magazine";

import BodyContext from "../../../context/body";

const Body = ()=>{
    const bodycontext = useContext(BodyContext);
    return (
        <>
            <div className="container-floied body">
                <Carousel/>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className=" scrollspy-example bg-light p-3 rounded-2 " >
                    <div className="container-fluid mb-2">
                        <div className="row">
                            <div className="col-lg-9 col-md-12 ">
                                <div className="lopoto-father">
                                    <img src="images/buy-ticket/buy-ticket.webp" className="d-block w-100 rounded" alt="..."/>
                                    <img src="images/buy-ticket/lopoto.webp" className="lopoto-child" alt="" />
                                </div>

                                <h4 className="pt-5 fs-6 fw-bold" id="scrollspyHeading1">اکران</h4>
                                <hr />
                                    <Screening Screening={bodycontext.Screening}/>
                                <h4 className="pt-5 fs-6 fw-bold" id="scrollspyHeading2">تئاتر</h4>
                                <hr />
                                    <Theater Theater={bodycontext.Theater}/>
                                <h4 className="pt-5 fs-6 fw-bold" id="scrollspyHeading3">هنر و تجربه</h4>
                                <hr />
                                    <ArtAndExpriens ArtAndExpriens={bodycontext.ArtAndExpriens}/>
                                <h4 className="pt-5 fs-6 fw-bold" id="scrollspyHeading4">تئاتر کمدی</h4>
                                <hr />
                                    <ComedyTheater ComedyTheater={bodycontext.ComedyTheater} />
                                <h4 className="pt-5 fs-6 fw-bold" id="scrollspyHeading5">تئاتر کودک</h4>
                                <hr />
                                    <ChildrensTheater ChildrensTheater={bodycontext.ChildrensTheater}/>
                            </div>
                            <div className="col-lg-3 col-md-0">
                                <div className="magazine">
                                    <Magazine/>
                                </div>
                                <div className="salestableandnews">
                                    <SalesTable Sales={bodycontext.Sales}/>
                                </div>
                                <div className="salestableandnews mt-5">
                                    <News News={bodycontext.News}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Body;