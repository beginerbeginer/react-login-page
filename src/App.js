import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import './App.css';
import LoginForm from './components/LoginForm';

const App = () => {

  const adminUser = {
    email: "1111",
    password: "2222"
  }
const [user, setUser] = useState({name: "", email: ""});
const [error, setError] = useState("");

const Login = details => {
  console.log(details);
  
  if (details.email == adminUser.email && details.password == adminUser.password) {
    console.log("Login")
    setUser({
      name: details.name,
      email: details.email
    })
  } else {
    console.log("not match");
    setError("Details do not match")
  }
}

const Logout = () => {
  console.log("logout");
  setUser({name: "", email: ""});
}

  return (
    <div className="App">
      {(user.email != "") ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
      ) : (
        <LoginForm Login={Login} error={error} /> 
      )}
    </div>
  )
} 


export default App;
