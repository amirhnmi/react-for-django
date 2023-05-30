import { useState , useEffect} from "react";
import axios from "axios"

import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";

import BodyContext from "./../../context/body"
import UserContext from "../../context/user";
import Login from "../auth/login/login";



function Home() {
  const [user,setuser] = useState(null)
  useEffect(()=>{
      const token = localStorage.getItem("x-auth-token")
      if(!token){
        setuser(null)
        return
      }

      axios.post("http://localhost:4000/user/usertoken", {token:token}).then((response)=>{
        setuser(response.data.data)
      })
  },[])

      const [screening, setscreening] = useState([])
      useEffect(()=>{
        axios.get("http://127.0.0.1:4000/categories/screening").then((response)=>{
          setscreening(response.data.data)
        })
      },[])

    const [theater, settheater] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/theater").then((response)=>{
        settheater(response.data.data)
      })
    },[])

    const [artandexpriens, setartandexpriens] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/artandexprience").then((response)=>{
        setartandexpriens(response.data.data)
      })
    },[])


    const [comedytheater, setcomedytheater] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/comedytheater").then((response)=>{
        setcomedytheater(response.data.data)
      })
    },[])

    const [childrenstheater, setchildrenstheater] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/childrenstheater").then((response)=>{
        setchildrenstheater(response.data.data)
      })
    },[])


    const [news, setnews] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/news").then((response)=>{
        setnews(response.data.data)
      })
    },[])

    const [sales, setsales] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/salestable").then((response)=>{
        setsales(response.data.data)
      })
    },[])



    return (
        <>
          <UserContext.Provider
          value={{
            User: user,
          }}
          >
            <Header />
          </UserContext.Provider>

          <BodyContext.Provider
            value={{
              Screening: screening,
              Theater: theater,
              ArtAndExpriens: artandexpriens,
              ComedyTheater: comedytheater,
              ChildrensTheater : childrenstheater,

              News : news,
              Sales : sales,
            }}
          >
            <Body/>
          </BodyContext.Provider>
          <Footer/>
        </>
    )
}

export default Home;