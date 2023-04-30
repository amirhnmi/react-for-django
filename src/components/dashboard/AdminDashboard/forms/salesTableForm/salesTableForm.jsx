import axios from "axios";
import { useEffect, useState } from "react";
import PostSalesTableForm from "./postSalesTableForm";
import PutSalesTableForm from "./putSalesTableForm";


const SalesTableForm = () => {
    const [salestable, setsalestable] = useState([])
    const [updatesalestable, setupdatesalestable] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:4000/salestable").then((response) => {
            setsalestable(response.data.data)
        })
    }, [])

    function handlleUpdate(salestable) {
        setupdatesalestable(salestable)
    }


    const handlleDelete = async (salestable) => {
        await axios.delete(`http://localhost:4000/salestable/${salestable._id}`)
        window.location = "/admin/dashboard/salestableform"
    }

    return (
        <>
            <div className="container mt-3">
                <span className="fw-bold fs-5">جدول فروش</span>
                <hr />
                {
                    !updatesalestable ? (
                        <>
                            <div class="alert alert-info" role="alert">
                                <span className="fw-bold fs-5 ">ایجاد جدول فروش:</span>
                            </div>
                            <PostSalesTableForm />
                        </>
                    ) : (
                        <>
                            <div class="alert alert-primary" role="alert">
                                <span className="fw-bold fs-5 ">آپدیت جدول فروش:</span>
                            </div>
                            <PutSalesTableForm salestable={updatesalestable} />
                        </>
                    )

                }



                <table className="table fs-sm">
                    <thead>
                        <tr>
                            <th scope="col">تعداد</th>
                            <th scope="col">آي دی</th>
                            <th scope="col">نام فیلم</th>
                            <th scope="col">گارگردان</th>
                            <th scope="col">مبلغ فروش</th>
                            <th scope="col">اخرین به روزرسانی</th>
                            <th scope="col">حذف | آپدیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salestable.map((salestable, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{salestable._id}</td>
                                <td>{salestable.movie_name}</td>
                                <td>{salestable.director}</td>
                                <td>{salestable.price}</td>
                                <td>{salestable.last_update}</td>
                                <td>
                                    <button className="btn btn-danger ms-2" onClick={() => { handlleDelete(salestable) }}>حذف</button>
                                    <button onClick={() => handlleUpdate(salestable)} className="btn btn-primary" type="submit" >آپدیت</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )

}

export default SalesTableForm;