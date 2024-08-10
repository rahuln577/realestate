import bedroom from '../Images/house1.jpg'
import house2 from '../Images/house2.jpg'
import house3 from '../Images/house3.jpg'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import {useState,useEffect} from 'react'
let car=["https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/8134849/pexels-photo-8134849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]

export default function Caroussel()
{
    let [carstate,setcarstate]=useState(0)
    let interval
    useEffect(()=>{
        
        interval=setInterval(()=>{
            setcarstate((prev)=>{
                return (prev+1)%3
            })
            
        },3000)
        return () => clearInterval(interval);
        
    },[])
    return <div className='w-[90%] md:w-[80%] lg:w-[50%] flex flex-col justify-center items-center'>
        <div className='ml-[8%]'>
        <p className="text-blue-400 -tracking-tight my-3">REAL ESTATE</p>
        <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[2.5rem] sm:leading-[3rem] my-6 ">Find a Perfect <br/>home  you Love ..!</h1>
        <p className="text-gray-400 my-6 w-[100%]">ur, quod dolorum, consectetur facere totam ducimus, nulla excepturi alias perferendis doloribus illo.</p>
        </div>
        <div>
        <div className='w-[100%] flex flex-col justify-center '>
        <div className='flex flex-row items-center max-w-[95%] sm:max-w-[100%]'>
            <button className='flex justify-center items-center rounded-[50%] bg-white shadow-lg w-[1.8rem] h-[1.8rem] sm:w-[3rem] sm:h-[3rem] text-gray-400 left-[3%] relative' onClick={()=>setcarstate((prev)=>{if(prev===0)return 2
                else return prev-1
            })}><FaArrowLeft style={{fontSize:"1rem",color:"black"}}/></button>
            <img src={car[carstate]} className='w-[90%] h-[15rem] sm:max-w-[40rem] sm:h-[18rem] rounded-2xl shadow-2xl'></img>
            <button className='rounded-[50%] bg-white shadow-lg w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] text-gray-400 relative right-[3%] flex justify-center items-center' onClick={()=>setcarstate((prev)=>(prev+1)%3)}><FaArrowRight style={{fontSize:"1rem",color:"black"}}/></button>
        </div>
        <div className=' justify-evenly max-w-[95%] sm:max-w-[100%] mt-3 flex'>
            <div className={`w-[20%] h-[0.3rem] rounded-[100px] ${carstate==0?"bg-blue-600":"bg-slate-400"}`}></div>
            <div className={`w-[20%] h-[0.3rem] rounded-[100px] ${carstate==1?"bg-blue-600":"bg-slate-400"}`}></div>
            <div className={`w-[20%] h-[0.3rem] rounded-[100px] ${carstate==2?"bg-blue-600":"bg-slate-400"}`}></div>
        </div>
        </div>
        </div>
    </div>
}