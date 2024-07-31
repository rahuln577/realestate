export default function Neighbour() {
    return <div className="w-[80%] mx-auto my-[5rem]">
        <p className="text-blue-600 tracking-wider my-[1rem]">AREAS ACCROSS THE TOWN</p>
        <h1 className="text-black text-[2rem] leading-[2.5rem] sm:text-[2.2rem] font-semibold my-[1rem]">Neighborhood Properties</h1>
        <div className="hidden md:grid grid-cols-10 grid-rows-2 w-full h-[35rem] gap-[2rem] lg:gap-[3rem] my-[2rem]">
            <div className="bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-1 col-span-3 md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-3  bg-[url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                <h1 className="text-white text-[2.5rem] font-semibold">216</h1>
                <p className="text-white opacity-100 text-[0.9rem] font-semibold">Bengaluru, Karnataka</p>
            </div>
            <div className="bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-4 col-span-3  bg-[url('https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg')] flex flex-col items-start justify-end p-4" >
                <h1 className="text-white text-[2.5rem] font-semibold">216</h1>
                <p className="text-white opacity-100 text-[0.9rem] font-semibold">Bengaluru, Karnataka</p></div>
            <div className="bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-7 col-span-4  bg-[url('https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                <h1 className="text-white text-[2.5rem] font-semibold">216</h1>
                <p className="text-white opacity-100 text-[0.9rem] font-semibold">Bengaluru, Karnataka</p></div>
            <div className="bg-center rounded-[20px] bg-cover row-start-2 row-span-1 col-start-1 col-span-4  bg-[url('https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                <h1 className="text-white text-[2.5rem] font-semibold">216</h1>
                <p className="text-white opacity-100 text-[0.9rem] font-semibold">Bengaluru, Karnataka</p></div>
            <div className="bg-center rounded-[20px] bg-cover row-start-2 row-span-1 col-start-5 col-span-6  bg-[url('https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                <h1 className="text-white text-[2.5rem] font-semibold">216</h1>
                <p className="text-white opacity-100 text-[0.9rem] font-semibold">Bengaluru, Karnataka</p></div>
        </div>

        <div className="flex md:hidden flex-row justify-around gap-4 mt-[1.5rem]">
            <div className="flex flex-col w-[50%] gap-4">
                <div className="h-[8rem] bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-1 col-span-3 md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-3  bg-[url('https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                    <h1 className="text-white text-[2rem] font-semibold">216</h1>
                    <p className="text-white opacity-100 text-[0.7rem] font-semibold">Bengaluru, Karnataka</p>
                </div>
                <div className="h-[8rem] bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-1 col-span-3 md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-3  bg-[url('https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg')] flex flex-col items-start justify-end p-4" >
                    <h1 className="text-white text-[2rem] font-semibold">216</h1>
                    <p className="text-white opacity-100 text-[0.7rem] font-semibold">Bengaluru, Karnataka</p>
                </div>
                <div className="h-[8rem] bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-1 col-span-3 md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-3  bg-[url('https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                    <h1 className="text-white text-[2rem] font-semibold">216</h1>
                    <p className="text-white opacity-100 text-[0.7rem] font-semibold">Bengaluru, Karnataka</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-[50%]">
                <div className="h-[8rem] bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-1 col-span-3 md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-3  bg-[url('https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                    <h1 className="text-white text-[2rem] font-semibold">216</h1>
                    <p className="text-white opacity-100 text-[0.7rem] font-semibold">Bengaluru, Karnataka</p>
                </div>
                <div className="h-[8rem] bg-center rounded-[20px] bg-cover row-start-1 row-span-1 col-start-1 col-span-3 md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-3  bg-[url('https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] flex flex-col items-start justify-end p-4" >
                    <h1 className="text-white text-[2rem] font-semibold">216</h1>
                    <p className="text-white opacity-100 text-[0.7rem] font-semibold">Bengaluru, Karnataka</p>
                </div>
            </div>
        </div>
    </div>
}