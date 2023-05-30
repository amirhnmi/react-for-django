import { NavLink } from "react-router-dom";


function Navbar ({user}) {
    return (
        <>
        <nav dir="rtl" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className=" container-fluid navbar-position d-flex">
                        <a className="navbar-brand" href="">
                            <img src="https://cinematicket.org/v3.13.2/assets/images/logo.svg" alt="" />
                            <img src="https://cinematicket.org/v3.13.2/assets/images/typography_dark.svg" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/movie">فیلم و تئاتر</a>
                        </li>
                        <li className="nav-item">
                                <a className="nav-link" href="/cinema">سینما</a>
                            
                        </li>
                        <li className="search-box nav-item">
                            <form className="d-flex">
                                <i className="search-icon fa-solid fa-magnifying-glass"></i>
                                <input className="search-input" type="search" placeholder=" جست و جوی فیلم و سریال" />
                            </form>
                        </li>
                    </ul>
                    
                    <ul className="navbar-nav mث-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                شهر خود را انتخاب کنید
                            </a>
                            <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <hr />
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">بلیت های من</a>
                        </li>
                        {
                            !user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/auth/login">ثبت نام|ورود</NavLink>
                                    </li>
                                </>
                            ):(
                                <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            پروفایل
                                        </a>
                                        <ul className="dropdown-menu" >
                                            <li><NavLink className="dropdown-item fw-sm" to="/user/dashboard">پنل کاربر</NavLink></li>
                                            <li><NavLink className="dropdown-item fw-sm" to="/auth/logout" >خروج از حساب کاربری</NavLink></li>
                                        </ul>
                                    </li>
                                </>
                            )
                        }
                        
                        
                    </ul>
                    
                    
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;