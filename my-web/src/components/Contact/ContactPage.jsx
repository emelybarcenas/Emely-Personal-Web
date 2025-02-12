import Navigation from "../Navigation-Bar/Navigation";
import Contact from "../Contact/Contact.jsx";
import ScribbleBg from "../Scribble-Animation/ScribbleBg.jsx";
import Scene from "../Scribble-Animation/Scene.jsx";
export default function ContactPage(){
    return(
<main>            
<div className="flex flex-col">
    <Navigation />
    <section className="flex flex-row text-black w-full  min-w-screen p-4 md:p-8 mt-24 bg-transparent ">
    <div className="w-1/2">
        <h3 className="font-bold text-[22vh] flex flex-col leading-none">
            <span className="pointer-events-auto">LET'S</span> <span className="pointer-events-auto">GET IN</span>
            <span className="flex items-center pointer-events-auto">
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
</main>
    )
}