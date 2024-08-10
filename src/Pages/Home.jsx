import Main from '../Components/Main'
import Trust from '../Components/Trust'
import Assist from '../Section/Assist';
import Properties from '../Section/Properties';
import Services from '../Section/Services';
import Neighbour from '../Section/Neighbour';
import Testimonial from '../Section/Testimonial';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Home(props)
{
    
  const location = useLocation()
  const user = location.state || {}
  const about=useRef(null)
  const services=useRef(null)
  const home=useRef(null)
    useEffect(()=>{
        switch(user.loc){
          case "home":
            home?.current.scrollIntoView({behaviour:"smooth",block:'start'})
            break
          case "services":
            services?.current.scrollIntoView({behaviour:"smooth",block:'start'})
            break
          case "about":
            about?.current.scrollIntoView({behaviour:"smooth",block:'start'})
            break
        }
        if(user.loc=="about")about?.current.scrollIntoView({behaviour:"smooth",block:'start'})
    },[user])
    return<div ref={home}>
        <Main/>
      <Trust/>
      <Assist reff={about}/>
      <Properties/>
      <Services reff={services}/>
      <Neighbour/>
      <Testimonial/>
    </div>
}