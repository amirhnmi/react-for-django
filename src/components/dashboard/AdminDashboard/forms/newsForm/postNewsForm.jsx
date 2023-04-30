import axios from "axios";
import { useRef, useState } from "react";
import {NavLink} from "react-router-dom"
const PostNewsForm = () => {
    const [image, setimage] = useState(null)

    const title = useRef(null)
    const description = useRef(null)
    const author = useRef(null)
    const news_text = useRef(null)
    const news_date = useRef(null)
    const publish_date = useRef(null)

    const handlleFile= (e) => {
        setimage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("image", image)

        const response = await axios.post("http://localhost:4000/news/upload", data)

        const news = { title: title.current.value, image: `http://localhost:4000/${response.data.path}`,news_text: news_text.current.value ,description: description.current.value, author: author.current.value, news_date: news_date.current.value, publish_date: publish_date.current.value }

        if (news) {
            axios.post("http://localhost:4000/news", news).then((Response) => {
                window.location = "/admin/dashboard/newsform"
            })
        }


    }

    return (
        <>
            <form className="row g-2 was-validated">
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">عنوان:</label>
                    <input ref={title} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">پدید آورنده:</label>
                    <input ref={author} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">توضیحات:</label>
                    <input ref={description} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ خبر:</label>
                    <input ref={news_date} type="text" id="validationServer02" className="form-control is-valid" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ انتشار:</label>
                    <input ref={publish_date} type="text" className="form-control is-valid" id="validationServer02" required />

                </div>
                <div className="col-md-4">
                    <label htmlFor="validationTextarea" className="form-label">متن خبر:</label>
                    <textarea ref={news_text} className="form-control is-invalid" id="validationTextarea" placeholder="خلاصه ایی از فیلم را ذکر کنید ..." required></textarea>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationFilearea" className="form-label">عکس خبر:</label>
                    <input onChange={handlleFile} type="file" className="form-control" id="validationFilearea" required />
                </div>

                <div className="mb-3">
                    <button onClick={handleSubmit} className="btn btn-primary ms-2" type="submit" >ایجاد خبر</button>
                    <NavLink to="/admin/dashboard" className="btn btn-danger" type="submit" >بازگشت به داشبورد</NavLink>
                </div>
            </form>
        </>
    )

}

export default PostNewsForm;