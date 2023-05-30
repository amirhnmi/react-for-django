import axios from "axios";
import { NavLink, redirect } from "react-router-dom";
import { useState , useRef} from "react";


const ForgetPassword= ()=>{
    const [email, setEmail] = useState('');
    console.log(email)

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
        axios.post('http://localhost:4000/auth/forget_password', { email }).then(
            console.log("email send")
        );
        alert('An email with instructions to reset your password has been sent.');
        window.location = "/"
        } catch (error) {
        alert('There was an error resetting your password. Please try again later.');
        }
    };

    return (
        <>
        <div className="container-fluid">
                <body className="login-register-body">
                    <div className="containerr">
                        <section className="login-box">
                            <div className="sinematicket-img mb-4">
                                <img src="https://cinematicket.org/v3.13.8/assets/images/typo_logo.svg" alt="" />
                            </div>
                            <div className="login">
                                <div className="d-flex">
                                    <div className="">
                                        <span className="fw-bold ">آدرس ایمیل خود را وارد کنید و بر روی لینک فرستاده شده کلیک کنید</span>
                                        <form className="mt-3" onSubmit={handleSubmit} >
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">آدرس ایمیل :</label>
                                                <input name="email" type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                                            </div>
                                            
                                            <button  type="submit" className="btn btn-danger"><span className="mx-5">ارسال</span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="login-svg">
                                <img src="images/login&register/login.svg" alt="" />
                            </div>

                            <div className="comeback-to-home">
                                <NavLink to="/"><button type="submit" className="btn btn-danger">بازگشت به صفحه اصلی</button></NavLink>
                            </div>
                        </section>
                    </div>
                </body>
            </div>
</>
    );
}

export default ForgetPassword;