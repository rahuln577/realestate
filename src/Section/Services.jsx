import ServiceCard from "../Components/ServiceCard"
import { FaBed } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
export default function Services()
{
    return <div className="bg-gray-100 flex flex-col justify-center items-center py-[4rem]">
        <div className="w-[80%] flex flex-col justify-center items-center">
        <p className="text-black tracking-wider my-[1rem]">SERVICES</p>
        <h1 className="text-black text-[2rem] leading-[2.5rem] sm:text-[2.2rem] font-semibold my-[1rem]">We provide the best services</h1>
        <div className="flex flex-col lg:flex-row justify-between mt-[2rem]">
        <ServiceCard image={<FaBed style={{fontSize:"2.5rem",color:"white"}}/>} head="Rent a house" follow="You can buy the best houses at best prices"/>
        <ServiceCard image={<FaSearch style={{fontSize:"2.5rem",color:"white"}}/>} head="Buy a New home" follow="You can buy the best houses at best prices"/>
        <ServiceCard image={<FaHome style={{fontSize:"2.5rem",color:"white"}}/>} head="Sell a New home" follow="You can buy the best houses at best prices"/>
        </div>
        </div>
    </div>
}