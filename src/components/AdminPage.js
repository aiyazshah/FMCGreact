import { useState } from 'react';
import './adminpagestyle.css';
export default function AdminPage() {
    const partyListArray = ["aiyaz", "aamir", "younis", "irham"];////////
    const itemsObj = [{ itemname: "item1", quantity: "2cs" },
    { itemname: "item2", quantity: "3cs" },
    { itemname: "item3", quantity: "5cs" },
    { itemname: "item4", quantity: "7cs" }
    ];
    const [partyList, setPartyList] = useState([]);
    const [selectedParty, selectParty] = useState("");
    const [partyOrder, setOrder] = useState([]);
    const displayOrderList = (value) => <tr className='border-2' > <td className='border-2 border-gray-200 w-72'> {value.itemname} </td> <td className='border-2 border-gray-200 w-72'>{value.quantity} </td> </tr>
    // <li className='text-center border-2' key={value.itemname}> {value.itemname} {value.quantity}</li>


    function displayOrder() {
        setOrder(itemsObj);
    }

    const makeList = (x) => <li className='border-2 bg-green-100' onClick={handleOnclick} key={x} >{x}</li>;
    function handleOnclick(event) {
        selectParty(event.target.innerHTML);
        displayOrder();
    }
    //const d=(new Date()).toLocaleDateString();
    const [cd, setDate] = useState();///cd->current date

    function handleDate(event) {
        var dat = event.target.value;
        setDate(dat);
        setPartyList(partyListArray);
    }
    return (
        <div className="flex bg-green-50 border-2 h-[90vh] pt-6 text-xl border-blue-900">
            <div className="border-4 border-fuchsia-800 flex-1" >
                <div className='ml-6 text-center'>
                    <h1 className=''>Select Date</h1>
                    <input className='w-72' type="date" onChange={handleDate} value={cd} />
                </div>
                <div className="ml-6 mt-6 text-center">
                    {selectedParty ? <h3 className='border-2 bg-green-400 text-white'>Order on {cd}</h3> : null}
                    <ul>
                        {partyList.map(makeList)}

                    </ul>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
                {selectedParty ? <h1 className='text-center'>Order For {selectedParty}</h1> : null}
                <div className='pt-6'>
                    <table className='text-center border-[3px] border-gray-300 bg-green-100'>
                        {selectedParty ? <tr className='border-2 font-bold'>
                            <td className='border-2'>Item name</td>
                            <td className='border-2'>Quantity</td>
                        </tr> : null}
                        {partyOrder ? partyOrder.map(displayOrderList) : null}
                    </table>
                </div>
            </div>
            <div className="flex-1 flex justify-center text-center ">
                <div>
                    <h1> New Registration Requests</h1>
                    <table className='text-center  border-[3px] border-gray-300 mt-6'>
                        <th className='justify-center'>
                            <td className='border-2 w-72'>Party Name</td>
                            <td className='border-2 w-72'>Number</td>
                        </th>
                    </table>
                </div>

            </div>
        </div>
    )
}