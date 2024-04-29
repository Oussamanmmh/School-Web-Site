
import {useRef} from 'react';
import { gsap } from 'gsap';


function NavBar() {
    
    const homeRef = useRef(null);
    gsap.to(homeRef.current, {color: 'blue'});
    return (
        
        <div className="rounded-lg flex p-3  w-full sm:w-3/4 md:w-1/2 lg:w-1/3 justify-center bg-slate-400 mx-auto ">
            <ul className="flex gap-11 ">
               
                <li><a ref={homeRef}  onClick={console.log(homeRef)} href="/home" className="mr-4 hover:underline hover:underline-offset-8">Home</a> </li>
                <li><a href="/home" className="mx-4 hover:underline underline-offset-8">About</a></li>
                <li><a  href="/home" className="mx-4 hover:underline underline-offset-8">Shop</a></li>
                <li><a href="/home " className="ml-4 hover:underline underline-offset-8">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar;