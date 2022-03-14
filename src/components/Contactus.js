import React,{useState}from 'react'
import './contactusstyle.css'
function Left(){/////////////////////////////////////////////
  const [text,setText]=useState("");
  const [submit,setSubmit]=useState(false);
  const [valid,setValid]=useState(false);

  const handleTextarea=(event)=>{
    setText(event.target.value)
    
  }
  if(!text && submit){
    setSubmit(false);
  }
  const checkValid=()=>{
    if(text!==""){
      setValid(true);
    }
  }
  const onSubmit=()=>{
        setSubmit(true);
        checkValid();
  }
  return(
    <>
           {valid && submit? <div className='alert alert-success'>feedback sent successfully</div>:null}
           <form action="">
             {!text && submit ?  <div> <span>enter valid input</span></div>:null}
            <textarea  cols="60" rows="8" onChange={handleTextarea} placeholder="Enter valid input" value={text}></textarea> <br />
            <button type="button" className='btn btn-outline-success' onClick={onSubmit}>Submit</button>
           </form>
           </>       
  )
}/////////////////////////////////////

function Right(props) {
  var x=props.obj;
  return (
    <div>
      <h1>Contact our Staff</h1>
     <table className='table'>
       <tr>
           <th>Name</th>
           <th>Title</th>
           <th>Contact</th>
       </tr>
       {(x.map(value=>
         <tr>
         <td>{value.name}</td>
         <td>{value.name}</td>
         <td>{value.name}</td>
         </tr>

       ))}
     </table>
    </div>
  )
}


export default function Contactus() {
  const obj=[
    {name:"Asrar Mir",
     title:"sales executive",
     phone:"9622836272"},
    {name:"Waqar Ahmad",
      title:"sales manager",
      phone:"7006688499"}
            ];
            
  return (
   <div className='bdy'>  
     <div className="top">
         <div className='left'>
           <Left/>
         </div>
         <div className='right'>
            <Right obj={obj}/>
          </div>
      </div>

   </div>
  )
}
