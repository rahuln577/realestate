import PropertyCard from "../Components/PropertyCard"
import bedroom from '../Images/bedroom.jpg'
export default function Properties() {
    return <div className="flex flex-col w-[80%] mx-auto my-[3rem]">
        <div className="flex md:flex-row flex-col w-[100%] md:items-center justify-between">
            <div>
                <p className="text-blue-600 tracking-wider my-2">CHECK OUT OUR NEW</p>
                <h1 className="text-black text-[2rem] leading-[2.5rem] sm:text-[2.2rem] font-semibold my-[1rem]">Latest listed properties</h1>
                <p className="text-gray-400 my-[1rem]">New listings everyday</p>
            </div>
            <div className="flex flex-row gap-4">
                <button className="text-white min-w-[30%] md:min-w-[7rem] h-[2.5rem] rounded-[100px] bg-blue-600 border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white">All</button>
                <button className="text-blue-600  min-w-[30%] md:min-w-[7rem] h-[2.5rem] rounded-[100px] bg-white-600 border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white">Sell</button>
                <button className="text-blue-600 min-w-[30%] md:min-w-[7rem] h-[2.5rem] rounded-[100px] bg-white-600 border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white">Rent</button>
            </div>
        </div>
        <div className="flex flex-col md:flex-row overflow-scroll gap-6 items-center justify-center md:justify-start">
            <PropertyCard image={bedroom} amount="20,000" place="Duplex house by the road" address="4th cross, Bengaluru" nobeds={4} nobaths={2}></PropertyCard>
            <PropertyCard image={bedroom} amount="20,000" place="Duplex house by the road" address="4th cross, Bengaluru" nobeds={4} nobaths={2}></PropertyCard>
            <PropertyCard image={bedroom} amount="20,000" place="Duplex house by the road" address="4th cross, Bengaluru" nobeds={4} nobaths={2}></PropertyCard>
            <PropertyCard image={bedroom} amount="20,000" place="Duplex house by the road" address="4th cross, Bengaluru" nobeds={4} nobaths={2}></PropertyCard>
            <PropertyCard image={bedroom} amount="20,000" place="Duplex house by the road" address="4th cross, Bengaluru" nobeds={4} nobaths={2}></PropertyCard>
            <button className="text-blue-600 min-w-[30%] md:min-w-[10rem] h-[2.5rem] rounded-[100px] bg-white-600 border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white">View All</button>
        </div>
    </div>
}