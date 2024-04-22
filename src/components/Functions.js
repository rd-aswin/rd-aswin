import { animateScroll as scroll, scroller } from 'react-scroll';
const scrollTo = (Id)=>{
    scroller.scrollTo(Id, {
        duration:800,
        delay:0,
        smooth:'easeInOutQuart'
    })
}

export default scrollTo