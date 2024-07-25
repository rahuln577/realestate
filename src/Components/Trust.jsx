import google from '../Images/Trusted/google.png'
import amazon from '../Images/Trusted/amazon.png'
import logitech from '../Images/Trusted/logitech.png'
import spotify from '../Images/Trusted/spotify.png'
import samsung from '../Images/Trusted/samsung.png'
import netflix from '../Images/Trusted/netflix.png'


export default function Trust()
{
    return <div className='mt-[5rem] overflow-hidden w-full'>
        <p className='text-center text-gray-400 m-[2.5rem]'>Trusted by 100+ companies accross the globe</p>
    
        <div className='flex flex-row justify-evenly m-5 trust gap-10'>
            <img src={google} className='grayscale max-w-[10%]'></img>
            <img src={amazon} className='grayscale'></img>
            <img src={logitech} className='grayscale'></img>
            <img src={spotify} className='grayscale'></img>
            <img src={samsung} className='grayscale'></img>
            <img src={netflix} className='grayscale'></img>
            <img src={google} className='grayscale'></img>
            <img src={amazon} className='grayscale'></img>
            <img src={logitech} className='grayscale'></img>
            <img src={spotify} className='grayscale'></img>
            <img src={samsung} className='grayscale'></img>
            <img src={netflix} className='grayscale'></img>
            <img src={google} className='grayscale'></img>
            <img src={amazon} className='grayscale'></img>
            <img src={logitech} className='grayscale'></img>
            <img src={spotify} className='grayscale'></img>
            <img src={samsung} className='grayscale'></img>
            <img src={netflix} className='grayscale'></img>
        </div>
        
    </div>
}