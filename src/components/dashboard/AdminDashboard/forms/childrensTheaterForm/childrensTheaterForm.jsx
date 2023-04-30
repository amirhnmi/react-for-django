import axios from "axios";
import { useEffect, useState } from "react";
import PostChildrensTheaterForm from "./postChildrensTheaterForm";
import PutChildrensTheaterForm from "./putChildrensTheaterForm";

const ChildrensTheaterForm = () => {
    const [childrenstheatermovie,setchildrenstheatermovie]= useState([])
    const [updatemovie,setupdatemovie] = useState(null)

    useEffect(()=>{
        axios.get("http://localhost:4000/categories/childrenstheater").then((response)=>{
            setchildrenstheatermovie(response.data.data)
        })
    },[])
    
    function handlleUpdate(movie) {
        setupdatemovie(movie)
    }  
    

    const handlleDelete= async (movie)=>{
        await axios.delete(`http://localhost:4000/categories/childrenstheater/${movie._id}`)
        window.location = "/admin/dashboard/childrenstheaterform"
    }

    return (
        <>
            <div className="container mt-3">
                <span className="fw-bold fs-5">تئاتر کودک</span>
                <hr />
                { 
                    !updatemovie ? (
                        <>
                            <div class="alert alert-info" role="alert">
                            <span className="fw-bold fs-5 ">ایجاد فیلم:</span>
                            </div>
                            <PostChildrensTheaterForm/>
                        </>
                    ):(
                        <>
                            <div class="alert alert-primary" role="alert">
                            <span className="fw-bold fs-5 ">آپدیت فیلم:</span>
                            </div>
                            <PutChildrensTheaterForm childrenstheatermovie={updatemovie}/>
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
                        {childrenstheatermovie.map((movie , index)=>(
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

export default ChildrensTheaterForm;