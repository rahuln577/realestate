import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {login,newUser} from '../Redux/userStore';
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Login()
{
    const loginDispatch = useDispatch()
    let userData = useSelector((state)=>state.user)
    const navigate = useNavigate()


    function handleLogin(event)
    {
        event.preventDefault()
        let ob = {
            email:event.target['email'].value,
            password:event.target['password'].value
        }
        loginDispatch(login(ob))
    }


    useEffect(()=>{
        if(userData.loggedin)navigate("/")
    },[userData.loggedin])


    return<div className="flex flex-row bg-blue-800 h-[95vh] w-full justify-center items-center">
        <div className=" w-[95%] sm:w-[80%] h-[35rem] flex flex-row bg-white justify-between rounded-[20px] overflow-hidden">
            <div className="w-[100%] md:w-[50%] ">
                <h1 className="text-[3rem] text-blue-600 font-bold text-center my-[2.5rem] md:my-[3rem]">Login</h1>
                <form className="w-[70%] mx-auto h-[35%] flex flex-col justify-between" onSubmit={handleLogin}>
                <div className="flex flex-col">
                    <label for="name" className="text-gray-400">Email</label>
                    <input type="email" required className="border-b-[2px] border-b-blue-600 px-2" name="email"></input>
                </div>
                <div className="flex flex-col my-[1rem]">
                    <label for="name" className="text-gray-400">Password</label>
                    <input type="password" name="password" required className="border-b-[2px] border-b-blue-600 px-2"></input>
                </div>
                <input type="submit" value="Login" className="w-[40%] py-2 shadow-lg shadow-blue-200 rounded-[10px] mx-auto bg-blue-600 text-white cursor-pointer"></input>
                </form>
                {userData.error?<p className="text-center mt-[1rem] mb-[-1rem]">{userData.error}</p>:<p></p>}
                <div className="flex flex-row items-center justify-center my-[2rem]">
                    <div className="w-[25%] md:w-[30%] h-[1px] bg-gray-400"></div>
                    <p className="text-gray-400 text-[0.9rem] mx-2">or login with</p>
                    <div className="w-[25%] md:w-[30%] h-[1px] bg-gray-400"></div>
                </div>

                <div className="flex justify-center gap-5">
                    <FaGoogle style={{fontSize:"2rem",color:"green"}}/>
                    <FaFacebook style={{fontSize:"2rem",color:"blue"}}/>
                </div>

                <div className="flex justify-center my-6">
                    <p className="text-[0.9rem]">Haven't signed up? <Link to="/register" className="text-blue-950 underline">Register Now</Link></p>
                </div>
            </div>
            <img src="https://images.pexels.com/photos/9828293/pexels-photo-9828293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-[50%] h-full md:block hidden">
            </img>
        </div>
    </div>
}