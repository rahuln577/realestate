import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Loading()
{
    useGSAP(()=>{
        gsap.to("#gear",{
            rotate:360,
            duration:1.5,
            repeat:-1
        })
    })
    return <div className="min-h-[100vh] flex items-center justify-center min-w-[100vw] fixed top-0 z-[200] bg-white">
        <img src={require("../Images/gear.png")} className="w-[15rem]" id="gear"></img>
    </div>
}