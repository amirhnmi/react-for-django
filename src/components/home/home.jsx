import { useState , useEffect} from "react";
import axios from "axios"

import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";

import BodyContext from "./../../context/body"
import UserContext from "../../context/user";


function Home() {
  const [user,setuser] = useState(null)
  useEffect(()=>{
      const token = localStorage.getItem("auth_token")
      if(!token){
        setuser(null)
        return
      }

      axios.post("http://127.0.0.1:4000/accounts/user/", {token:token}).then((response)=>{
        setuser(response.data)
        
      })
  },[])

      const [screening, setscreening] = useState([])
      useEffect(()=>{
        axios.get("http://127.0.0.1:4000/categories/screening/").then((response)=>{

          setscreening(response.data)
        })
      },[])

    const [theater, settheater] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/theater/").then((response)=>{
        settheater(response.data)
      })
    },[])

    const [artandexpriens, setartandexpriens] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/artandexpriens/").then((response)=>{
        setartandexpriens(response.data)
      })
    },[])


    const [comedytheater, setcomedytheater] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/comedytheater/").then((response)=>{
        setcomedytheater(response.data)
      })
    },[])

    const [childrenstheater, setchildrenstheater] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/categories/childrenstheater/").then((response)=>{
        setchildrenstheater(response.data)
      })
    },[])


    const [news, setnews] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/news/").then((response)=>{
        setnews(response.data)
      })
    },[])

    const [sales, setsales] = useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:4000/salestable/").then((response)=>{
        setsales(response.data)
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