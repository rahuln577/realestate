import Caroussel from "./Caroussel"
import Sfield from './Sfield'
export default function Main()
{
    return <div className="flex flex-row justify-center mt-[2rem]  " >
    <div className="rounded-b-[800px] bg-blue-600 w-[100vw] h-[80vh] gradient absolute z-[-1]">
    </div>
        <div className="flex flex-col lg:flex-row w-[100vw] sm:w-[90%] md:w-[80%] gap-[4rem] justify-between items-center"> 
        <Caroussel/>
        <Sfield/>
        </div>
    
    </div>
}