import React, { useState } from 'react'
// import { useRef } from 'react/cjs/react.development';
export default function Login(props) {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  //console.log((props.loginRef).current);
  const handleUserNameInputChange = (event) => {
    setValues({ ...values, username: event.target.value })
  }
  const handlePasswordInputChange = (event) => {
    setValues({ ...values, password: event.target.value })
  }
  const stl = {
    textAlign: "center",
  }

  return (
    <div ref={props.loginRef} className="hidden pt-6 border-4" >
      <div className='flex justify-center  items-center'>
        <div className=' border-8 w-[50rem] flex flex-col items-center'>
          <h3 className='font-bold my-3'>Login to your Account</h3>
          <form className='flex flex-col' action=''>
            <div className="my-6">
              <label htmlFor="username" className="mx-3">UserName</label>
              <input type="text" className="form-control" id="username" onChange={handleUserNameInputChange} value={values.username} />
            </div>
            <div className="my-6">
              <label htmlFor="password" className="mx-3"  >Password</label>
              <input type="password" className="form-control" id="password" onChange={handlePasswordInputChange} value={values.password} />
            </div>
            <button type="submit" className="float-right rounded-md text-xl mx-1 pb-1 px-2 text-white bg-green-500 border-2 border-green-900  hover:bg-green-200 hover:text-black">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
