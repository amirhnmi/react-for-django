import axios from "axios";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom"
const PostSalesTableForm = () => {
    const [image, setimage] = useState(null)

    const movie_name = useRef(null)
    const director = useRef(null)
    const price = useRef(null)
    const last_update = useRef(null)

    const handlleFile = (e) => {
        setimage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("image", image)

        const response = await axios.post("http://localhost:4000/salestable/upload", data)

        let salestable = { image: `http://localhost:4000/${response.data.path}`, movie_name: movie_name.current.value, director: director.current.value, price: price.current.value, last_update: last_update.current.value }

        if (salestable) {
            axios.post("http://localhost:4000/salestable", salestable).then((Response) => {
                window.location = "/admin/dashboard/salestableform"
            })
        }


    }

    return (
        <>
            <form className="row g-2 was-validated">
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">نام فیلم:</label>
                    <input ref={movie_name} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">کارگردان:</label>
                    <input ref={director} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label"> مبلغ فروش:</label>
                    <input ref={price} type="text" id="validationServer02" className="form-control is-valid" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">اخرین آپدیت:</label>
                    <input ref={last_update} type="text" className="form-control is-valid" id="validationServer02" required />

                </div>
                <div className="col-md-4">
                    <label htmlFor="validationFilearea" className="form-label">عکس جدول فروش:</label>
                    <input onChange={handlleFile} type="file" className="form-control" id="validationFilearea" required />
                </div>

                <div className="mb-3">
                    <button onClick={handleSubmit} className="btn btn-primary ms-2" type="submit" >ایجاد جدول فروش</button>
                    <NavLink to="/admin/dashboard" className="btn btn-danger" type="submit" >بازگشت به داشبورد</NavLink>
                </div>
            </form>
        </>
    )

}

export default PostSalesTableForm;