import AccCard from "../Components/AccCard"
import { useDispatch } from "react-redux"
import {logout} from '../Redux/userStore'
import { useNavigate } from "react-router-dom"
import { myListing } from "../Redux/listingsStore"
import { useEffect , useState } from "react"
import { useSelector } from "react-redux"
import Loading from '../Pages/Loading'

export default function Account()
{
    const [loadanim,setloadanim] = useState(true)
    const dispatch = useDispatch()
    const list = useSelector((state)=>state.listings.listdata)
    const loading = useSelector((state)=>state.listings.loading)
    const image = process.env.REACT_APP_API_LINK
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(myListing())
    },[])
    function logout1()
    {
        dispatch(logout())
        navigate('/')
    }
    useEffect(()=>{
        let inte
        if(!loading){
            inte = setTimeout(()=>{setloadanim(false)},500)
        }
        else{
            setloadanim(true)
        }
        return ()=>{clearTimeout(inte)}
    },[loading])

   
    return <div className="pb-[4rem] flex flex-col min-h-[80vh]">
        <h1 className="text-center md:text-start text-[2.6rem] mx-[3rem] my-[3rem] font-semibold tracking-wide">Your Listings</h1>
        <div className="flex flex-wrap gap-10 w-fit mx-auto justify-center">
        {loadanim?<Loading/>:Array.isArray(list)?list.map((value,index)=>{
            return <AccCard title={value.title} key={index} img={value.image} id={value.listingid}></AccCard>
        }):<></>}
        </div>
        <button className="py-2 text-white bg-blue-500 mt-8 w-[10rem] ml-[3rem] shadow-lg rounded-[10px]" onClick={logout1}>Logout</button>
    </div>}
