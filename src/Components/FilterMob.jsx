import Slider from '@mui/material/Slider'
import { useState,useRef } from 'react'
import { useDispatch } from 'react-redux'
import { filterListing } from '../Redux/listingsStore'

export default function FilterMob(props) {
    const dispatch = useDispatch()
    const [slide, setslide] = useState([0, 100])
    const [money, setmoney] = useState([0, 100000])
    let [bhksel,setbhksel] = useState([false,false,false,false,false])
    let bhk = ["1RK","1BHK","2BHK","3BHK","4BHK"]
    function handlebhk(id)
    {
        setbhksel((prev)=>{
            return prev.map((value,index)=>{
                if(index==id)return !value
                return value
            })
        })
    }
    function handlechange(event, newvalue) {
        setslide(newvalue)
        setmoney((prev) => {
            return [Math.floor((slide[0] / 100) * 100000), Math.floor((slide[1] / 100) * 100000)]
        })
    }

    function handlesub(event)
    {
        event.preventDefault()
        let apptype = bhk.filter((value,index)=>{
            return bhksel[index]
        })
        let a = ["Furnished","SemiFurnished","FullyFurnished"]
        let avail = a.filter((value,index)=>{
            if(event.target['type[]'][index].checked)return true
            return false
        })
        let query = {
            minprice:money[0],
            maxprice:money[1],
            appartmentType:apptype,
            availability:event.target["avail"].value,
            furnishing:avail,
            page:1
        }
        dispatch(filterListing(query))
        props.handle()
    }
    
    return <form onSubmit={handlesub} className="flex flex-col items-center shadow-xl rounded-lg w-[100%] h-[100dvh] fixed top-0 bg-white z-10 mb-[6rem] pt-[8rem] translate-y-[-105%]" ref={props.fil}>

<h1 className="border-b-blue-600 border-b-[2.5px] text-center text-[1.2rem] pb-2 w-[90%] mx-auto mt-[-3.5rem]">Filters</h1>
        <div className="w-[90%] mx-auto ">
            <h1 className="font-semibold text-[0.9rem] my-2">BHK Type</h1>
            <div className="flex flex-row gap-3 justify-start my-2">
                <button type="button" className={`${bhksel[0]?"bg-blue-300":"bg-gray-200"} w-[19%] rounded-sm py-2 font-light`} onClick={()=>{handlebhk(0)}}>1 RK</button>
                <button type="button" className={`${bhksel[1]?"bg-blue-300":"bg-gray-200"} w-[19%] rounded-sm py-2 font-light`} onClick={()=>{handlebhk(1)}}>1 BHK</button>
                <button type="button" className={`${bhksel[2]?"bg-blue-300":"bg-gray-200"} w-[19%] rounded-sm py-2 font-light`} onClick={()=>{handlebhk(2)}}>2 BHK</button>
                <button type="button" className={`${bhksel[3]?"bg-blue-300":"bg-gray-200"} w-[19%] rounded-sm py-2 font-light`} onClick={()=>{handlebhk(3)}}>3 BHK</button>
                <button type="button" className={`${bhksel[4]?"bg-blue-300":"bg-gray-200"} w-[19%] rounded-sm py-2 font-light`} onClick={()=>{handlebhk(4)}}>4 BHK</button>
            </div>
        </div>
        <div className='w-[90%] mx-auto'>
            <h1 className="font-semibold text-[0.9rem] my-2">Rent range: Rs.{money[0]} to Rs.{money[1]}</h1>
            <Slider value={slide} onChange={handlechange} getAriaLabel={() => 'Price Range'} />
        </div>
        <div className='w-[90%] mx-auto'>
            <h1 className="font-semibold text-[0.9rem] my-2">Availability</h1>
            <div className='w-full flex justify-evenly items-center'>
            <input type="radio" value="0" className='' id="immediate" name="avail"></input>
            <label for="immediate" className='text-[0.9rem] px-1'>Immediate</label>
            
            <input type="radio" value="30" className='' id="within30" name="avail"></input>
            <label for="within30" className='text-[0.9rem] px-1'>Within 30 days</label>
            
            <input type="radio" value="60" className='' id="within60" name="avail"></input>
            <label for="within60" className='text-[0.9rem] px-1'>Within 60 days</label>
            </div>
        </div>

        <div className='w-[90%] mx-auto my-[2rem]'>
            <h1 className="font-semibold text-[0.9rem] my-2">Furnishing</h1>
            <div className='w-full flex flex-col justify-evenly items-start gap-1'>
            <div>
            <input type="checkbox" value="Furnished" className='' id="appartment" name="type[]"></input>
            <label for="appartment" className='text-[0.9rem] px-1'>Furnished</label>
            </div>

            <div>
            <input type="checkbox" value="SemiFurnished" className='' id="independent" name="type[]"></input>
            <label for="independent" className='text-[0.9rem] px-1'>Semi Furnished</label>
            </div>

            <div>
            <input type="checkbox" value="FullyFurnished" className='' id="gated" name="type[]"></input>
            <label for="gated" className='text-[0.9rem] px-1'>Fully Furnished</label>
            </div>
            </div>
            <div className='flex justify-center my-[0.5rem]'><input type="submit" className='px-[1.5rem] py-2 border-[0.1rem] border-blue-400' value="Filter"></input></div>
        </div>
    </form>
}