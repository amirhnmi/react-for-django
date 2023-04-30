import axios from "axios";
import { useRef, useState , useEffect} from "react";

const PutNewsForm = ({news}) => {
    const [image, setimage] = useState(null)

    const title = useRef(null)
    const description = useRef(null)
    const author = useRef(null)
    const news_text = useRef(null)
    const news_date = useRef(null)
    const publish_date = useRef(null)

    const handlleFile= (e) => {
        setimage(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("image", image)
        console.log(data)

        const response = await axios.post("http://localhost:4000/news/upload", data)

        let news1 = { image: `http://localhost:4000/${response.data.path}` ,title: title.current.value, description: description.current.value,  author: author.current.value, news_text: news_text.current.value, news_date: news_date.current.value, publish_date: publish_date.current.value }

        if (news1) {
            axios.put(`http://localhost:4000/news/${news._id}`, news1).then((Response) => {
                window.location = "/admin/dashboard/newsform"

            })
        }
    }

    const handleRefresh=()=>{
        window.location="/admin/dashboard/newsform"
    }


    return (
        <>
            <form className="row g-2 was-validated">
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">عنوان:</label>
                    <input ref={title} defaultValue={news.title} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">پدید آورنده:</label>
                    <input ref={author} defaultValue={news.author} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">توضیحات:</label>
                    <input ref={description} defaultValue={news.description} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ خبر:</label>
                    <input ref={news_date} defaultValue={news.news_date} type="text" id="validationServer02" className="form-control is-valid" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ انتشار:</label>
                    <input ref={publish_date} defaultValue={news.publish_date} type="text" className="form-control is-valid" id="validationServer02" required />

                </div>
                <div className="col-md-4">
                    <label htmlFor="validationTextarea" className="form-label">متن خبر:</label>
                    <textarea ref={news_text} defaultValue={news.title} className="form-control is-invalid" id="validationTextarea" placeholder="خلاصه ایی از فیلم را ذکر کنید ..." required></textarea>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationFilearea" className="form-label">عکس خبر:</label>
                    <input onChange={handlleFile} type="file" className="form-control" id="validationFilearea" required />
                </div>

                <div className="mb-3">
                    <button onClick={handleSubmit} className="btn btn-primary ms-2" type="submit" >آپدیت خبر</button>
                    <button onClick={handleRefresh} className="btn btn-danger" type="submit" >بازگشت به فرم خبر </button>
                </div>
            </form>
        </>
    )

}

export default PutNewsForm;