import {Link} from "react-router-dom"
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function AccCard(props)
{
    return <div className="flex flex-col w-[18rem] my-2 items-center gap-2">
        <Link className="w-[7rem] px-4 text-center bg-green-100  py-1 rounded-[10px] shadow-lg tracking-wider flex flex-row-reverse justify-center gap-2 items-center hover:bg-green-300">Edit<FaRegEdit style={{fontSize:'1.3rem'}}/></Link>
        
        <div className="rounded-[10px] shadow-xl overflow-hidden">
        <img src={props.img}></img>
        <h1 className="text-[1rem] text-center p-2">{props.title}</h1>
        </div>
        <Link className="w-[7rem] px-4 text-center bg-red-100  py-1 rounded-[10px] shadow-lg tracking-wider flex flex-row-reverse justify-center gap-2 items-center hover:bg-red-300">Delete<MdDelete style={{fontSize:'1.3rem'}}/></Link>
    </div>
}