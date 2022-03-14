import React,{useState} from 'react'
import "../App.css";



export default function Login() {
  const [values,setValues]=useState({
    username:"",
    password:""
  });
  const handleUserNameInputChange=(event)=>{
    setValues({...values,username:event.target.value})
  }
  const handlePasswordInputChange=(event)=>{
    setValues({...values,password:event.target.value})
  }
  const stl={
    textAlign:"center",
  }

  return (
  <div className="container" >
<form id="login" action=''>
  <h3 style={stl}>Login to your Account</h3>
  <div className="mb-3">
    <label htmlFor="username"  className="form-label">UserName </label>
    <input type="text" className="form-control" id="username" onChange={handleUserNameInputChange} value={values.username}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label"  >Password</label>
    <input type="password" className="form-control" id="password" onChange={handlePasswordInputChange} value={values.password} />
  </div>
  <button type="submit" className="btn btn-outline-success">Submit</button>
</form>
    </div>
  )
}
