import { NavLink } from "react-router-dom"
const Dashboard = ({adminuser}) => {
    return (
        <>
            {/* navigetion */}
            <nav className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggle mb-2 bg-light" data-bs-toggle="collapse" data-bs-target="#mynav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="mynav">
                    <div className="container-fluid">
                        <div className="row">
                            {/* <!--sidebar--> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                                <a href="" className="navbar-brand text-white d-block text-center mx-auto py-3 mb-4 button-border">سینماتیکت</a>
                                <div className="button-border pb-3">
                                    <img src="images/admindashboard/profile.jpg" className="rounded-circle ml-3" style={{ width: "50px" }} alt="" />
                                    <span className="text-white" >{adminuser.username}</span>
                                </div>
                                <ul className="nav-bar list-unstyled flex-column mt-4 ">
                                    <li className="nav-item current">
                                        <a href="" className="nav-link text-white p-3 mb-2">
                                            <i className="fas fa-home fa-lg ml-3"></i>داشبورد
                                        </a>
                                    </li>
                                    <li className="nav-item sidebar-link">
                                        <a href="" className="nav-link text-white p-3 mb-2">
                                            <i className="fas fa-user fa-lg ml-3"></i>پروفایل
                                        </a>
                                    </li>
                                    <li className="nav-item sidebar-link">
                                        <a href="" className="nav-link text-white p-3 mb-2">
                                            <i className="fas fa-envelope fa-lg ml-3"></i>پیام ها
                                        </a>
                                    </li>
                                    <li className="nav-item sidebar-link">
                                        <a href="" className="nav-link text-white p-3 mb-2">
                                            <i className="fas fa-shopping-cart fa-lg ml-3"></i>فروش
                                        </a>
                                    </li>
                                    <li className="nav-item sidebar-link">
                                        <a href="" className="nav-link text-white p-3 mb-2">
                                            <i className="fas fa-chart-line fa-lg ml-3"></i>تحلیل
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>

                            {/* <!--end of sidebar--> */}
                            {/* <!--topnav--> */}
                            <div className="col-xl-10 col-lg-9 col-md-8 bg-dark me-auto fixed-top py-2 top-navbar">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h4 className="text-light">داشبورد</h4>
                                    </div>
                                    <div className="col-md-5">
                                        <form className="my-4 my-md-0" action="">
                                            <div className="input-group">
                                                <button className="btn btn-white search-button">
                                                    <i className="fas fa-search text-danger" ></i>
                                                </button>
                                                <input type="text" placeholder="جستجو..." className="form-control search-input" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-3">
                                        <ul className="navbar-nav flex-row justify-content-between">
                                            <li className="nav-item">
                                                <a href="" className="nav-link">
                                                    <i className="fas fa-comments fa-lg text-muted"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="" className="nav-link">
                                                    <i className="fas fa-bell fa-lg text-muted"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item mr-md-auto">
                                                <a href="" className="nav-link">
                                                    <i className="fas fa-sign-out-alt fa-lg text-danger" id="#mymodal" data-toggle="modal"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end of topnav--> */}
                        </div>
                    </div>

                </div>
            </nav>
            {/* <!--end of navigetion--> */}

            {/* <!--modal--> */}
            <div id="myModal" className="modal fade" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 >آیا میخواهید خارج شوید ؟</h4>
                        </div>
                        <div className="modal-body">
                            <p className="text-muted">در صورت خروج ، برای دسترسی به پنل باید مجددا وارد شوید </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success" data-dismiss="modal">میمانم</button>
                            <button className="btn btn-danger" >خارج میشوم</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!--end of modal--> */}

            {/* <!--cards--> */}
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 col-md-8  me-auto ">
                            <div className="row pt-md-5 mt-md-2 mb-5">
                                {/* <!--card--> */}
                                <div className="col-lg-3 col-md-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-secondary">
                                                    <h5>فروش</h5>
                                                    <h5 className="mt-3">30میلیون</h5>
                                                </div>
                                                <i className="fas fa-shopping-cart text-warning fa-3x"></i>
                                            </div>
                                        </div>
                                        <div className="card-footer text-secondary text-left">
                                            <i className="fas fa-sync ml-3"></i>
                                            <span>به روزرسانی</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end of card--> */}
                                {/* <!--card--> */}
                                <div className="col-lg-3 col-md-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-secondary">
                                                    <h5>هزینه</h5>
                                                    <h5 className="mt-3">5 میلیون</h5>
                                                </div>
                                                <i className="fas fa-money-bill-alt text-success fa-3x"></i>
                                            </div>
                                        </div>
                                        <div className="card-footer text-secondary text-left">
                                            <i className="fas fa-sync ml-3"></i>
                                            <span>به روزرسانی</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end of card--> */}
                                {/* <!--card--> */}
                                <div className="col-lg-3 col-md-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-secondary">
                                                    <h5>کاربران</h5>
                                                    <h5 className="mt-3">50000</h5>
                                                </div>
                                                <i className="fas fa-users text-info fa-3x"></i>
                                            </div>
                                        </div>
                                        <div className="card-footer text-secondary text-left">
                                            <i className="fas fa-sync ml-3"></i>
                                            <span>به روزرسانی</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end of card--> */}
                                {/* <!--card--> */}
                                <div className="col-lg-3 col-md-6 p-2">
                                    <div className="card card-common">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-secondary">
                                                    <h5>بازدید</h5>
                                                    <h5 className="mt-3">10000</h5>
                                                </div>
                                                <i className="fas fa-chart-line text-danger fa-3x"></i>
                                            </div>
                                        </div>
                                        <div className="card-footer text-secondary text-left">
                                            <i className="fas fa-sync ml-3"></i>
                                            <span>به روزرسانی</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end of card--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end of cards--> */}

            {/* <!--create movie / tasklist--> */}
            <section>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-xl-10 col-lg-9 col-md-8 me-auto">
                            <div className="row">
                                {/* <!--create movie--> */}
                                <div className="col-lg-6">
                                    <div className="bg-dark text-white p-4 rounded">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h4 className="mb-4 ">ایجاد فیلم</h4>
                                                <div>
                                                    <NavLink to="/admin/dashboard/screeningform">
                                                        <button className="btn btn-primary w-100">ایجاد فیلم در حال اکران</button>
                                                    </NavLink>
                                                </div>
                                                <div className="my-2">
                                                    <NavLink to="/admin/dashboard/theaterform">
                                                        <button className="btn btn-primary w-100">ایجاد فیلم تئاتر</button>
                                                    </NavLink>
                                                </div>
                                                <div className="">
                                                    <NavLink to="/admin/dashboard/artandexprienceform">
                                                        <button className="btn btn-primary w-100">ایجاد فیلم هنر و تجربه</button>
                                                    </NavLink>
                                                </div>
                                                <div className="my-2">
                                                    <NavLink to="/admin/dashboard/comedytheaterform">
                                                        <button className="btn btn-primary w-100">ایجاد فیلم تئاتر کمدی</button>
                                                    </NavLink>
                                                </div>
                                                <div className="">
                                                    <NavLink to="/admin/dashboard/childrenstheaterform">
                                                        <button className="btn btn-primary w-100">ایجاد فیلم تئاتر کودک</button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4 className="mb-4 ">ایجاد خبر | جدول فروش</h4>
                                                <div>
                                                    <NavLink to="/admin/dashboard/newsform">
                                                        <button className="btn btn-primary w-100">ایجاد خبر</button>
                                                    </NavLink>
                                                </div>
                                                <div className="my-2">
                                                    <NavLink to="/admin/dashboard/salestableform">
                                                        <button className="btn btn-primary w-100">ایجاد جدول فروش</button>
                                                    </NavLink>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                                {/* <!--end of create movie--> */}
                                {/* <!--tasklist--> */}
                                <div className="col-lg-6">
                                    <h4 className="text-muted p-3 mb-3">تسک ها</h4>
                                    <div className="container-fluid bg-white">
                                        <div className="row py-3 mb-4  align-content-center task-border">
                                            <div className="col-1">
                                                <input type="checkbox" checked />
                                            </div>
                                            <div className="col-9">اماده کردن سمت بک اند</div>
                                            <div className="col-1">
                                                <a data-toggle="tooltip" data-html="true" data-placement="top" title="ویرایش" href="">
                                                    <i className="fas fa-edit fa-lg text-success ml-2"></i>
                                                </a>
                                            </div>
                                            <div className="col-1">
                                                <a data-toggle="tooltip" data-html="true" data-placement="top" title="حذف" href="">
                                                    <i className="fas fa-trash fa-lg text-danger ml-2"></i>
                                                </a>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                    {/* <!--end of task--> */}
                                    {/* <!--task--> */}
                                    <div className="container-fluid bg-white">
                                        <div className="row py-3 mb-4  align-content-center task-border">
                                            <div className="col-1">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="col-9">اماده کردن سمت بک اند</div>
                                            <div className="col-1">
                                                <a data-toggle="tooltip" data-html="true" data-placement="top" title="ویرایش" href="">
                                                    <i className="fas fa-edit fa-lg text-success ml-2"></i>
                                                </a>
                                            </div>
                                            <div className="col-1">
                                                <a data-toggle="tooltip" data-html="true" data-placement="top" title="حذف" href="">
                                                    <i className="fas fa-trash fa-lg text-danger ml-2"></i>
                                                </a>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                    {/* <!--end of task--> */}
                                    {/* <!--task--> */}
                                    <div className="container-fluid bg-white">
                                        <div className="row py-3 mb-4  align-content-center task-border">
                                            <div className="col-1">
                                                <input type="checkbox" checked />
                                            </div>
                                            <div className="col-9">اماده کردن سمت بک اند</div>
                                            <div className="col-1">
                                                <a data-toggle="tooltip" data-html="true" data-placement="top" title="ویرایش" href="">
                                                    <i className="fas fa-edit fa-lg text-success ml-2"></i>
                                                </a>
                                            </div>
                                            <div className="col-1">
                                                <a data-toggle="tooltip" data-html="true" data-placement="top" title="حذف" href="">
                                                    <i className="fas fa-trash fa-lg text-danger ml-2"></i>
                                                </a>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                    {/* <!--end of task--> */}
                                </div>
                                {/* <!--end of tasklist--> */}
                            </div>

                            

                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end of progress / tasklist--> */ }

            {/* <!--tables--> */ }
            <section>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <div className="col-xl-10 col-lg-9 col-md-8 me-auto" >
                            <div className="row ">
                                <div className="col-lg-6 mb-5 mb-lg-0">
                                    <h3 className="text-muteی text-center mb-3"> پرداختی ها </h3>
                                    <table className="table table-dark table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>نام</th>
                                                <th>مبلغ</th>
                                                <th>تاریخ</th>
                                                <th>وضعیت</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>5میلیون</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <span className="badge w-75 py-2 badge-success">پرداخت شده</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>5میلیون</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <span className="badge w-75 py-2 badge-danger">رد شده</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>5میلیون</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <span className="badge w-75 py-2 badge-warning">انتظار</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>5میلیون</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <span className="badge w-75 py-2 badge-success" >پرداخت شده</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <!-- pagination --> */}
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">&laquo;</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="" className="page-link py-2 px-3">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">&raquo;</a>
                                        </li>
                                    </ul>
                                    {/* <!-- end of pagination --> */}
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="text-muteی text-center mb-3"> تیکت های اخیر</h3>
                                    <table className="table table-striped  text-center bg-light">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>نام</th>
                                                <th>تاریخ</th>
                                                <th>عملیات</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <button className="btn btn-info btn-sm">پاسخ</button>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <button className="btn btn-info btn-sm">پاسخ</button>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <button className="btn btn-info btn-sm">پاسخ</button>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>محمد</td>
                                                <td>10تیر ماه</td>
                                                <td>
                                                    <button className="btn btn-info btn-sm">پاسخ</button>

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    {/* <!-- pagination --> */}
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">&laquo;</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="" className="page-link py-2 px-3">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="" className="page-link py-2 px-3">&raquo;</a>
                                        </li>
                                    </ul>
                                    {/* <!-- end of pagination --> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--end of tables--> */ }

            {/* <!-- activities - quickpost --> */ }
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-xl-10 col-lg-9 col-md-8 me-auto">
                        <div className="row">
                            <div className="col-lg-7">
                                <h4 className="text-muted mb-4 ">فعالیت های اخیر</h4>
                                <div id="accordion">
                                    <div className="card">
                                        <div className="card-header">
                                            <button className="btn btn-block btn-light text-right" data-bs-toggle="collapse" data-bs-target="#collapse1" >
                                                {/* <img src="./p1.jpg" alt="" className="ml-2 rounded" style="width: 50px; height: 50px;"/> */}
                                                محمد یک گفتگوی جدید ایجاد کرد
                                            </button>
                                        </div>
                                        <div className="collapse" id="collapse1" data-parent="#accordion">
                                            <div className="card-body">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <button className="btn btn-block btn-light text-right" data-bs-toggle="collapse" data-bs-target="#collapse2" >
                                                {/* <img src="./p2.jpg" alt=""  className="ml-2 rounded" style="width: 50px; height: 50px;"/> */}
                                                رضا یک گفتگوی جدید ایجاد کرد

                                            </button>
                                        </div>
                                        <div className="collapse" id="collapse2" data-parent="#accordion">
                                            <div className="card-body">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <button className="btn btn-block btn-light text-right" data-bs-toggle="collapse" data-bs-target="#collapse3">
                                                {/* <img src="./p2.jpg" alt="" className="ml-2 rounded" style="width: 50px; height: 50px;"/> */}
                                                پژمان یک گفتگوی جدید ایجاد کرد

                                            </button>
                                        </div>
                                        <div className="collapse" id="collapse3" data-parent="#accordion">
                                            <div className="card-body" >
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <button type="button" className="btn btn-block btn-light text-right" data-bs-toggle="collapse" data-bs-target="#collapse4">
                                                {/* <img src="./p2.jpg" alt="" className="ml-2 rounded" style="width: 50px; height: 50px;"/> */}
                                                رضا یک گفتگوی جدید ایجاد کرد

                                            </button>
                                        </div>
                                        <div className="collapse" id="collapse4" data-parent="#accordion">
                                            <div className="card-body">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <button className="btn btn-block btn-light text-right" data-bs-toggle="collapse" data-bs-target="#collapse5">
                                                {/* <img src="./p2.jpg" alt="" className="ml-2 rounded" style="width: 50px; height: 50px;"/> */}
                                                رضا یک گفتگوی جدید ایجاد کرد

                                            </button>
                                        </div>
                                        <div className="collapse" id="collapse5" data-parent="#accordion">
                                            <div className="card-body" >
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5 mt-5">
                                <div className="card rounded">
                                    <div className="card-body">
                                        <h5 className="text-muted text-center mb-4">پست جدید</h5>
                                        <ul className="list-inline text-center py-3">
                                            <li className="list-inline-item">
                                                <a href="">
                                                    <i className="fas fa-pencil-alt text-success"></i>
                                                    <span className="h6 text-muted">وضعیت</span>
                                                </a>
                                            </li>
                                            <li className="list-inline-item px-2">
                                                <a href="">
                                                    <i className="fas fa-camera text-info"></i>
                                                    <span className="h6 text-muted">تصویر</span>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="">
                                                    <i className="fas fa-map-marker text-danger"></i>
                                                    <span className="h6 text-muted">مکان</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <form action="">
                                            <div className="form-group">
                                                <input type="text" className="form-control py-2 mb-3" placeholder="یه چیزی بنویس" />
                                                <button className="btn btn-block text-light bg-info py-2 mb-5">ارسال</button>
                                            </div>
                                        </form>
                                        <div className="row">
                                            <div className="col-6 ">
                                                <div className="card">
                                                    <i className="far fa-calendar-alt fa-4x text-warning d-block py-3 m-auto"></i>
                                                    <div className="card-body">
                                                        <p className="card-text text-center">سه شنبه 17تیر</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 ">
                                                <div className="card">
                                                    <i className="far fa-clock fa-4x text-warning d-block py-3 m-auto"></i>
                                                    <div className="card-body">
                                                        <p className="card-text text-center">9:30 صبح</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end of oactivities - quickpost --> */ }

        </>
        
    )
}

export default Dashboard