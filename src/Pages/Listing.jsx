import Filter from "../Components/Filter"
import ListCard from "../Components/ListCard"
import { FaFilter } from "react-icons/fa";
import FilterMob from "../Components/FilterMob"
import {useRef} from "react"

export default function Listing()
{
    const fil=useRef()
    let flag=false;
    function handlefil()
    {
        if(flag)
        {
            
            fil.current.classList.add("filcl")

            fil.current.classList.remove('filapp')
            flag=false
        }
        else{
            flag=true
            fil.current.classList.remove('filcl')
            fil.current.classList.add("filapp")
            //setTimeout(()=>{fil.current.classList.remove('filclanim')},2000)
            
        }
    
    }
    return <div>
    <div className=" flex flex-row justify-between mt-[1rem]">
        <Filter/>
        <FilterMob fil={fil} handle={handlefil}/>
        <div className="w-[100%] lg:w-[65%] mx-4">
        <ListCard title="1 BHK House for rent in attiguppe" second="Independent house,4th cross, 4th main, sampige layout,bengaluru-79" rent="20000" deposit="2000" builtup="200" img="https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" bhk="1" furnish="Furnished" tenant="All" avail="Now"/>
        <ListCard title="1 BHK House for rent in attiguppe" second="Independent house,4th cross, 4th main, sampige layout,bengaluru-79" rent="20000" deposit="2000" builtup="200" img="https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" bhk="1" furnish="Furnished" tenant="All" avail="Now"/>
        <ListCard title="1 BHK House for rent in attiguppe" second="Independent house,4th cross, 4th main, sampige layout,bengaluru-79" rent="20000" deposit="2000" builtup="200" img="https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" bhk="1" furnish="Furnished" tenant="All" avail="Now"/>
        <ListCard title="1 BHK House for rent in attiguppe" second="Independent house,4th cross, 4th main, sampige layout,bengaluru-79" rent="20000" deposit="2000" builtup="200" img="https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" bhk="1" furnish="Furnished" tenant="All" avail="Now"/>
        <ListCard title="1 BHK House for rent in attiguppe" second="Independent house,4th cross, 4th main, sampige layout,bengaluru-79" rent="20000" deposit="2000" builtup="200" img="https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" bhk="1" furnish="Furnished" tenant="All" avail="Now"/>
        <ListCard title="1 BHK House for rent in attiguppe" second="Independent house,4th cross, 4th main, sampige layout,bengaluru-79" rent="20000" deposit="2000" builtup="200" img="https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" bhk="1" furnish="Furnished" tenant="All" avail="Now"/>
        <ListCard title="1 BHK House for rent in attiguppe" second="Independent house,4th cross, 4th main, sampige layout,bengaluru-79" rent="20000" deposit="2000" builtup="200" img="https://images.pexels.com/photos/449461/pexels-photo-449461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" bhk="1" furnish="Furnished" tenant="All" avail="Now"/>

        </div>
    </div>
    <div className="lg:hidden sticky bottom-0 py-[1rem] flex justify-center w-full bg-gray-50 border-t-[1px]" onClick={handlefil}>
            <div className="flex flex-row justify-center w-[100%] items-center gap-1 cursor-pointer">
                <FaFilter style={{fontSize:"1.5rem"}}/>
                <p className="text-[1.2rem]">Filters</p>
            </div>
        </div>
    </div>
}