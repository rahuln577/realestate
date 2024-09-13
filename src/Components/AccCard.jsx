import {Link,Navigate} from "react-router-dom"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteListing , myListing,List} from "../Redux/listingsStore";

export default function AccCard(props)
{
    const dispatch = useDispatch()
    function del(event)
    {
        dispatch(deleteListing(props.id))
        dispatch(myListing())
    }
    function edit()
    {
        dispatch(List(props.id));
    }
    const image = process.env.REACT_APP_API_LINK
    return <div className="flex flex-col w-[18rem] my-2 items-center gap-2">
        <Link onClick={edit} to="/editlisting" className="w-[7rem] px-4 text-center bg-green-100  py-1 rounded-[10px] shadow-lg tracking-wider flex flex-row-reverse justify-center gap-2 items-center hover:bg-green-300">Edit<FaRegEdit style={{fontSize:'1.3rem'}}/></Link>
        
        <div className="rounded-[10px] shadow-xl overflow-hidden">
        <img src={image+"/"+props.img} loading="lazy" alt="Loading..." className="flex items-center justify-center max-w-[20rem] min-w-[20rem] min-h-[15rem] max-h-[15rem]"></img>
        <h1 className="text-[1rem] text-center p-2">{props.title}</h1>
        </div>
        <Link className="w-[7rem] px-4 text-center bg-red-100  py-1 rounded-[10px] shadow-lg tracking-wider flex flex-row-reverse justify-center gap-2 items-center hover:bg-red-300" onClick={del}>Delete<MdDelete style={{fontSize:'1.3rem'}}/></Link>
    </div>
}