import bedroom from '../Images/bedroom.jpg'
export default function Assistimg()
{
    return<div className='grid grid-cols-2 grid-rows-6 w-[100%] lg:w-[50%] gap-2 sm:gap-4 min-h-[20rem] sm:min-h-[30rem] mt-[2rem]'>
        <div className='shadow-2xl bg-hero2 bg-cover bg-center bg-no-repeat col-start-2 col-span-1 rounded-[20px] row-start-1 row-end-4'>
        </div>
        <div className='shadow-2xl bg-hero bg-cover bg-center row-start-2 row-span-7 rounded-[20px] col-start-1 col-end-2'>
        </div>
        <div className='shadow-2xl bg-hero3 bg-cover bg-center row-start-4 row-span-2 rounded-[20px] col-start-2 col-end-3'>
        </div>
    </div>
}