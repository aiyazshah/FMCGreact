import React, { useState } from 'react'
function Order(props) {
    var x = props.list;
    return (
        <div className='flex flex-col pt-3'>
            <h3 className='text-center text-2xl font-bold pt-2'>Your Order</h3>
            <table className='border-2 w-3/4 self-center bg-green-100 rounded-md'>
                <tr className=' h-8' />
                <th>Item Name</th>
                <th>Quantity</th>
                <tr />

                {(x.map(value =>
                    <tr className='text-center h-8'>
                        <td className='border-2'> {value.itemname} </td>
                        <td className='border-2'>{value.qty}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
var submit = false;
//console.log(displayorder);
export default function Orderpage() {

    var arr = ["Unilever", "Godrej", "Dabur", "Reckitt benkiser", "Verka", "Nivea"];
    var item_array = ["item1", "item2", "item3", "item4"];
    var item_order = [
        { itemname: "item1", qty: "4cs" },
        { itemname: "item2", qty: "3cs" },
        { itemname: "item3", qty: "2cs" },
        { itemname: "item4", qty: "1cs" },

    ]
    const [company] = useState(arr);
    const [items, setItems] = useState([]);
    const [selectedCompany, setcompany] = useState("");
    const [order, setOrder] = [{
        item_name: "",
        quantity: ""
    }]
    const [submit, setSubmit] = useState(false);
    const handleChange = (event) => {
        //////////////////////////       
    }


    return (
        <div className='flex h-[95vh] mt-6'>
            <div className='company flex flex-col mt-3  flex-1 items-center'>
                <div><h3 className='font-bold text-2xl'> Select Company</h3></div>
                <ul>
                    {(company.map(value => <li className='my-3 border-2 w-72 font-semibold text-center bg-green-50 rounded-md border-gray-200' key={value}
                        onClick={(event) => {
                            setItems(item_array);
                            setcompany(event.target.innerHTML)
                        }}>{value}</li>))}
                </ul>
            </div>
            <div className='mt-3 flex-1 text-center' >
                <div>
                    <h2 className='font-bold text-2xl'>   {selectedCompany ? <span>Item list of</span> : null} {selectedCompany}</h2>
                </div>
                <form className='my-3' action="">
                    <ol>
                        {items.map((value) =>
                            <li className='my-3 border-2 bg-green-100 border-gray-400 rounded-md h-12 pt-2 text-base font-semibold'>
                                <label htmlFor="value" value={value}>{value}</label>
                                <input className='mx-3 bg-white rounded-md' type="text" onChange={handleChange} id={value} />
                            </li>)}
                    </ol>

                    {items[0] ? <input type="button" className='rounded-md text-xl mx-1 pb-1 px-2 text-white bg-green-500 border-2 border-green-900  hover:bg-green-200 hover:text-black' onClick={() => setSubmit(true)} value="submit" /> : null}
                </form>

            </div>
            <div className='flex-1'>

                {submit ? <Order list={item_order} /> : null}
            </div>
        </div>
    )

}
