import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addListings } from '../Redux/listingsStore';
import Login from './Login';
import { useSelector } from 'react-redux';



export default function AddListing()
{
    const [image,setimage] = useState()
    const error = useSelector((state)=>state.listings.error)
    const logged = useSelector((state)=>state.user.loggedin)
    let listingsDispatch = useDispatch()
    function upload(event)
    {
        event.preventDefault()
        const formdata = new FormData()
        for(let i=0;i<event.target.length-2; i++)
        {
            console.log(event.target[i].value)
            formdata.append(event.target[i].name,event.target[i].value)
        }
        formdata.append("image",image)
        listingsDispatch(addListings(formdata))
        event.target.reset()
    }
   
    return <>{!logged?<Login/>:<div className="bg-blue-800  flex justify-center items-center ">
    <div className="w-[90%] md:w-[50%] mx-auto my-4 p-[1rem] bg-white md:p-[4rem] rounded-md" >
        <h1 className="text-[2rem] sm:text-[3rem] mb-3 font-bold text-blue-600 text-center">Enter the Details</h1>
        <form onSubmit={upload} className="mx-auto flex flex-col gap-[2rem] ">
            <input type="text" name="title" placeholder="Title" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>


            <input type="text" name="address" required placeholder="Address" className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>


            <div className="flex flex-col sm:flex-row gap-3">
            <select name="rent/sell" className="w-[70%] sm:w-[20%] border-[1px] border-blue-600 my-2 text-gray-400 text-[1.1rem]">
            <option disabled selected>Rent/Sell</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
            </select>
  

            <select name="bhk" className="w-[70%] sm:w-[20%] border-[1px] border-blue-600 my-2 text-gray-400 text-[1.1rem]">
                <option disabled selected>Apartment Type</option>
                <option value="1RK">1 RK</option>
                <option value="1BHK">1 BHK</option>
                <option value="2BHK">2 BHK</option>
                <option value="3BHK">3 BHK</option>
                <option value="4BHK">4 BHK</option>
            </select>

            <select name="furnishing" className="w-[70%] sm:w-[20%] border-[1px] border-blue-600 my-2 text-gray-400 text-[1.1rem]">
                <option disabled selected>Furnishing</option>
                <option value="Furnished">Furnished</option>
                <option value="SemiFurnished">SemiFurnished</option>
                <option value="FullyFurnished">FullyFurnished</option>
            </select>
            </div>

   
            <input type="number" required placeholder="Rent" name="rent" className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>


        
            <input type="number" placeholder="Deposit" name="deposit" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>
            <input type="number" placeholder="Builtup" name="builtup" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>
            <input type="text" placeholder="Preferred tenants" name="preference" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>
            <input type="number" placeholder="Available from" name="availability" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>

            <input type="file" required accept="image/jpg,image/jpeg,image/png" name="image" onChange={(e)=>{setimage(e.target.files[0])}}></input>

            <input type="submit" className="cursor-pointer w-[8rem] py-1 text-white rounded-md bg-blue-600 shadow-md shadow-blue-300"></input>
        
        </form>
    </div>
    </div>}
    </>
}