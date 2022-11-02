import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import TypingTech from "../Pages/Typingtech";
import Test from "../Pages/Typingtest";

function AllRoutes() {
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/testspeed" element={<Test />}></Route>
                <Route path="/techniques" element={<TypingTech />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>
        </div>
    )
} 
export default AllRoutes;