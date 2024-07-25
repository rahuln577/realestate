import bedroom from '../Images/bedroom.jpg'
export default function Assistimg()
{
    return<div className='grid grid-cols-2 grid-rows-6 w-[100%] lg:w-[50%] gap-3'>
        <div >
        <img src={bedroom} className='row-start-2 row-end-7 col-start-2 col-end-3 min-w-full min-h-full'></img>
        </div>
        <div className='row-start-1 row-span-3 col-start-1 col-end-2'>
        <img src={bedroom} ></img>
        </div>

    </div>
}