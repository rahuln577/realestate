export default function ServiceCard(prop)
{
    return <div className="flex flex-col items-center justify-center gap-2 rounded-[20px] w-[100%] lg:w-[30%] py-[4rem] shadow-xl bg-white my-4">
        <div className="flex flex-col justify-center items-center w-[78%] gap-4">
        <div className="bg-blue-600 p-4 rounded-[100%] w-[4.5rem] shadow-lg shadow-blue-500">{prop.image}</div>
        <p className="text-[1.1rem]">{prop.head}</p>
        <p className="text-gray-400 text-center">{prop.follow}</p>
        </div>
    </div>
}