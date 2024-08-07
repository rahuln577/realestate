import logo from '../Images/login.png'
import house from '../Images/house.png'
import {Link,Outlet} from 'react-router-dom'
import {useRef} from 'react'
export default function Navbar()
{
    let flag=false
    const ref=useRef()
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
            ref.current.classList.add("close");
        
        }
    }
    return <nav className="flex flex-row justify-between w-[100%] mt-2 sticky py-3  shadow-sm top-0 backdrop-blur-lg  backdrop-opacity-100">
        <div className="py-2 w-full flex justify-end pr-3 lg:ml-0 lg:justify-center z-[-1] absolute">
            <h2 className='text-[1.2rem] py-1'>Real</h2>
        </div>
        <div ref={ref} className='absolute flex flex-col justify-around bg-white h-[25rem] w-[15rem] shadow-md items-center translate-x-[-100%]'>
        <div className='lg:hidden flex flex-col h-[2.5rem] justify-evenly ml-2 cursor-pointer' onClick={ham}>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px] rotate-45'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px] -rotate-45'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px] rotate-45'></div>
        </div>
                <Link to="/" className='bg-blue-300 rounded-[100px] px-3 py-1'>Home</Link>
                <a href="" className='px-3 py-1'>About</a>
                <a href="" className='px-3 py-1'>Blogs</a>
                <Link to="/listing" className='px-3 py-1'>Listings</Link>
                <a href="" className='px-3 py-1'>Services</a>
                <a href="" className="py-2 flex flex-row gap-1 font-light text-[1.1rem] items-center"><img src={logo} className='w-[50%] h-[100%]'></img>Login/Register</a>
                <button className="font-light bg-blue-800 w-[9rem] justify-center gap-1 flex flex-row rounded-[90px] text-white py-2 text-[0.95rem]"><img src={house} className=''></img>Add Listing</button>
        </div>
        <div className='font-poppins hidden lg:block ml-2'>
            <ul className="py-2 gap-5 list-none font-poppins text-[1.1rem] flex flex-row justify-between font-light items-center">
                <Link to="/" ><p className='bg-blue-300 rounded-[100px] px-3 py-1'>Home</p></Link>
                <a href="">About</a>
                <a href="">Blogs</a>
                <Link to="/listing"><p>Listings</p></Link>
                <a href="">Services</a>
            </ul>
        </div>
        
        <div className="flex-row gap-4 items-center hidden lg:flex mr-4">
            <a href="" className="py-2 flex flex-row gap-1 font-light text-[1.1rem] items-center"><img src={logo} className='w-[100%] h-[100%]'></img>Login/Register</a>
            <button className="font-light bg-blue-800 w-[9rem] justify-center gap-1 flex flex-row rounded-[90px] text-white py-2 text-[0.95rem]"><img src={house} className=''></img>Add Listing</button>
        </div>
        <div className='lg:hidden flex flex-col h-[2.5rem] justify-evenly ml-2 cursor-pointer' onClick={ham}>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px]'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px]'></div>
            <div className='bg-gray-600 w-[2rem] h-[0.2rem] rounded-[100px]'></div>
        </div>
        
    </nav>
}