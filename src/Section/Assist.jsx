import Assisttext from "../Components/Assisttext"
import Assistimg from "../Components/Assistimg"
export default function Assist()
{
    return<div className="flex flex-col lg:flex-row w-[75%] mx-auto my-[6rem]">
        <Assisttext/>
        <Assistimg/>
    </div>
}