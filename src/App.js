import { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { decodeToken } from "react-jwt";
import Login from "./Components/UserEntry/Login";
import Signup from "./Components/UserEntry/Signup";
import Forgot from "./Components/UserEntry/Forgot/Forgot";
import MainDash from "./Components/DashBoard/MainDash/MainDash";
import AccountActivation from "./Components/UserEntry/AccountActivation";
import ResetPassword from "./Components/UserEntry/Forgot/ResetPassword";
import Nopage from "./Components/NoPage/Nopage";

function App() {
  // const history = useHistory()
  //   useEffect(()=>{
  //    const getUrls = async() => {

  //     // getting token from header
  //     const token = localStorage.getItem("usertoken")

  //     // validating the header token
  //     const user = decodeToken(token)

  //     if(user) {
  //       history.replace("/")
  //     }

  // // // getting the urls
  // //     try {
  // //       const response = await fetch(`https://url-shortner-backend-itr5.onrender.com/shorturl/all/${user.id}`,{
  // //         method:"GET",
  // //         headers:{
  // //           "user-login-token":localStorage.getItem("usertoken")
  // //         }
  // //       })
  // //      const data = await response.json()
  // //      console.log(data)

  // //     } catch (error) {
  // //      console.log("All Url Error",error)
  // //     }
  //    }

  //    getUrls()

  //   },[])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainDash />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/activate">
          <AccountActivation />
        </Route>
        <Route exact path="/forgot">
          <Forgot />
        </Route>
        <Route exact path="/resetpassword">
          <ResetPassword />
        </Route>

        <Route exact path="**">
          <Nopage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
