import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate()

    const email = useRef(null)
    const username = useRef(null)
    const phone_number = useRef(null)
    const password = useRef(null)


    const handleSubmit = (e) => {
        e.preventDefault()

        const account = { email: email.current.value, username: username.current.value, phone_number: phone_number.current.value, password: password.current.value }
        if (account.email && account.username && account.phone_number && account.password) {
            axios.post("http://localhost:4000/auth/register", account).then((response) => {
                navigate("/auth/login")
                console.log(response)
            }).catch((ex) => {
                console.log(ex)
            })
        }
    }

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
                                        <span className="fw-bold ">ایجاد حساب کاربری</span>
                                        <form onSubmit={handleSubmit} className="mt-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">آدرس ایمیل :</label>
                                                <input ref={email} name="email" type="email" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputuser_name" className="form-label">نام کاربری :</label>
                                                <input ref={username} name="text" type="text" className="form-control" id="exampleInputuser_name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">شماره موبایل :</label>
                                                <input ref={phone_number} name="tell" type="tell" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-lable">کلمه عبور :</label>
                                                <input ref={password} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <button type="submit" className="btn btn-danger"><span className="mx-5">ثبت نام</span></button>
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
    )
}

export default Register;