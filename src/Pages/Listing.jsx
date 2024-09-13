import Filter from "../Components/Filter"
import ListCard from "../Components/ListCard"
import { FaFilter } from "react-icons/fa";
import FilterMob from "../Components/FilterMob"
import {useRef,useEffect,useState} from "react"
import { useSelector,useDispatch } from "react-redux";
import { fetchListings,filterListing } from "../Redux/listingsStore";
import Loading from "./Loading";


export default function Listing()
{
    let [loadanim,setloadanim] = useState(true)
    let prev1 = useRef()
    let next1 = useRef()
    const [page,setpage] = useState(1)
    let data = useSelector((state)=>state.listings.listdata)
    let filter  = useSelector((state)=>state.listings.query)
    let loading = useSelector((state)=>state.listings.loading)
    let dispatch = useDispatch()
    useEffect(()=>{
        console.log(filter)
        dispatch(filterListing({...filter,page:page}))
    },[page,filter])
    const fil=useRef()
    let flag=false;
    useEffect(()=>{
        let inter
        if(!loading){
            inter = setTimeout(()=>{
                setloadanim(false)
            },500)
        }
        else setloadanim(true)
        return ()=>{clearTimeout(inter)}
    },[loading])
    function handlefil()
    {
        if(flag)
        {
            
            fil.current.classList.add("filcl")

            fil.current.classList.remove('filapp')
            flag=false
        }
        else{
            flag=true
            fil.current.classList.remove('filcl')
            fil.current.classList.add("filapp")
            //setTimeout(()=>{fil.current.classList.remove('filclanim')},2000)
            
        }
    
    }
    function next(event)
    {
        if(page+1<=data.total_pages){
            setpage((prev)=>prev+1)
        }
        if(page==data.total_pages)
            event.target.disabled=true
        
        prev1.current.disabled=false
    }

    function prev(event)
    {
        if(page-1>0){
            setpage((prev)=>prev-1)
        }
        if(page==1)event.target.disabled=true
        next1.current.disabled=false
    }


    if(loadanim)return<Loading/>
    return <div>
    <div className=" flex flex-row justify-between mt-[1rem]">
        <Filter />
        <FilterMob fil={fil} handle={handlefil}/>
        <div className="w-[100%] lg:w-[65%] mx-4">
        {Array.isArray(data?.data)?data?.data.map((value,index)=>{
            return  <ListCard title={value.title} second={value.address} rent={value.price} deposit={value.deposit} builtup={value.builtup} img={value.image} bhk={value.appartmentType} furnish={value.furnishing} tenant={value.preferance} avail={value.availability}/>
        }):<></>}
        <div className="flex flex-row items-center justify-center gap-4">
            <button ref={prev1} onClick={prev} className="text-white text-[1.1rem] mb-[1rem] bg-blue-500 rounded-lg p-[0.5rem] px-[1.5rem]">Prev</button>
            <p className="text-[1.1rem]">{page}/{data.total_pages}</p>
            <button ref={next1} onClick={next}className="text-white text-[1.1rem] mb-[1rem] bg-blue-500 rounded-lg p-[0.5rem] px-[1.5rem]">Next</button>
        </div>
        </div>
    </div>
    <div className="lg:hidden sticky bottom-0 py-[1rem] flex justify-center w-full bg-gray-50 border-t-[1px]" onClick={handlefil}>
            <div className="flex flex-row justify-center w-[100%] items-center gap-1 cursor-pointer">
                <FaFilter style={{fontSize:"1.5rem"}}/>
                <p className="text-[1.2rem]">Filters</p>
            </div>
        </div>
    
    </div>
}