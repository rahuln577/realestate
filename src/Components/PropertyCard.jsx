import bedlogo from '../Images/bedlogo.png'
import bathlogo from '../Images/bathlogo.png'
export default function PropertyCard(prop)
{
    let api = process.env.REACT_APP_API_LINK
    return<div className='flex flex-col w-[80%] sm:min-w-[18rem] my-6'>
        <img src={prop.image} className='w-[100%] md:w-[17rem] h-[16rem] rounded-[20px]'></img>
        <div className='flex flex-col gap-1'>
            <h2 className='mt-2 text-[1.2rem] font-semibold'>Rs. {prop.amount}</h2>
            <p className='text-[0.9rem]'>{prop.place}</p>
            <p className='text-gray-500 font-light text-[0.8rem]'>{prop.address}</p>
            <div className='flex flex-row gap-7'>
                <div className='flex flex-row gap-1 items-center'>
                    <img src={bedlogo} className='w-[1.5rem]'></img>
                    <p className='text-[0.7rem]'>{prop.nobeds} Beds</p>
                </div>
                <div className='flex flex-row gap-1 items-center'>
                    <img src={bathlogo} className='max-w-[1.3rem]'></img>
                    <p className='text-[0.7rem]'>{prop.nobaths} Baths</p>
                </div>
            </div>
        </div>
    </div>
}