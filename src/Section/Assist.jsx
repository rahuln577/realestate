import Assisttext from "../Components/Assisttext"
import Assistimg from "../Components/Assistimg"
import image from '../Images/Assist/image.png'
import image2 from '../Images/Assist/image2.png'
import Infobox from "../Components/Infobox"
export default function Assist() {
    return <div className="flex flex-col lg:flex-row w-[75%] mx-auto my-[6rem]">
        <Assisttext />
        <Assistimg />
        <div className="flex lg:hidden flex-column justify-center mt-[2rem]">
            <div className="flex flex-row w-[100%] sm:w-[80%] justify-around h-[7rem] rounded-[20px] shadow-xl my-[1rem]">
                <div className="my-auto w-[3rem] m-[1rem]">
                    <img src={image}></img>
                </div>
                <div className="flex flex-col justify-center items-start w-[80%] ml-[1rem]">
                    <p className='text-blue-600 text-[1.1rem]'>We Provide Best Service</p>
                    <p className="text-gray-400 text-[0.9rem]"> Amet cumque ullam assumenda molestiae hic sint?</p>
                </div>
            </div>
        </div>
    </div>
}