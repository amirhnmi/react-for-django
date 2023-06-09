import React, { useState } from 'react';
import { useParams , NavLink} from 'react-router-dom';
import axios from 'axios';

const PasswordReset = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    axios.post('http://localhost:4000/accounts/password_reset/', { token, password }).then(
       console.log("password changed")
    );
       alert('Your password has been reset successfully.')
       window.location = "/auth/login"
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
                                        <span className="fw-bold ">پسورد جدید را وارد کنید</span>
                                        <form className="mt-3" onSubmit={handleSubmit} >
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label"> پسورد جدید :</label>
                                                <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
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
};

export default PasswordReset