import './App.css';

import { BrowserRouter,  Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import InstagramScreen from "./screens/InstagramScreen";
import LoginScreen from "./screens/LoginScreen";
import SigninScreen from "./screens/SigninScreen";



function App() {
  return (

    <div >
    <BrowserRouter>
  <NavBar/>

    <Routes>
           <Route path="/" element={<HomeScreen/>} />
           <Route path="/instagram" element={<InstagramScreen/>} />
           <Route path="/signin" element={<SigninScreen/>} />
           <Route path="/login" element={<LoginScreen/>} />
          
      </Routes>
  
   </BrowserRouter>
 </div>
  );
}

export default App;
