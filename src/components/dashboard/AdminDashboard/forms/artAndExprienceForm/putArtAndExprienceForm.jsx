import axios from "axios";
import { useRef, useState , useEffect} from "react";

const PutArtAndExprienceForm = ({artandexpriencemovie}) => {
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
        console.log(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData()
        data.append("image", image)
        console.log(data)

        const response = await axios.post("http://localhost:4000/categories/artandexprience/upload", data)
        console.log(response)

        let movie = { movie_name: movie_name.current.value, image: `http://localhost:4000/${response.data.path}` ,title: title.current.value, description: description.current.value, director: director.current.value, actors: actors.current.value, producer: producer.current.value, production_date: production_date.current.value, release_date: release_date.current.value }

        if (movie) {
            axios.put(`http://localhost:4000/categories/artandexprience/${artandexpriencemovie._id}`, movie).then((Response) => {
                window.location = "/admin/dashboard/artandexprienceform"

            })
        }
    }

    const handleRefresh=()=>{
        window.location="/admin/dashboard/artandexprienceform"
    }


    return (
        <>
            <form className="row g-2 was-validated">
                <div className="col-md-4">
                    <label htmlFor="validationServer01" className="form-label">نام فیلم:</label>
                    <input ref={movie_name} defaultValue={artandexpriencemovie.movie_name} type="text" className="form-control is-valid" id="validationServer01" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">عنوان:</label>
                    <input ref={title} defaultValue={artandexpriencemovie.title} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">بازیگران:</label>
                    <input ref={actors} defaultValue={artandexpriencemovie.actors} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">کارگردان:</label>
                    <input ref={director} defaultValue={artandexpriencemovie.director} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تهیه کننده:</label>
                    <input ref={producer} defaultValue={artandexpriencemovie.producer} type="text" className="form-control is-valid" id="validationServer02" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ تولید:</label>
                    <input ref={production_date} defaultValue={artandexpriencemovie.production_date} type="text" id="validationServer02" className="form-control is-valid" required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationServer02" className="form-label">تاریخ اکران:</label>
                    <input ref={release_date} defaultValue={artandexpriencemovie.release_date} type="text" className="form-control is-valid" id="validationServer02" required />

                </div>
                <div className="col-md-4">
                    <label htmlFor="validationTextarea" className="form-label">توضیحات و خلاصه فیلم:</label>
                    <textarea ref={description} defaultValue={artandexpriencemovie.description}  className="form-control is-invalid" id="validationTextarea" placeholder="خلاصه ایی از فیلم را ذکر کنید ..." required></textarea>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationFilearea" className="form-label">عکس پوستر:</label>
                    <input onChange={handlleFile} type="file" className="form-control" id="validationFilearea" required />
                </div>

                <div className="mb-3">
                    <button onClick={handleSubmit} className="btn btn-primary ms-2" type="submit" >آپدیت فیلم</button>
                    <button onClick={handleRefresh} className="btn btn-danger" type="submit" >بازگشت به فرم هنر و تجربه</button>
                </div>
            </form>
        </>
    )

}

export default PutArtAndExprienceForm;