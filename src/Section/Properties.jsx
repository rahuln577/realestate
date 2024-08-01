import PropertyCard from "../Components/PropertyCard"
import bedroom from '../Images/bedroom.jpg'
export default function Properties() {
    let posts=[{
        image:"https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amount:"20,00,000",
        place:"Duplex house by the road",
        address:"4th cross,Bengaluru",
        nobeds:3,
        nobaths:2
    },
    {
        image:"https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amount:"80,00,000",
        place: "Triplex house by the road",
        address:"6th cross,Bengaluru",
        nobeds:2,
        nobaths:7
    },
    {
        image:"https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amount:"200,000",
        place:"House by the road",
        address:"8th cross,Bengaluru",
        nobeds:3,
        nobaths:0
    },
    {
        image:"https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amount:"80,00,000",
        place:"Villa",
        address:"4th cross,Chennai",
        nobeds:3,
        nobaths:2
    },
    {
        image:"https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        amount:"20,000",
        place:"Hut by the road",
        address:"4th cross,Andhra",
        nobeds:7,
        nobaths:2
    }]
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
            {posts.map((value,index)=><PropertyCard image={value.image} amount={value.amount} place={value.place} address={value.address} nobeds={value.nobeds} nobaths={value.nobaths}></PropertyCard>)}
            
            <button className="text-blue-600 min-w-[30%] md:min-w-[10rem] h-[2.5rem] rounded-[100px] bg-white-600 border-blue-600 border-[1px] hover:bg-blue-600 hover:text-white">View All</button>
        </div>
    </div>
}