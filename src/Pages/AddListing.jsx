export default function AddListing()
{
    return <div className="bg-blue-800  flex justify-center items-center ">
    <div className="w-[90%] md:w-[50%] mx-auto my-4 p-[1rem] bg-white md:p-[4rem] rounded-md" >
        <h1 className="text-[2rem] sm:text-[3rem] mb-3 font-bold text-blue-600 text-center">Enter the Details</h1>
        <form className="mx-auto flex flex-col gap-[2rem] ">
            <input type="text" placeholder="Title" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>


            <input type="text" required placeholder="Address" className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>


            <div className="flex flex-col sm:flex-row gap-3">
            <select className="w-[70%] sm:w-[20%] border-[1px] border-blue-600 my-2 text-gray-400 text-[1.1rem]">
            <option disabled selected>Rent/Sell</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
            </select>
  

            <select className="w-[70%] sm:w-[20%] border-[1px] border-blue-600 my-2 text-gray-400 text-[1.1rem]">
                <option disabled selected>Apartment Type</option>
                <option value="1RK">1 RK</option>
                <option value="1BHK">1 BHK</option>
                <option value="2BHK">2 BHK</option>
                <option value="3BHK">3 BHK</option>
                <option value="4BHK">4 BHK</option>
            </select>

            <select className="w-[70%] sm:w-[20%] border-[1px] border-blue-600 my-2 text-gray-400 text-[1.1rem]">
                <option disabled selected>Furnishing</option>
                <option value="1RK">Furnished</option>
                <option value="1BHK">SemiFurnished</option>
                <option value="2BHK">FullyFurnished</option>
            </select>
            </div>

   
            <input type="number" required placeholder="Rent" className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>


        
            <input type="number" placeholder="Deposit" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>
            <input type="number" placeholder="Builtup" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>
            <input type="text" placeholder="Preferred tenants" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>
            <input type="number" placeholder="Available from" required className="border-b-[2px] border-b-blue-600 px-2 text-[1.1rem]"></input>

            <input type="file"></input>

            <input type="submit" className="w-[8rem] py-1 text-white rounded-md bg-blue-600 shadow-md shadow-blue-300"></input>
        
        </form>
    </div>
    </div>
}