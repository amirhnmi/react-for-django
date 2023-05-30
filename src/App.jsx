import {Route, Routes} from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import NotFound from "./components/notfound/notfound";
import UserDashboard from "./components/dashboard/UserDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard/AdminDashboard";
import Logout from "./components/auth/logout/logout";
import TheaterForm from "./components/dashboard/AdminDashboard/forms/theaterForm/theaterForm";
import ScreeningForm from "./components/dashboard/AdminDashboard/forms/screeningForm/screeningForm";
import ArtAndExprienceForm from "./components/dashboard/AdminDashboard/forms/artAndExprienceForm/artAndExprienceForm";
import ComedyTheaterForm from "./components/dashboard/AdminDashboard/forms/comedyTheaterForm/comedyTheaterForm";
import ChildrensTheaterForm from "./components/dashboard/AdminDashboard/forms/childrensTheaterForm/childrensTheaterForm";
import NewsForm from "./components/dashboard/AdminDashboard/forms/newsForm/newsForm";
import SalesTableForm from "./components/dashboard/AdminDashboard/forms/salesTableForm/salesTableForm";
import Cinema from "./components/cinema/cinemaList";
import ForgetPassword from "./components/auth/password_reset/forgetPassword";
import PasswordReset from "./components/auth/password_reset/passwordReset";


function App() {

    return (
        <>
          <Routes>
            <Route path='/auth/login' element={<Login/>}/>
            <Route path='/auth/register' element={<Register/>}/>
            <Route path='/auth/logout' element={<Logout/>}/>
            <Route path='/auth/login/forget_password' element={<ForgetPassword/>}/>
            <Route path='/auth/login/password_reset/:token' element={<PasswordReset/>}/>
            <Route path='/user/dashboard' element={<UserDashboard />}/>
            <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
            <Route path='/admin/dashboard/theaterform' element={<TheaterForm/>}/>
            <Route path='/admin/dashboard/screeningform' element={<ScreeningForm/>}/>
            <Route path='/admin/dashboard/artandexprienceform' element={<ArtAndExprienceForm/>}/>
            <Route path='/admin/dashboard/comedytheaterform' element={<ComedyTheaterForm/>}/>
            <Route path='/admin/dashboard/childrenstheaterform' element={<ChildrensTheaterForm/>}/>
            <Route path='/admin/dashboard/newsform' element={<NewsForm/>}/>
            <Route path='/admin/dashboard/salestableform' element={<SalesTableForm/>}/>
            <Route path="/cinema" element={<Cinema/>}/>
            <Route path="/movie" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </>
    )
}

export default App;