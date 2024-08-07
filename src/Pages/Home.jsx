import Main from '../Components/Main'
import Trust from '../Components/Trust'
import Assist from '../Section/Assist';
import Properties from '../Section/Properties';
import Services from '../Section/Services';
import Neighbour from '../Section/Neighbour';
import Testimonial from '../Section/Testimonial';
export default function Home()
{
    return<div>
        <Main/>
      <Trust/>
      <Assist/>
      <Properties/>
      <Services/>
      <Neighbour/>
      <Testimonial/>
    </div>
}