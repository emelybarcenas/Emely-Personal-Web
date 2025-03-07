import { Link} from 'react-router-dom';

import {useState, useEffect} from "react";
export default function About(){

 const [isMobile, setIsMobile] = useState(false);
 const [windowWidth,setWindowWidth] = useState(window.innerWidth);
 const [isIpad, setIsIpad] = useState(false);

 useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 768) {
      setIsMobile(true); // Set to true if mobile
      setIsIpad(false); // Ensure it's not an iPad
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      setIsIpad(true); // Set to true if it's iPad (10th Gen, typically)
      setIsMobile(false); // Ensure it's not mobile
    } else {
      setIsMobile(false); // Set to false if it's neither mobile nor iPad
      setIsIpad(false); // Ensure it's not iPad
    }
  };



    window.addEventListener("resize", handleResize); 
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


return(

<div>
  {!isMobile && (
<section className="h-auto w-[100vw] pb-[1vh] bg-white top-0 flex flex-col">
<h3 className="text-[#212121] font-sans font-bold text-[16vw] w-[100vw] leading-none mb-10 ml-1 mr-1 mt-0 whitespace-nowrap overflow-hidden flex justify-center">
  ABOUT ✦ ME
</h3>


<section className="meText text-[1.5vw] mb-[7vh] ml-[5vw] w-2/3 leading-relaxed">
  <span>
    With experience in <strong>software</strong> development, graphic <strong>design</strong>, and marketing, I love crafting engaging <strong>user
    experiences</strong>-whether it’s through <strong>web development</strong>, UI/UX design, or interactive projects. My goal is to bridge the gap
    between design and technology, ensuring that every project is not only visually compelling but also user-friendly,
    <strong> efficient</strong>, and impactful.  
  </span>
  <a href="/about-page">
  <span className="ml-4 font-bold underline cursor-pointer whitespace-nowrap">Read More</span> ↗
  </a>
</section>


<div className={`content flex ${window.innerWidth > 1200 ? "flex-row" : "flex-col"}`}>
<div className="textArea flex flex-col gap-[2vw] ml-[5vw]">
  {/* Row 1: Technical & Design */}
  <div className="flex flex-col md:flex-row gap-[3vw]">
    {/* Technical Section */}
    <section className="w-full md:w-1/2">
      <div className="contentSection mb-8">
        <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-4xl font-bold leading-none uppercase mb-4">
          Technical
        </h3>
        <h3 className="font-semibold mb-2 text-xl">Programming Languages:</h3>
        <p className="text-[#212121] text-lg mb-2">Java, JavaScript, HTML/CSS</p>
        <h3 className="font-semibold mb-2 text-xl">Front-end Development:</h3>
        <p className="text-[#212121] text-lg mb-2">React, Tailwind CSS</p>
        <h3 className="font-semibold mb-2 text-xl">Tools:</h3>
        <p className="text-[#212121] text-lg mb-2">SQLite, GitHub, IntelliJ IDEA, VS Code</p>
      </div>
    </section>

    {/* Design Section */}
    <section className="w-full md:w-1/2">
      <div className="contentSection mb-8">
        <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-4xl font-bold leading-none uppercase mb-4">
          Design
        </h3>
        <h3 className="font-semibold mb-2 text-xl">Adobe Creative Suite:</h3>
        <p className="text-[#212121] mb-2 text-lg">Photoshop, Illustrator, After Effects, InDesign, Premiere Pro</p>
        <h3 className="font-semibold mb-2 text-xl">UI/UX & Design:</h3>
        <p className="text-[#212121] mb-2 text-lg">Figma, Canva</p>
        <h3 className="font-semibold mb-2 text-xl">3D:</h3>
        <p className="text-[#212121] mb-2 text-lg">Blender</p>
      </div>
    </section>
  </div>

  {/* Row 2: Certifications & Experience */}
  <div className="flex flex-col md:flex-row gap-[3vw]">
    {/* Certifications Section */}
    <section className="w-full md:w-1/2">
      <div className="contentSection mb-8">
        <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-4xl font-bold leading-none uppercase mb-4">
          Certifications
        </h3>
        <h3 className="font-semibold mb-2 text-xl">Adobe Certified Professional</h3>
        <p className="text-[#212121] mb-2 text-lg">Graphic Design & Illustration using Adobe Illustrator</p>
        <h3 className="font-semibold mb-2 text-xl">Adobe Certified Professional</h3>
        <p className="text-[#212121] mb-2 text-lg">Visual Design using Adobe Photoshop</p>
      </div>
    </section>

    {/* Experience Section */}
    <section className="w-full md:w-1/2">
      <div className="contentSection">
        <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-4xl font-bold leading-none uppercase mb-4">
          Experience
        </h3>
        <h3 className="font-semibold mb-2 text-xl">The CuCompany | <em className="font-normal italic">Jul - Aug 2023</em></h3>
        <p className="text-[#212121] mb-2 text-lg">Graphic Design & Social Media Marketing Intern</p>
        <h3 className="font-semibold mb-2 text-xl">Private Tutor | <em className="font-normal italic">Feb 2022 - Current</em></h3>
        <p className="text-[#212121] mb-8 text-lg w-3/4">Assist middle and high school students in mastering essential topics like Algebra.</p>
      </div>
    </section>
  </div>
</div>
<section className={`photoArea ${window.innerWidth < 1200 ? "w-1/2 mx-auto mb-10" : "w-1/3 ml-[1vw] mr-[5vw]"}`}>
<img src="/me-pink.png" className="w-fit h-5/6 object-cover object-top border-black border-4 transition-transform duration-400 ease-in-out transform hover:scale-105 "/>
</section>


</div>


</section>
)}

{isMobile &&(

<section className="h-auto w-[100vw] bg-white top-0 flex flex-col justify-center items-center">
<h3 className="text-[#212121] font-sans font-bold text-[16vw] w-[100vw] leading-none mb-10 ml-1 mr-1 mt-0 whitespace-nowrap overflow-hidden flex justify-center">
  ABOUT ✦ ME
</h3>


<section className="meText text-[4vw] w-3/4 leading-relaxed">
  <span>
    With experience in <strong>software</strong> development, graphic <strong>design</strong>, branding, and marketing, I love crafting engaging <strong>user
    experiences</strong>-whether it’s through <strong>web development</strong>, UI/UX design, or interactive projects. My goal is to bridge the gap
    between design and technology, ensuring that every project is not only visually compelling but also user-friendly,
    <strong> efficient</strong>, and impactful.  
  </span>
  <a href="/about-page">
  <span className="ml-4 font-bold underline cursor-pointer whitespace-nowrap">Read More</span> ↗
  </a>
</section>

<section className="photoArea w-3/4 m-[5vw] ">
<img src="/me-pink.png" className="w-auto object-fit border-black border-4  "/>
</section>

<div className="content flex flex-col justify-center items-center mb-10">
<section className="textArea w-2/3 flex flex-col justify-center items-center gap-[8vw]">

        <div className="contentSection mb-8 flex flex-col">
        <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-2xl font-bold leading-none p-0 uppercase mb-4 ">
          Technical</h3>
        <h3 className="font-semibold mb-2 text-lg translate-x-[1vw]">
          Programming Languages:</h3>
        <p className='text-[#212121] text-lg translate-x-[1vw] mb-2'>
        Java, JavaScript, HTML/CSS</p>
        <h3 className="font-semibold mb-2 text-lg translate-x-[1vw]">
          Front-end Development:</h3>
        <p className='text-[#212121] text-lg translate-x-[1vw] mb-2'>
        React, Tailwind CSS</p>
        <h3 className="font-semibold mb-2 text-lg translate-x-[1vw]">
          Tools:</h3>
        <p className='text-[#212121] text-lg translate-x-[1vw] mb-2'>
        SQLite, Git(hub), IntelliJ IDEA, VS Code, Microsoft Office </p>
        </div>
        <div className="contentSection">
        <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-2xl font-bold leading-none p-0 uppercase mb-4 ">
          Certifications</h3>
        <h3 className="font-semibold mb-2 text-lg translate-x-[1vw] ">
        Adobe Certified Professional</h3>
        <p className='text-[#212121] mb-2 text-lg translate-x-[1vw]'
        >Graphic Design & Illustration using Adobe Illustrator</p>
        <h3 className="font-semibold mb-2 text-lg translate-x-[1vw] ">
        Adobe Certified Professional</h3>
        <p className='text-[#212121]  mb-2 text-lg translate-x-[1vw]'
        >Visual Design using Adobe Photoshop</p>
     
</div>

    <div className="contentSection mb-8">
    <h3 className="px-4 w-fit py-2 border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-2xl font-bold leading-none p-0 uppercase mb-4 ">
      Design</h3>
      <h3 className="font-semibold mb-2 text-lg translate-x-[1vw]">
  Adobe Creative Suite:
      </h3>
      <p className='text-[#212121]  mb-2 text-lg translate-x-[1vw]'>
        Photoshop, Illustrator, After Effects,
        Indesign, Premiere Pro </p>
        <h3 className="font-semibold mb-2 text-lg translate-x-[1vw] ">
          UI/UX & Design: </h3>
          <p className='text-[#212121]  mb-2 text-lg translate-x-[1vw]'>
       Figma, Canva</p>
       <h3 className="font-semibold mb-2 text-lg translate-x-[1vw] ">
          3D: </h3>
          <p className='text-[#212121]  mb-2 text-lg translate-x-[1vw]'>
       Blender</p>
    </div>


    <div className="contentSection">
    <h3 className="px-4 py-2 w-fit border-[#FF97DB] border-4 rounded-[50px] bg-transparent text-[#212121] text-2xl font-bold leading-none p-0 uppercase mb-4 flex justify-center">
      Experience</h3>
      <h3 className="font-semibold mb-2 text-lg translate-x-[1vw]">
  The CuCompany | <em className="font-normal italic">Jul - Aug 2023</em>
</h3>
    <p className='text-[#212121] mb-2 text-lg translate-x-[1vw] '>Graphic Design &
    Social Media Marketing Intern</p>
    <h3 className="font-semibold mb-2 text-lg translate-x-[1vw]">
  Private Tutor | <em className="font-normal italic">Feb 2022 - Current</em>
</h3>
    <p className='text-[#212121] mb-2 text-lg translate-x-[1vw] flex flex-col'>Assist middle and high school students in mastering
      <span> essential topics like Algebra.</span></p>
    </div>
</section>





</div>
</section>

)}

</div>
)
}
