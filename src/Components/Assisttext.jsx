import image from '../Images/Assist/image.png'
import image2 from '../Images/Assist/image2.png'
import Infobox from './Infobox'
export default function Assisttext()
{
    return <div className='w-[100%] lg:w-[50%]'>
        <p className="text-blue-600 tracking-wider my-[1rem]">WHO ARE WE</p>
        <h1 className="text-black text-[2rem] leading-[2.5rem] sm:text-[2.2rem] font-semibold my-[1rem]">Assisting Individuals in finding the appropriate real estate.</h1>
        <p className="text-gray-400 my-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dignissimos omnis sequi adipisci, ipsum eligendi optio voluptates maiores ipsam sint aliquam distinctio magni.</p>
        <Infobox image={image} htext={"We offer the best support"} stext={"Lorem cnjnjjjnnj"}/>
        <Infobox image={image2} htext={"We offer the best homes"} stext={"Lorem cnjnjjjnnj"}/>
    </div>
}