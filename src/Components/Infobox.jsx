export default function Infobox({image,htext,stext,visible})
{
    return <div className="lg:flex flex-row hidden w-[22rem] justify-around h-[7rem] rounded-[20px] shadow-xl my-[1rem]">
        <div className="my-auto w-[3rem] m-[1rem]">
            <img src={image}></img>
        </div>
        <div className="flex flex-col justify-center items-start w-[80%] ml-[1rem]">
            <p className='text-blue-600 text-[1.1rem]'>{htext}</p>
            <p className="text-gray-400 text-[0.9rem]">{stext}</p>
        </div>
    </div>
}