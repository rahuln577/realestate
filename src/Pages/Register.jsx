import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import {newUser} from "./../Redux/userStore"


export default function Register()
{
    let userDispatch = useDispatch()
    const navigate = useNavigate()
    function handle(e)
    {
    let ob={}
    for(let i=0;i<e.target.length;i++)
    {
        console.log(e.target[i].value)
        ob[e.target[i].name]=e.target[i].value
    }
    userDispatch(newUser(ob))
    navigate("/login")
    }

    return<div className="flex flex-row bg-blue-800 h-[110vh] w-full justify-center items-center">
        <div className="w-[95%] sm:w-[80%] h-[49rem] flex flex-row bg-white justify-between rounded-[20px] overflow-hidden ">
            <div className="w-[100%] md:w-[50%]">
                <h1 className="text-[3rem] text-blue-600 font-bold text-center my-[3rem]">Register</h1>
                <form onSubmit={handle} className="w-[70%] mx-auto h-[60%] flex flex-col gap-2 justify-evenly">
                <div className="flex flex-col">
                    <label for="name" className="text-gray-400">Name</label>
                    <input type="text" name="uname" required className="border-b-[2px] border-b-blue-600 px-2"></input>
                </div>
                <div className="flex flex-col">
                    <label for="name" className="text-gray-400">Email</label>
                    <input type="email" name="email" required className="border-b-[2px] border-b-blue-600 px-2"></input>
                </div>
                <div className="flex flex-col">
                    <label for="name" className="text-gray-400">Phone</label>
                    <input type="phone" name="phone" required className="border-b-[2px] border-b-blue-600 px-2"></input>
                </div>
                <div className="flex flex-col">
                    <label for="name" className="text-gray-400">Password</label>
                    <input type="password" required className="border-b-[2px] border-b-blue-600 px-2"></input>
                </div>
                <div className="flex flex-col">
                    <label for="name" className="text-gray-400">ReEnter Password</label>
                    <input type="password" name="password" required className="border-b-[2px] border-b-blue-600 px-2"></input>
                </div>
                <input type="submit" value="Login" className="w-[40%] py-2 shadow-lg shadow-blue-200 rounded-[10px] mx-auto bg-blue-600 text-white"></input>
                </form>

                <div className="flex flex-row items-center justify-center ">
                    <div className="w-[25%] md:w-[30%] h-[1px] bg-gray-400"></div>
                    <p className="text-gray-400 text-[0.9rem] mx-2">or signup with</p>
                    <div className="w-[25%] md:w-[30%] h-[1px] bg-gray-400"></div>
                </div>

                <div className="flex justify-center gap-5 mt-4">
                    <FaGoogle style={{fontSize:"2rem",color:"green"}}/>
                    <FaFacebook style={{fontSize:"2rem",color:"blue"}}/>
                </div>

                <div className="flex justify-center my-6">
                    <p className="text-[0.9rem]">Already signed up? <Link to="/login" className="text-blue-950 underline">Login Now</Link></p>
                </div>
            </div>
            <img src="https://images.pexels.com/photos/462205/pexels-photo-462205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-[50%] h-full md:block hidden">
            </img>
        </div>
    </div>
}