import axios from "axios";
import { useEffect, useState } from "react";
import PostNewsForm from "./postNewsForm";
import PutNewsForm from "./putNewsForm";


const NewsForm = () => {
    const [news,setnews]= useState([])
    const [updatenews,setupdatenews] = useState(null)

    useEffect(()=>{
        axios.get("http://localhost:4000/news").then((response)=>{
            setnews(response.data.data)
        })
    },[])
    
    function handlleUpdate(news) {
        setupdatenews(news)
    }  
    

    const handlleDelete= async (news)=>{
        await axios.delete(`http://localhost:4000/news/${news._id}`)
        window.location = "/admin/dashboard/newsform"
    }

    return (
        <>
            <div className="container mt-3">
                <span className="fw-bold fs-5">خبر</span>
                <hr />
                { 
                    !updatenews ? (
                        <>
                            <div class="alert alert-info" role="alert">
                            <span className="fw-bold fs-5 ">ایجاد خبر:</span>
                            </div>
                            <PostNewsForm/>
                        </>
                    ):(
                        <>
                            <div class="alert alert-primary" role="alert">
                            <span className="fw-bold fs-5 ">آپدیت خبر:</span>
                            </div>
                            <PutNewsForm news={updatenews}/>
                        </>
                    )

                }
                
            
                
                <table className="table fs-sm">
                    <thead>
                        <tr>
                        <th scope="col">تعداد</th>
                        <th scope="col">آي دی</th>
                        <th scope="col">عنوان</th>
                        <th scope="col">توضیحات</th>
                        <th scope="col">پدید آورنده</th>
                        <th scope="col">تاریخ خبر</th>
                        <th scope="col">تاریخ انتشار</th>
                        <th scope="col">حذف | آپدیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {news.map((news , index)=>(
                            <tr key={index}>
                            <td>{index}</td>
                            <td>{news._id}</td>
                            <td>{news.title}</td>
                            <td>{news.description}</td>
                            <td>{news.author}</td>
                            <td>{news.news_date}</td>
                            <td>{news.publish_date}</td>
                            <td>
                                <button className="btn btn-danger ms-2" onClick={()=>{handlleDelete(news)}}>حذف</button>
                                <button onClick={()=>handlleUpdate(news)}  className="btn btn-primary" type="submit" >آپدیت</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>   
                </table>
            </div>

           
        </>
    )

}

export default NewsForm;