import { useState } from "react"

export default function Registration() {
    const [formdata, setData] = useState({
        partyname: "",
        phone: ""
    })

    const [submitted, setSubmit] = useState(false);
    const [valid, setValid] = useState(false);
    function handlePartyname(event) {
        setData({ ...formdata, partyname: event.target.value });
    }
    function handlePhone(event) {
        setData({ ...formdata, phone: event.target.value })
    }
    const checkValid = () => {
        if (formdata.partyname && formdata.phone) {
            setValid(true);
        }
    }
    function handleSubmit(event) {
        setSubmit(true);
        checkValid();
    }
    return (
        <div className="h-screen flex justify-center items-center">

            <div className=" bg-green-100 p-16 rounded-xl w-1/2 justify-center" >
                <h1 className="font-bold text-xl text-gray-700">New Registration</h1>
                {submitted && valid ? <h1>Registration request sent successfully</h1> : null}
                <form className="space-y-8">
                    <div className="space-y-12 ">
                        <div className=" pt-8">
                            {/* <label htmlFor="partyname" className="form-label">Party Name</label> */}
                            <input type="text" placeholder="Party Name" className="border-2 border-green-700 rounded-md text-xl w-96" onChange={handlePartyname} value={formdata.partyname} name="partyname" id="partyname" />
                            {!formdata.partyname && submitted ? <span>Enter valid input</span> : null}
                        </div>
                        <div className="phone_number">
                            {/* <label htmlFor="" className="">Enter your number</label> */}
                            <input type="text" placeholder="Registered Phone number" className="border-2 border-green-700 rounded-md text-xl w-96" onChange={handlePhone} value={formdata.phone} /*className="storeid"*/ />
                            {!formdata.phone && submitted ? <span> Enter valid input</span> : null}
                            <br />
                        </div>
                    </div>
                    <input type="button" className="rounded-md text-xl float-right pb-1 px-2 text-white bg-green-500 border-2 border-green-900  hover:bg-green-200 hover:text-black" onClick={handleSubmit} value="Register" />
                </form>
            </div>
        </div>
    )
}