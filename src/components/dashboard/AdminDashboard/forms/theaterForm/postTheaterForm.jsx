import axios from "axios";
import { useRef, useState } from "react";
import {NavLink} from "react-router-dom"
const PostTheaterForm = () => {
    const [image, setimage] = useState(null)

    const movie_name = useRef(null)
    const title = useRef(null)
    const description = useRef(null)
    const director = useRef(null)
    const actors = useRef(null)
    const producer = useRef(null)
    const production_date = useRef(null)
    const release_date = useRef(null)

    const handlleFile= (e) => {
        setimage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("image", image)

        const response = await axios.post("http://localhost:4000/categories/theater/upload", data)

        const movie = { movie_name: movie_name.current.value, image: `http://localhost:4000/${response.data.path}` ,title: title.current.value, description: description.current.value, director: director.current.value, actors: actors.current.value, producer: producer.current.value, production_date: production_date.current.value, release_date: release_date.current.value }

        if (movie) {
            axios.post("http://localhost:4000/categories/theater", movie).then((Response) => {
                window.location = "/admin/dashboard/theaterform"
            })
        }


    }

    return (
        <>
            <form className="row g-2 was-validated">
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">نام فیلم:</label>
                    <input ref={movie_name} type="text" className="form-control is-valid" id="validationServer01" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">عنوان:</label>
                    <input ref={title} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">بازیگران:</label>
                    <input ref={actors} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">کارگردان:</label>
                    <input ref={director} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تهیه کننده:</label>
                    <input ref={producer} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ تولید:</label>
                    <input ref={production_date} type="text" id="validationServer02" className="form-control is-valid" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ اکران:</label>
                    <input ref={release_date} type="text" className="form-control is-valid" id="validationServer02" required />

                </div>
                <div className="col-md-4">
                    <label htmlFor="validationTextarea" className="form-label">توضیحات و خلاصه فیلم:</label>
                    <textarea ref={description} className="form-control is-invalid" id="validationTextarea" placeholder="خلاصه ایی از فیلم را ذکر کنید ..." required></textarea>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationFilearea" className="form-label">عکس پوستر:</label>
                    <input onChange={handlleFile} type="file" className="form-control" id="validationFilearea" required />
                </div>

                <div className="mb-3">
                    <button onClick={handleSubmit} className="btn btn-primary ms-2" type="submit" >ایجاد فیلم</button>
                    <NavLink to="/admin/dashboard" className="btn btn-danger" type="submit" >بازگشت به داشبورد</NavLink>
                </div>
            </form>
        </>
    )

}

export default PostTheaterForm;