import { RiStarSFill } from "react-icons/ri";
export default function TestCard()
{
    return <div className="w-[95%] sm:w-[28rem] h-[16rem] rounded-[20px] shadow-2xl p-4 flex flex-row justify-center items-center">
        <div className="flex flex-col w-[95%] sm:w-[80%] justify-center gap-2">
            <p className="text-yellow-300 text-[7rem] p-0 mb-[-8rem]">"</p>
            <p className="border-b-gray-300 border-b-[2px] p-3">I am very happpy with the experience. I liked the places. I will reccomend to everyone.</p>
            <div className="flex flex-row justify-between">
                <p className="text-[1.1rem]">Nagarajan V</p>
                <div className="flex flex-row">
                    <RiStarSFill style={{color:"yellow"}}/>
                    <RiStarSFill style={{color:"yellow"}}/>
                    <RiStarSFill style={{color:"yellow"}}/>
                    <RiStarSFill style={{color:"yellow"}}/>
                    <RiStarSFill style={{color:"gray"}}/> 
                    </div>
            </div>
        </div>
    </div>
}