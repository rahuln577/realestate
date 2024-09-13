import PropertyCard from "../Components/PropertyCard"
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { filterListing,setQuery } from "../Redux/listingsStore"
import { useNavigate } from "react-router-dom"

export default function Properties() {
    const [sel,setsel] = useState([true,false,false])
    const navigate = useNavigate()
    const listings = useSelector((state)=>state.listings.listdata)
    const query = useSelector((state)=>state.listings.query)
    const dispatch = useDispatch()

    useEffect(()=>{
        setQuery({})
        dispatch(filterListing(query))
    },[query])

    function select(id)
    {
        setsel((prev)=>{
            return prev.map((value,index)=>{
                return index==id
            })
        })
        switch(id)
        {
            case 0:dispatch(setQuery({}))
            break
            case 1:dispatch(setQuery({rent:"rent"}))
            break
            case 2:dispatch(setQuery({rent:"sell"}))
        }
    }
    
    return <div className="flex flex-col w-[80%] mx-auto my-[3rem]">
        <div className="flex md:flex-row flex-col w-[100%] md:items-center justify-between">
            <div>
                <p className="text-blue-600 tracking-wider my-2">CHECK OUT OUR NEW</p>
                <h1 className="text-black text-[2rem] leading-[2.5rem] sm:text-[2.2rem] font-semibold my-[1rem]">Latest listed properties</h1>
                <p className="text-gray-400 my-[1rem]">New listings everyday</p>
            </div>
            <div className="flex flex-row gap-4">
                <button className={` min-w-[30%] md:min-w-[7rem] h-[2.5rem] rounded-[100px] ${sel[0]?"bg-blue-600 text-white":"bg-white text-blue-600"} border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white`} onClick={()=>select(0)}>All</button>
                <button className={` min-w-[30%] md:min-w-[7rem] h-[2.5rem] rounded-[100px] ${sel[1]?"bg-blue-600 text-white":"bg-white text-blue-600"} border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white`} onClick={()=>select(1)}>Sell</button>
                <button className={` min-w-[30%] md:min-w-[7rem] h-[2.5rem] rounded-[100px] ${sel[2]?"bg-blue-600 text-white":"bg-white text-blue-600"} border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white`} onClick={()=>select(2)}>Rent</button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row overflow-scroll gap-6 items-center justify-center md:justify-start">
            {Array.isArray(listings.data)?listings.data.map((value,index)=><PropertyCard image={value.image} amount={value.price} place={value.title} address={value.address} nobeds={value.nobeds} nobaths={value.nobaths} key={index}></PropertyCard>):<></>}
            
            <button className="text-blue-600 min-w-[30%] md:min-w-[10rem] h-[2.5rem] rounded-[100px] bg-white-600 border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white" onClick={()=>navigate("/listing")}>View All</button>
        </div>
    </div>
}