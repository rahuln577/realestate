import logo from '../Images/logo.png'
import { IoPerson } from "react-icons/io5";
import { MdAddHome } from "react-icons/md";
import {Link,Outlet} from 'react-router-dom'
import {getUser} from '../Redux/userStore'
import {useRef} from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';



export default function Navbar()
{
    const token = localStorage.getItem("real")
    const [men,setmen]=useState([false,false,false,false])
    const dispatch = useDispatch()
    const uname = useSelector((state)=>state.user.uname)
    const logged = useSelector((state)=>state.user.loggedin)
    let flag=false
    const ref=useRef()

    useEffect(()=>{
        if(token)
        dispatch(getUser(token))
    },[uname,logged])

    function ham()
    {
        if(!flag){
        ref.current.classList.add("open");
        
            ref.current.classList.remove("close");
        
        
        flag=true
        }
        else
        {
            flag=false
            ref.current.classList.remove("open");
            ref.current.classList.add("close")
            
        
        }
    }
    function handle(id,val)
    {
        setmen((prev)=>{
  
                return prev.map((value,index)=>{
                    if(index==id)return true
                    return false
                })
   
        })
        if(val==0)ham()
        
    }
    return <nav className="z-[100] flex flex-row justify-between w-[100%] mt-2 sticky py-3  shadow-sm top-0 backdrop-blur-lg bg-white backdrop-opacity-100">
        <div className=" w-full flex justify-end pr-3 lg:ml-0 lg:justify-center items-center z-[-1] absolute">
            <img src={logo} className='w-[8rem] my-auto rounded-md'></img>
        </div>
        <div ref={ref} className='absolute flex flex-col justify-around bg-white h-[25rem] w-[15rem] shadow-md items-center translate-x-[-100%]'>
        <div className='lg:hidden flex flex-col h-[2.5rem] justify-evenly ml-2 cursor-pointer' onClick={ham}>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px] rotate-45'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px] -rotate-45'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px] rotate-45'></div>
        </div>
                <Link to="/" state={{loc:"home"}} className={`${men[0]?'bg-blue-300':'bg-white'} rounded-[100px] px-3 py-1 `} onClick={()=>handle(0,0)}>Home</Link>
                <Link to="/" state={{loc:"about"}} className={`${men[1]?'bg-blue-300':'bg-white'} rounded-[100px] px-3 py-1 `} onClick={()=>handle(1,0)}>About</Link>
                <Link to="/listing" className={`${men[2]?'bg-blue-300':'bg-white'} rounded-[100px] px-3 py-1 `} onClick={()=>handle(2,0)}>Listings</Link>
                <Link to="/" state={{loc:"services"}} className={`${men[3]?'bg-blue-300':'bg-white'} rounded-[100px] px-3 py-1 `} onClick={()=>handle(3,0)}>Services</Link>
                {logged?<Link to="/account" className="py-2 flex flex-row gap-1 items-center" onClick={()=>handle(6)}>My Account</Link>:<Link to="/login" className="py-2 flex flex-row gap-1 font-light text-[1.1rem] items-center" onClick={()=>handle(6)}><IoPerson style={{fontSize:"1.2rem"}}/>Login/Register</Link>}
                <Link to="/addlisting" className="font-light bg-blue-800 w-[9rem] justify-center gap-1 flex flex-row rounded-[90px] text-white py-2 text-[0.95rem]" onClick={()=>handle(6,0)}><MdAddHome style={{color:"white",fontSize:"1.2rem"}}/>Add Listing</Link>
        </div>
        <div className='font-poppins hidden lg:block ml-2'>
            <ul className="py-2 gap-5 list-none font-poppins text-[1.1rem] flex flex-row justify-between font-light items-center">
                <Link to="/" state={{loc:"home"}} className={`${men[0]?'bg-blue-300':''} rounded-[100px] px-3 py-1 `} onClick={()=>handle(0)}>Home</Link>
                <Link to="/" state={{loc:"about"}} className={`${men[1]?'bg-blue-300':''} rounded-[100px] px-3 py-1 `} onClick={()=>handle(1)}>About</Link>
                <Link to="/listing" className={`${men[2]?'bg-blue-300':''} rounded-[100px] px-3 py-1 `} onClick={()=>handle(2)}>Listings</Link>
                <Link to="/" state={{loc:"services"}} className={`${men[3]?'bg-blue-300':''} rounded-[100px] px-3 py-1 `} onClick={()=>handle(3)}>Services</Link>
            </ul>
        </div>
        
        <div className="flex-row gap-4 items-center hidden lg:flex mr-4">
            {logged?<Link to="/account" className="py-2 flex flex-row gap-1 text-[1.3rem] items-center" onClick={()=>handle(6)}>Hi, {uname}</Link>:<Link to="/login" className="py-2 flex flex-row gap-1 font-light text-[1.1rem] items-center" onClick={()=>handle(6)}><IoPerson style={{fontSize:"1.2rem"}}/>Login/Register</Link>}
            <Link to="/addlisting" className="font-light bg-blue-800 w-[9rem] justify-center gap-1 flex flex-row rounded-[90px] text-white py-2 text-[0.95rem]" onClick={()=>handle(6)}><MdAddHome style={{fontSize:"1.2rem"}}/>Add Listing</Link>
        </div>
        <div className='lg:hidden flex flex-col h-[2.5rem] justify-evenly ml-2 cursor-pointer' onClick={ham}>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px]'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px]'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px]'></div>
        </div>
        
    </nav>
}