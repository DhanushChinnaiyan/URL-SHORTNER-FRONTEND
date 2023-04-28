import { useEffect, useState } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

function App() {
  const [urls,setUrls] = useState([])

  const history = useHistory()
  useEffect(()=>{
   const getUrls = async() => {

    // getting token from header
    const token = localStorage.getItem("usertoken")
    // replace to login 
    if(!token) return history.replace("/login")
    // validating the header token
    const user = decodeToken(token)
    // if header token is wrong then it will replace to login page and also remove the header token
    if(!user) {
       localStorage.removeItem("usertoken")
       history.replace("/login")
    }
    

// getting the urls
    try {
      const response = await fetch(`https://reset-password-backend-x1nk.onrender.com/shorturl/all/${user.id}`,{
        method:"GET",
        headers:{
          "user-login-token":localStorage.getItem("usertoken")
        }
      })
     const data = await response.json()
     console.log(data)

    } catch (error) {
     console.log("All Url Error",error)
    }
   }

   getUrls()
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
