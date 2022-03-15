import React, { useState } from 'react'
function Left() {
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleTextarea = (event) => {
    setText(event.target.value)

  }
  if (!text && submit) {
    setSubmit(false);
  }
  const checkValid = () => {
    if (text !== "") {
      setValid(true);
    }
  }
  const onSubmit = () => {
    setSubmit(true);
    checkValid();
  }
  return (
    <div className='flex justify-center my-20'>
      <div>
        {valid && submit ? <div className='alert alert-success'>feedback sent successfully</div> : null}
        <form className='' action="">
          {!text && submit ? <div> <span>enter valid input</span></div> : null}
          <textarea className='border-2 border-green-600' cols="70" rows="10" onChange={handleTextarea} placeholder="Enter valid input" value={text}></textarea> <br />
          <button type="button" className='rounded-md text-xl mx-1 pb-1 px-2 text-white bg-green-500 border-2 border-green-900  hover:bg-green-200 hover:text-black' onClick={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}/////////////////////////////////////

function Right(props) {
  var x = props.obj;
  return (
    <div className='my-20' >
      <div className='space-y-7  '>
        <h1 className='text-2xl text-gray-700 font-bold text-center '>Contact our Staff</h1>
        <table className='table w-4/5 content-center mx-auto'>
          <tr className='h-8 border-2 '>
            <th className="border-2 ">Name</th>
            <th className="border-2 ">Title</th>
            <th className="border-2 ">Contact</th>
          </tr>
          {(x.map(value =>
            <tr className='border-2 h-10 text-center'>
              <td className='border-2 '>{value.name}</td>
              <td className='border-2 '>{value.title}</td>
              <td className='border-2 '>{value.phone}</td>
            </tr>

          ))}
        </table>
      </div>
    </div>
  )
}


export default function Contactus() {
  const obj = [
    {
      name: "Asrar Mir",
      title: "sales executive",
      phone: "9622836272"
    },
    {
      name: "Waqar Ahmad",
      title: "sales manager",
      phone: "7006688499"
    }
  ];

  return (

    <div className="flex justify-between mt-32 bg-green-50">
      <div className='flex-1'>
        <Left />
      </div>
      <div className='flex-1 '>
        <Right obj={obj} />
      </div>
    </div>


  )
}
