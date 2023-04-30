import { NavLink } from "react-router-dom";

const NotFound = ()=>{
    return (
        <>
            <div className="container">
                <div className="mt-5">
                    <h3>همچین صفحه ایی یافت نشد یا وجود ندارد</h3>
                    <NavLink to="/"><button type="submit" className="btn btn-danger">بازگشت به صفحه اصلی</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default NotFound;