
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';
import Navbar from './components/Navbar.js';
import Login from './components/Login.js';
import About from './components/About';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Orderpage from './components/Orderpage';
import Adminpage from './components/AdminPage';
import Registration from './components/Registration';
// import Test from './components/Test';
function App() {
  const loginRef = useRef(null);
  const login = () => {
    (loginRef.current).style.display = "block";

  }

  return (
    <Router>
      <div className='relative'>
        <Navbar login={login} />
        <Login loginRef={loginRef} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/orderpage' element={<Orderpage />} />
          <Route path='/adminpage' element={<Adminpage />} />
          <Route path='registration' element={<Registration className="registration" />} />
          {/* <Route path='/test' element={<Test/>}/> */}

        </Routes>
      </div>
    </Router>

  );
}


export default App;
