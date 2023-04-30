import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import * as yup from "yup"

const Login = () => {
    const [errors,seteerors] = useState([])
    const [sending,setsending]= useState(false)

    const email = useRef(null)
    const password = useRef(null)

    const schema = yup.object().shape({
        email : yup.string().email("فرمت ایمیل صحیح نمیباشد").required("وارد کردن ایمیل اجباری میباشد"),
        password: yup.string().min(6, "کلمه عبور باید حداقل شش گاراکتر باشد")
    })

    const validate= async()=>{
        try {
            const account = { email: email.current.value, password: password.current.value }
            const result = await schema.validate(account, {abortEarly: false})
            return result
        } catch (error) {
            seteerors(error.errors)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const result = await validate()

        if(result){
            try {
                setsending(true)
                const response= await axios.post("http://localhost:4000/auth/login", result)
                setsending(false)
                localStorage.setItem("x-auth-token", response.data.data.token)
                window.location = "/"
            } catch (error) {
                setsending(false)
                seteerors(["ایمیل یا پسورد نادرست است"])
            }
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
                                        {
                                            errors.length !== 0 && (
                                                <div className="alert alert-danger">
                                                    <ul>
                                                        {
                                                            errors.map((error, index)=> <li key={index}>{error}</li>)
                                                        }
                                                    </ul>
                                                </div>
                                            )

                                        }
                                        <span className="fw-bold ">اگر در سینماتیکت حساب کاربری دارید، وارد شوید.</span>
                                        <form onSubmit={handleSubmit} className="mt-3">
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">آدرس ایمیل :</label>
                                                <input ref={email} type="email" className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-lable">کلمه عبور :</label>
                                                <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <button disabled={sending} type="submit" className="btn btn-danger"><span className="mx-5">ورود</span></button>
                                        </form>
                                    </div>
                                </div>

                                <div className="mt-3 register-form">
                                    <div className="right">
                                        <span className="fw-bold">اگر در سینماتیکت حساب کاربری ندارید، ثبت نام کنید.</span>
                                    </div>
                                    <div className="mt-2">
                                        <NavLink to="/auth/register"><button type="submit" className="btn btn-danger">ایجاد حساب کاربری</button></NavLink>
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

export default Login;