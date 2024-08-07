import Slider from '@mui/material/Slider'
import { useState } from 'react'
export default function Filter() {
    const [slide, setslide] = useState([0, 100])
    const [money, setmoney] = useState([0, 100000])
    function handlechange(event, newvalue) {
        setslide(newvalue)
        setmoney((prev) => {
            return [Math.floor((slide[0] / 100) * 100000), Math.floor((slide[1] / 100) * 100000)]
        })
    }
    return <div className="lg:block hidden shadow-xl rounded-lg w-[30%] h-[31rem] py-4 sticky top-[17%] left-4 mb-[6rem]">
        <h1 className="border-b-blue-600 border-b-[2.5px] text-center text-[1.2rem] pb-2 w-[90%] mx-auto">Filters</h1>
        <div className="w-[90%] mx-auto my-[2rem]">
            <h1 className="font-semibold text-[0.9rem] my-2">BHK Type</h1>
            <div className="flex flex-row gap-3 justify-start my-2">
                <button className="bg-gray-200 w-[19%] rounded-sm py-2 font-light">1 RK</button>
                <button className="bg-gray-200 w-[19%] rounded-sm py-2 font-light">1 BHK</button>
                <button className="bg-gray-200 w-[19%] rounded-sm py-2 font-light">2 BHK</button>
                <button className="bg-gray-200 w-[19%] rounded-sm py-2 font-light">3 BHK</button>
                <button className="bg-gray-200 w-[19%] rounded-sm py-2 font-light">4 BHK</button>
            </div>
        </div>
        <div className='w-[90%] mx-auto'>
            <h1 className="font-semibold text-[0.9rem] my-2">Rent range: Rs.{money[0]} to Rs.{money[1]}</h1>
            <Slider value={slide} onChange={handlechange} getAriaLabel={() => 'Price Range'} />
        </div>
        <div className='w-[90%] mx-auto'>
            <h1 className="font-semibold text-[0.9rem] my-2">Availability</h1>
            <div className='w-full flex justify-evenly items-center'>
            <input type="radio" value="Immediate" className='' id="immediate" name="avail"></input>
            <label for="immediate" className='text-[0.9rem] px-1'>Immediate</label>
            
            <input type="radio" value="within30" className='' id="within30" name="avail"></input>
            <label for="within30" className='text-[0.9rem] px-1'>Within 30 days</label>
            
            <input type="radio" value="within60" className='' id="within60" name="avail"></input>
            <label for="within60" className='text-[0.9rem] px-1'>Within 60 days</label>
            </div>
        </div>

        <div className='w-[90%] mx-auto my-[2rem]'>
            <h1 className="font-semibold text-[0.9rem] my-2">Property type</h1>
            <div className='w-full flex flex-col justify-evenly items-start gap-1'>
            <div>
            <input type="checkbox" value="appartment" className='' id="appartment" name="type"></input>
            <label for="appartment" className='text-[0.9rem] px-1'>Appartment</label>
            </div>

            <div>
            <input type="checkbox" value="independent" className='' id="independent" name="type"></input>
            <label for="independent" className='text-[0.9rem] px-1'>Independent Villa</label>
            </div>

            <div>
            <input type="checkbox" value="gated" className='' id="gated" name="type"></input>
            <label for="gated" className='text-[0.9rem] px-1'>Gated Community</label>
            </div>
            </div>
        </div>
    </div>
}