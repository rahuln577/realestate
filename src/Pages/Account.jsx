import AccCard from "../Components/AccCard"
export default function Account()
{
    return <div className="pb-[4rem] flex flex-col justify-center">
        <h1 className="text-center md:text-start text-[2.6rem] mx-[3rem] my-[3rem] font-semibold tracking-wide">Your Listings</h1>
        <div className="flex flex-wrap gap-10 w-fit mx-auto justify-center">
        <AccCard title="2 BHK home at Attiguppe" img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></AccCard>
        <AccCard title="2 BHK home at Attiguppe" img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></AccCard>
        <AccCard title="2 BHK home at Attiguppe" img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></AccCard>
        <AccCard title="2 BHK home at Attiguppe" img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></AccCard>
        <AccCard title="2 BHK home at Attiguppe" img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></AccCard>
        <AccCard title="2 BHK home at Attiguppe" img="https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></AccCard>
        </div>
        <button className="py-2 text-white bg-blue-500 mt-8 w-[10rem] mx-auto shadow-lg rounded-[10px]">Logout</button>
    </div>
}