export default function Sfield()
{
 return <div className='shadow-2xl bg-white rounded-lg lg:h-[25rem] min-h-[23rem] w-[80%] lg:w-[35%] lg:mt-[8%]'>
    <div className="border-b-gray-200 border-b-[2px] flex justify-evenly">
        <button className="border-b-blue-600 border-b-[2px] mb-0 text-blue-600 p-6">For Sale</button>
        <button className="p-6">For Rent</button>
    </div>
    <div className="flex flex-col justify-between h-[70%] items-center mt-6">
        <input type="text" placeholder="Bengaluru,Chennai,etc." className="bg-slate-100 w-[80%] h-[3rem] rounded-xl p-4"></input>
        <select  className="bg-slate-100 w-[80%] h-[3rem] rounded-xl p-3">
            <option value="" disabled selected><p className="text-slate-400">Select Property type</p></option>
            <option value="House">House</option>
            <option value="Garage">Garage</option>
        </select>
        <select default="Bengaluru,Chennai,etc." className="bg-slate-100 w-[80%] h-[3rem] rounded-xl p-3">
            <option value="House">House</option>
            <option value="Garage">Garage</option>
        </select>
        <button className="bg-blue-600 text-white w-[90%] h-[3rem] rounded-[100px]">Search</button>
    </div>
 </div>
}