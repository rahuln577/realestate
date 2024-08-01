import TestCard from "../Components/TestCard"
export default function Testimonial()
{
    return <div className="flex flex-col lg:flex-row w-[80%] mx-auto justify-between items-center my-[7rem]">
        <div className="w-[100%] lg:w-[50%] mb-[2rem]">
        <p className="text-blue-600 tracking-wider my-[1rem]">TESTOMONIALS</p>
        <h1 className="text-black text-[2rem] leading-[2.5rem] sm:text-[2.2rem] font-semibold my-[1rem] tracking-wider">Look What Our <br></br>Customers Say.</h1>
        <p className="text-gray-400">Ratione, ducimus aliquam. Odit laboriosam veniam sequi! Repudiandae deserunt velit corporis. Enim!</p>
        </div>
        <TestCard/>
    </div>
}