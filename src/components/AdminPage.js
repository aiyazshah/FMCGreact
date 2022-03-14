import { useState } from 'react';
import './adminpagestyle.css';
export default function AdminPage(){
    const partyListArray=["aiyaz","aamir","younis","irham"];////////
    const itemsObj=[{itemname:"item1",quantity:"2cs"},
                    {itemname:"item2",quantity:"2cs"},
                    {itemname:"item3",quantity:"2cs"},
                    {itemname:"item4",quantity:"2cs"}     
                    ];                                          
    const [partyList,setPartyList]=useState([]);
    const [selectedParty,selectParty]=useState("");
    const [partyOrder,setOrder]=useState([]);
    const displayOrderList=(value)=> <li key={value.itemname}> {value.itemname} {value.quantity}</li>
    
        
    function displayOrder(){
        setOrder(itemsObj);  
    }
     
    const makeList=(x)=> <li onClick={handleOnclick}  key={x} >{x}</li>;
    function handleOnclick(event){
      selectParty(event.target.innerHTML);
      displayOrder();
    }
    //const d=(new Date()).toLocaleDateString();
    const [cd,setDate]=useState();///cd->current date
    
    function handleDate(event){
        var dat=event.target.value;
        setDate(dat);
       setPartyList(partyListArray);
    }
    return(
    <div className="adminpage">
        <div className="row1 borderred" >
            <div className='date borderblue'>
                <h1>Select Date</h1>
                <input type="date" onChange={handleDate} value={cd}/>
            </div>
            <div className="party bordergreen">
           {selectedParty?<h3>order on {cd}</h3>:null} 
                <ul>
                    {partyList.map(makeList)}
                    
                </ul>
            </div>
            </div>
        <div  className="order bordergreen">
           {selectedParty ? <h1>Order For {selectedParty}</h1>:null} 
           <ul>
             {partyOrder? partyOrder.map(displayOrderList):null}
           </ul>
        </div>
        <div  className="registration borderblue"><h1>Registration Requests</h1></div>
    </div>
    )
}