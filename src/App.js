import { Route, Routes } from 'react-router';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
// import { Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App_wrapper">
      <Navbar />
      {/* <div>
        <Link to="/" >Homepage</Link> ||
        <Link to="/signin" >Signin</Link> ||
        <Link to="/signup" >Signup</Link>
      </div> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
