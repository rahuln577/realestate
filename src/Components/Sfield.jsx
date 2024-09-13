import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {setQuery} from "../Redux/listingsStore"
import Listing from "../Pages/Listing"

export default function Sfield()
{
    const dis = useDispatch()
    let [sorr,setsorr] = useState([true,false])
    let sell = ["sell","rent"]
    const navigate = useNavigate()
    function handlesub(event)
    {
        event.preventDefault()
        let query={
            rent:sorr[0]?sell[0]:sell[1],
            furnishing:[event.target["prop"].value],
            appartmentType:[event.target["BHK"].value]
        }
        dis(setQuery(query));
        navigate("/listing")
    }
    function rclick(id){
        setsorr((prev)=>{
            return prev.map((value,index)=>{
                if(index==id)return true
                return false
            })
        })
    }
 return <form onSubmit={handlesub} className='shadow-2xl bg-white rounded-lg lg:h-[25rem] min-h-[23rem] w-[80%] lg:w-[35%] lg:mt-[8%]'>
    <div className="border-b-gray-200 border-b-[2px] flex justify-evenly">
        <button type="button" className={`${sorr[0]?"border-b-blue-600 text-blue-600 border-b-[2px]":""} mb-0 p-6`} onClick={()=>rclick(0)}>For Sale</button>
        <button type="button" className={`${sorr[1]?"border-b-blue-600 text-blue-600 border-b-[2px]":""} mb-0 p-6`} onClick={()=>rclick(1)}>For Rent</button>
    </div>
    <div className="flex flex-col justify-between h-[70%] items-center mt-6">
        <input type="text" placeholder="Bengaluru,Chennai,etc." className="bg-slate-100 w-[80%] h-[3rem] rounded-xl p-4"></input>
        
        <select required className="bg-slate-100 w-[80%] h-[3rem] rounded-xl p-3" name="prop">
            <option value="" disabled selected><p className="text-slate-400">Select Property type</p></option>
            <option value="Furnished">Furnished</option>
            <option value="FullyFurnished">Fully Furnished</option>
            <option value="SemiFurnished">Semi Furnished</option>
        </select>
        <select required default="Bengaluru,Chennai,etc." className="bg-slate-100 w-[80%] h-[3rem] rounded-xl p-3" name="BHK">
            <option disabled>BHK</option>
            <option value="1RK">1 RK</option>
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="3BHK">3 BHK</option>
        </select>
        <input type="submit" className="bg-blue-600 text-white w-[90%] h-[3rem] rounded-[100px] cursor-pointer" value="Search"></input>
    </div>
 </form>
}