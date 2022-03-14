import React, { useState } from 'react'
import "../orderpagestyle.css";
 function Order(props){
     var x=props.list;
        return(  
            <div>
                <h3>Your Order</h3>
                <table className='table table-bordered'>
                    <tr>
                         <th scope='row'>Item Name</th>
                         <th scope='row'>Quantity</th>
                    </tr>
                 
                {(x.map(value=>
                 <tr>
                <td> {value.itemname} </td>
                <td>{value.qty}</td>
                </tr>
                ))}
                </table>
            </div>
     )
 }
var submit=false;
//console.log(displayorder);
export default function Orderpage() {
  
   var arr=["Unilever","Godrej","Dabur","Reckitt benkiser"];
   var item_array=["item1","item2","item3","item4"];
   var item_order=[
                     {itemname:"item1",qty:"4cs"},
                     {itemname:"item2",qty:"3cs"},
                     {itemname:"item3",qty:"2cs"},
                     {itemname:"item4",qty:"1cs"},
                     
                  ]
   const [company]=useState(arr);
   const [items,setItems]=useState([]);
   const [selectedCompany,setcompany]=useState("");
   const [order,setOrder]=[{
                  item_name:"",
                  quantity:""    
                         }] 
   const [submit,setSubmit]=useState(false);                      
   const handleChange=(event)=>{
      //////////////////////////       
   }
   

  return (
    <div className='orderpage' style={{height:"100vh"}}>     
        <div className='company'>
            <h3>Company</h3>
            <ul>
            {(company.map(value=><li key={value} 
            onClick={(event)=>{
                setItems(item_array);
                setcompany(event.target.innerHTML)
                }}>{value}</li>))}
            </ul>
        </div>
      <div className='items' >
            <h2>Item list   {selectedCompany?  <span>of</span>:null} {selectedCompany}</h2>
      <form action="">
        <ol>
            {items.map((value)=>
            <li>
                <label htmlFor="value"  value={value}>{value}</label>
                <input type="text" onChange={handleChange}  id={value} />
            </li>)}
        </ol>
       
       {items[0]? <input type="button" onClick={()=>setSubmit(true)} value="submit"/>:null} 
        </form>
       
        </div>
        <div className='order'>
         
            {submit?<Order list={item_order}/>:null}
        </div>
    </div>
  )
  
}
