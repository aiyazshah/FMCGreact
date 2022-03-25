import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className="bg-green-200 h-12">
      <div className="flex justify-between pt-1">
        <div className="flex  space-x-4">
          <div>
            <a className="ml-2 font-bold text-2xl" href="/">Khan Sales</a>
          </div>

          <ul className="flex space-x-4 font-sans text-xl mt-1 ">
            <Link to='/about'>
              <li className="hover:underline decoration-green-600 decoration-4"> About
              </li>
            </Link>
            <Link to='/orderpage'>
              <li className="hover:underline decoration-green-600 decoration-4"> Order Page
              </li>
            </Link>

            <Link to='/contactus'>
              <li className="hover:underline decoration-green-600 decoration-4"> Contact Us
              </li>
            </Link>
            <Link to='/adminpage'>
              <li className="hover:underline decoration-green-600 decoration-4"> Admin
              </li>
            </Link>
            <Link to='/registration'>
              <li className="hover:underline decoration-green-600 decoration-4"> Regisration
              </li>
            </Link>
          </ul>
        </div>
        <Link to='/login'>

          <button className=" rounded-md text-xl mx-1 pb-1 px-2 text-white bg-green-500 border-2 border-green-900  hover:bg-green-200 hover:text-black" onClick={props.login} type="submit">Login</button>
        </Link>
      </div>
      <hr className='mt-4 h-2 w-full bg-green-400' />
    </nav>
  )
}
