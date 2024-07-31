import bedroom from '../Images/house1.jpg'
import house2 from '../Images/house2.jpg'
import house3 from '../Images/house3.jpg'
import {useState,useEffect} from 'react'
let car=[bedroom,house2,house3]

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
    return <div className='w-[90%] md:w-[80%] lg:w-[50%] flex flex-col justify-center'>
        <div className='ml-[8%]'>
        <p className="text-blue-400 -tracking-tight my-3">REAL ESTATE</p>
        <h1 className="text-[2.6rem] md:text-[3rem] font-semibold leading-[2.5rem] sm:leading-[3rem] my-6 ">Find a Perfect <br/>home  you Love ..!</h1>
        <p className="text-gray-400 my-6 w-[100%]">ur, quod dolorum, consectetur facere totam ducimus, nulla excepturi alias perferendis doloribus illo.</p>
        </div>
        <div>
        <div className='w-[100%] flex flex-col justify-center '>
        <div className='flex flex-row items-center min-w-[100%]'>
            <button className='rounded-[50%] bg-white shadow-lg w-[3rem] h-[3rem] text-gray-400 left-5 relative' onClick={()=>setcarstate((prev)=>{if(prev==0)return 2
                else return prev-1
            })}>{'<'}</button>
            <img src={car[carstate]} className='min-w-[80%] max-h-[15rem] sm:max-w-[40rem] sm:max-h-[20rem] rounded-2xl shadow-2xl'></img>
            <button className='rounded-[50%] bg-white shadow-lg w-[3rem] h-[3rem] text-gray-400 relative right-5' onClick={()=>setcarstate((prev)=>(prev+1)%3)}>{'>'}</button>
        </div>
        <div className='flex justify-evenly min-w-[90%] sm:max-w-[95%] mt-3'>
            <div className={`w-[20%] h-[0.3rem] rounded-[100px] ${carstate==0?"bg-blue-600":"bg-slate-400"}`}></div>
            <div className={`w-[20%] h-[0.3rem] rounded-[100px] ${carstate==1?"bg-blue-600":"bg-slate-400"}`}></div>
            <div className={`w-[20%] h-[0.3rem] rounded-[100px] ${carstate==2?"bg-blue-600":"bg-slate-400"}`}></div>
        </div>
        </div>
        </div>
    </div>
}