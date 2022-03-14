import { useState } from "react"

export default function Registration(){
   const [formdata,setData]=useState({
       partyname:"",
       phone:""
   })
   
   const [submitted,setSubmit]=useState(false);  
   const [valid,setValid]=useState(false);
       function handlePartyname(event){
        setData({...formdata,partyname:event.target.value});
    }   
    function handlePhone(event){
        setData({...formdata,phone:event.target.value})
    }
    const checkValid=()=>{
        if(formdata.partyname && formdata.phone){
          setValid(true);
        }
    }
      function handleSubmit(event){
        setSubmit(true);
        checkValid();
    }
    return(
        <div style={{backgroundColor:"#7fffd4", height:"100vh"}}>
        <div  className="container" >
        <h1>Registration</h1>
         {submitted && valid?<h1>Registration request sent successfully</h1>:null} 
        <form>
         <div className="party_name">
           <label htmlFor="partyname" className="form-label">Party Name</label>
           <input type="text" className="form-control" onChange={handlePartyname} value={formdata.partyname} name="partyname" id="partyname"/>
          { !formdata.partyname && submitted?<span>Enter valid input</span>:null} 
         </div>
         <div className="phone_number">
             <label htmlFor="" className="form-label">Enter your number</label>
             <input type="text" className="form-control" onChange={handlePhone} value={formdata.phone} /*className="storeid"*/ />
             {!formdata.phone && submitted?<span> Enter valid input</span>:null}
             <br />
         </div>
         <input type="button"  className="btn  btn-outline-success" onClick={handleSubmit} value="Register"/>
        </form>
        </div>
        </div>
    )
}