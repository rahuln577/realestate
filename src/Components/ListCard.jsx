import { MdApartment } from "react-icons/md";
import { GiSofa } from "react-icons/gi";
import { IoManSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function ListCard(props)
{
    const image = process.env.REACT_APP_API_LINK
    return <div className="shadow-lg rounded-lg p-4 mb-[3rem]">
        <div className="py-[1rem] sm:py-[2rem] flex flex-col justify-evenly px-4 bg-blue-100 overflow-hidden rounded-md">
            <h1 className="sm:text-[1rem] text-[0.9rem]">{props.title}</h1>
            <p className="text-[0.75rem] sm:text-[0.9rem] text-gray-500">{props.second}</p>
        </div>
        <div className="flex flex-row justify-between py-3">
            <div className="w-full flex flex-col items-center border-r-black border-r-[1.5px]">
                <h1 className="text-[0.9rem]">Rs.{props.rent}</h1>
                <p className="text-[0.8rem] text-gray-600">Rent</p>
            </div>
            <div className="w-full flex flex-col items-center border-r-black border-r-[1.5px]">
                <h1 className="text-[0.9rem]">Rs.{props.deposit}</h1>
                <p className="text-[0.8rem] text-gray-600">Deposit</p>
            </div>
            <div className="w-full flex flex-col items-center">
                <h1 className="text-[0.9rem]">{props.builtup} sqft</h1>
                <p className="text-[0.8rem] text-gray-600">Builtup</p>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
            <img src={props.img} className="w-[100%]  sm:w-[40%] min-h-[10rem] max-h-[15rem] rounded-[10px]" loading="lazy" alt="..."></img>
            <div className="w-[100%] sm:w-[60%] flex flex-col gap-3">

                

                <div className="grid grid-rows-2 grid-cols-2 w-[100%]  p-2 h-[80%]">

                <div className="flex flex-row items-center gap-2 row-start-1 row-span-1 col-start-1 col-span-1 mx-2">
                    <MdApartment style={{fontSize:"2rem"}}/>
                    <div>
                        <h2 className="text-[0.9rem] sm:text-[1rem]">{props.bhk}</h2>
                        <p className=" text-[0.7rem] sm:text-[0.8rem] text-gray-400">Apartment Type</p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2 row-start-1 row-span-1 col-start-2 col-span-1 mx-2">
                    <GiSofa style={{fontSize:"2rem"}}/>
                    <div>
                        <h2 className="text-[0.9rem] sm:text-[1rem]">{props.furnish}</h2>
                        <p className="text-[0.7rem] sm:text-[0.8rem] text-gray-400">Furnishing</p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2 mx-2 row-start-2 row-span-1 col-start-2 col-span-1">
                    <IoManSharp style={{fontSize:"2rem"}}/>
                    <div>
                        <h2 className="text-[0.9rem] sm:text-[1rem]">{props.tenant}</h2>
                        <p className="text-[0.7rem] sm:text-[0.8rem] text-gray-400">Preferred Tenants</p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2 mx-2 row-start-2 row-span-1 col-start-1 col-span-1">
                    <FaKey style={{fontSize:"1.8rem"}} className="text-[1.5rem] sm:text-[1.8rem]"/>
                    <div>
                        <h2 className="text-[0.9rem] sm:text-[1rem]">{props.avail}</h2>
                        <p className="text-[0.7rem] sm:text-[0.8rem] text-gray-400">Available from</p>
                    </div>
                </div>

                </div>
                <div className="flex flex-row items-center gap-2">
                    <button className="bg-blue-500 text-white p-3 w-[70%] sm:text-[1rem] text-[0.9rem] sm:w-[50%] cursor-pointer rounded-[3px] hover:bg-blue-600">
                        Get Contact Details
                    </button>
                    <button className="flex flex-row border-black border-[1px] p-3 rounded-[3px] justify-center hover:bg-gray-100 mr-3">
                        <FaLocationDot style={{fontSize:"1.5rem",marginRight:"2px"}}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
}