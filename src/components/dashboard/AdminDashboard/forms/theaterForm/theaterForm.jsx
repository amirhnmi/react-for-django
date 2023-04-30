
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PostTheaterForm from "./postTheaterForm";
import PutTheaterForm from "./putTheaterForm"


const TheaterForm = () => {
    const [theatermovie,settheatermovie]= useState([])
    const [updatemovie,setupdatemovie] = useState(null)

    useEffect(()=>{
        axios.get("http://localhost:4000/categories/theater").then((response)=>{
            settheatermovie(response.data.data)
        })
    },[])
    
    function handlleUpdate(movie) {
        setupdatemovie(movie)
    }  
    

    const handlleDelete= async (movie)=>{
        await axios.delete(`http://localhost:4000/categories/theater/${movie._id}`)
        window.location = "/admin/dashboard/theaterform"
    }

    return (
        <>
            <div className="container mt-3">
                <span className="fw-bold fs-5">تئاتر</span>
                <hr />
                { 
                    !updatemovie ? (
                        <>
                            <div class="alert alert-info" role="alert">
                            <span className="fw-bold fs-5 ">ایجاد فیلم:</span>
                            </div>
                            <PostTheaterForm/>
                        </>
                    ):(
                        <>
                            <div class="alert alert-primary" role="alert">
                            <span className="fw-bold fs-5 ">آپدیت فیلم:</span>
                            </div>
                            <PutTheaterForm theatermovie={updatemovie}/>
                        </>
                    )

                }
                
            
                
                <table className="table fs-sm">
                    <thead>
                        <tr>
                        <th scope="col">تعداد</th>
                        <th scope="col">آي دی</th>
                        <th scope="col">نام فیلم</th>
                        <th scope="col">عنوان</th>
                        <th scope="col">بازیگران</th>
                        <th scope="col">کارگردان</th>
                        <th scope="col">تهیه کننده</th>
                        <th scope="col">تاریخ ساخت</th>
                        <th scope="col">تاریخ اکران</th>
                        <th scope="col">حذف | آپدیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {theatermovie.map((movie , index)=>(
                            <tr key={index}>
                            <td>{index}</td>
                            <td>{movie._id}</td>
                            <td>{movie.movie_name}</td>
                            <td>{movie.title}</td>
                            <td>{movie.actors}</td>
                            <td>{movie.director}</td>
                            <td>{movie.producer}</td>
                            <td>{movie.production_date}</td>
                            <td>{movie.release_date}</td>
                            <td>
                                <button className="btn btn-danger ms-2" onClick={()=>{handlleDelete(movie)}}>حذف</button>
                                <button onClick={()=>handlleUpdate(movie)}  className="btn btn-primary" type="submit" >آپدیت</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>   
                </table>
            </div>

           
        </>
    )

}

export default TheaterForm;