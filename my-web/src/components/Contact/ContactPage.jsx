import Navigation from "../Navigation-Bar/Navigation";
import Contact from "../Contact/Contact.jsx";
export default function ContactPage(){
    return(
<div className="flex flex-col">
    <Navigation />
    <section className="flex flex-row text-black w-full  min-w-screen p-4 md:p-8 mt-24">
    <div className="w-1/2">
        <h3 className="font-bold text-[22vh] flex flex-col leading-none">
            <span>LET'S</span> <span>GET IN</span>
            <span className="flex items-center">
            T
            <img src="/smiley_1.svg" className="w-32 h-32 mx-1 hover:w-36 hover:h-36 transition-all duration-300 " alt="smiley" />
            UCH
            </span>
        </h3>
    </div>
<div className="w-1/2 h-full">
     <Contact />
</div>
    </section>
</div>
    )
}