import Assisttext from "../Components/Assisttext"
import Assistimg from "../Components/Assistimg"
import image from '../Images/Assist/image.png'
import image2 from '../Images/Assist/image2.png'
import React from "react"

export default React.memo((props) => {
    return <div className="flex flex-col lg:flex-row w-[80%] mx-auto py-[6rem]" id="about" ref={props.reff}>
        <Assisttext />
        <Assistimg />
        <div className="flex lg:hidden flex-column justify-center mt-[0rem]">
            <div className="flex flex-row w-[100%] sm:w-[80%] justify-around h-[7rem] rounded-[20px] shadow-xl my-[1rem]">
                <div className="my-auto w-[3rem] m-[1rem]">
                    <img src={image}></img>
                </div>
                <div className="flex flex-col justify-center items-start w-[80%] ml-[1rem]">
                    <p className='text-blue-600 text-[1rem]'>We Provide Best Service</p>
                    <p className="text-gray-400 text-[0.8rem]"> Amet cumque ullam assumenda molestiae hic sint?</p>
                </div>
            </div>
        </div>
        <div className="flex lg:hidden flex-column justify-center mt-[-1rem]">
            <div className="flex flex-row w-[100%] sm:w-[80%] justify-around h-[7rem] rounded-[20px] shadow-xl my-[1rem]">
                <div className="my-auto w-[3rem] m-[1rem]">
                    <img src={image2}></img>
                </div>
                <div className="flex flex-col justify-center items-start w-[80%] ml-[1rem]">
                    <p className='text-blue-600 text-[1rem]'>We Provide Best Satisfaction</p>
                    <p className="text-gray-400 text-[0.8rem]"> Amet cumque ullam assumenda molestiae hic sint?</p>
                </div>
            </div>
        </div>
    </div>
})