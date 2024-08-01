import { CiPhone } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

export default function Footer()
{
    return <div>
    <div className="w-full bg-blue-200 flex flex-col md:flex-row justify-around gap-4 items-center py-[3rem]">
        <div className="flex flex-col gap-5 w-[40%] md:w-[20%]">
            <p className="text-[0.9rem] font-light">171,8th cross,4th main,<br/>Sampige layout, Bengaluru, Karnataka</p>
            <p className="text-[0.9rem] flex flex-row gap-1 items-center font-light"><CiPhone/>+91-987777343</p>
            <p className="text-[0.9rem] flex flex-row gap-1 items-center font-light"><MdOutlineMail/>example@realestate.com</p>
        </div>
        <div className="md:flex flex-col gap-1 hidden justify-center ">
            <h3 className="mb-3">Quick Links</h3>
            <a href="#" className="text-[0.9rem]">Home</a>
            <a href="#" className="text-[0.9rem]">About</a>
            <a href="#" className="text-[0.9rem]">Listings</a>
            <a href="#" className="text-[0.9rem]">Services</a>
        </div>
        <div className="flex flex-col gap-1 w-[40%] md:w-[20%]">
            <h3 className="mb-3">Subscribe To Our News Letter</h3>
            <input type="text" placeholder="Enter your Email" className="h-7 bg-blue-100 rounded-[10px] p-1"></input>
        </div>
    </div>
    <div className="w-full bg-blue-300">
            <h2 className="text-center p-1">All Copyrights Reserved.</h2>
    </div>
    </div>
}