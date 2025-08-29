import Navigation from "./Navigation-Bar/Navigation"
import Footer from "./Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { ArrowRight, Cog, ChartColumnDecreasing, BadgeHelp, Lightbulb, Heart, MonitorSmartphone } from "lucide-react"; 

import { Link } from 'react-router-dom'

import React, { useState, useEffect } from "react";
// ...existing imports...

// ...existing code...

function FeaturesCarousel() {
  const features = [
    {
      title: "Can’t find a donation spot? No problem.",
      subtitle: "Navigation & Awareness",
      description:
        "Students can quickly find nearby donation spots with ease. Clear directions reduce confusion and save time, making food drop-off fast and stress-free.",
      images: [
        {
          src: "/plateItForward/donationSpot.gif",
          alt: "Donation Spot",
          className: "w-full max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
    {
      title: "Scan & Serve",
      subtitle: "AI Powered Scanner",
      description:
        "Makes donating leftovers fast and accessible for busy students by using AI scanner to simplify the input process. It encourages peer-to-peer reminders, minimizes steps, and helps schools track impact in real time.",
      images: [
        {
          src: "/plateItForward/scan.gif",
          alt: "Scan & Serve",
          className: "w-full max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
    {
      title: "Impact & Incentivization",
      subtitle: "Gamification",
      description: `Students are more 
        likely to stay engaged when 
        they see their peers participating. 
        Grade-based leaderboards spark 
        friendly competition while fostering 
        social responsibility, helping students 
        feel part of something bigger while seeing 
        the impact they’re making.`,
      images: [
        {
          src: "/plateItForward/profileScreen.png",
          alt: "Profile Screen",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
        {
          src: "/plateItForward/leaderboard.png",
          alt: "Leaderboard",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
    {
      title: "Breaking the Cycle",
      subtitle: "Gamified Learning Hub",
      description: `Through gamification and bite-sized lessons, 
        students stay engaged while learning about the bigger 
        picture of food insecurity. One action and one lesson 
        at a time, they see the impact they’re making—and 
        discover new ways to create lasting change.`,
      images: [
        {
          src: "/plateItForward/letslearn.png",
          alt: "Learning Hub",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
        {
          src: "/plateItForward/learn2.png",
          alt: "Learn 2",
          className: "max-w-[200px] h-[320px] sm:max-w-[420px] sm:h-[480px]",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + features.length) % features.length);
  const next = () => setCurrent((current + 1) % features.length);


  return (
    <div className="mx-0 mb-20">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Desktop: arrows beside card */}
        <div className="hidden md:flex w-full items-center justify-center gap-2 sm:gap-6 md:gap-10">
          {/* Left Arrow */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="bg-white border rounded-full shadow p-2 sm:p-3 z-10 hover:bg-gray-100"
            style={{ minWidth: 36, minHeight: 36 }}
          >
            <span className="sr-only">Previous</span>
            <svg width="24" height="24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Card */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16 rounded-2xl p-4 sm:p-8 md:p-12 w-full max-w-[1200px] min-h-[650px] min-w-[320px] sm:min-w-[600px] md:min-w-[900px]">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left mb-6 md:mb-0">
              <Feature
                title={features[current].title}
                subtitle={features[current].subtitle}
                description={features[current].description}
              />
            </div>
            <div className={`w-full md:w-1/2 flex ${features[current].images.length > 1 ? "flex-row" : "flex-col"} justify-center items-center gap-4 sm:gap-8`}>
              {features[current].images.map((img, idx) => (
                <div
                  key={idx}
                  className={`${img.className} flex items-center justify-center rounded-lg `}
                  style={{ minWidth: img.className.includes("max-w") ? undefined : "120px" }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-contain h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="bg-white border rounded-full shadow p-2 sm:p-3 z-10 hover:bg-gray-100"
            style={{ minWidth: 36, minHeight: 36 }}
          >
            <span className="sr-only">Next</span>
            <svg width="24" height="24" fill="none"><path d="M9 6l6 6-6 6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
   

{/* Mobile: Card only, arrows beside card but with margin from edge */}
<div className="flex flex-col md:hidden gap-6 items-center w-full">
  <div className="flex flex-row w-full items-center justify-between px-4">
    <button
      onClick={prev}
      aria-label="Previous"
      className="bg-white border rounded-full shadow p-2 z-10 hover:bg-gray-100"
      style={{ minWidth: 36, minHeight: 36 }}
    >
      <span className="sr-only">Previous</span>
      <svg width="24" height="24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
    <div className="flex-1 flex flex-col  rounded-2xl p-4 max-w-[95vw] min-w-[220px]">
      <Feature
        title={features[current].title}
        subtitle={features[current].subtitle}
        description={features[current].description}
      />
      <div className={`flex ${features[current].images.length > 1 ? "flex-row" : "flex-col"} justify-center items-center mt-4 gap-4`}>
        {features[current].images.map((img, idx) => (
          <div
            key={idx}
            className={`${img.className} flex items-center justify-center rounded-lg `}
            style={{ minWidth: img.className.includes("max-w") ? undefined : "120px" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-contain h-full"
            />
          </div>
        ))}
      </div>
    </div>
    <button
      onClick={next}
      aria-label="Next"
      className="bg-white border rounded-full shadow p-2 z-10 hover:bg-gray-100"
      style={{ minWidth: 36, minHeight: 36 }}
    >
      <span className="sr-only">Next</span>
      <svg width="24" height="24" fill="none"><path d="M9 6l6 6-6 6" stroke="#0E956D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  </div>
</div>
        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2 sm:gap-3">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${current === idx ? "bg-[#0E956D]" : "bg-gray-300"}`}
              aria-label={`Go to feature ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const projectData = {
      goTransitRedesign:{
        title: "GO Transit Redesign",
      },  
  plateItForward: {
        title: "PlateItForward",
        
    },
    tinker:{
        title: "Tinker - A Creative's Playground",
        description:"Tinker is a forum-style web app created to give creative technologists a space to share their passion projects in a casual, community-driven environment. The platform is designed for people who mix technology with other interests—like photography, fashion, sports, or music- and want to connect with others doing the same. Users can share their work, leave comments, and explore how different disciplines come together through tech. Tinker isn’t just a portfolio or a showcase—it’s a collaborative, evolving space for inspiration, feedback, and creative growth.",
        descriptionSpan: "This project was built using React for the frontend and Supabase for backend services, including its PostgreSQL database and built-in authentication, with deployment through Vercel. Users can sign in to create, edit, and delete posts. A dynamic home feed displays all posts with sorting by date or upvotes and a search feature by title. Users can interact by upvoting and leaving comments on posts. This app demonstrates my ability to build full-stack applications with authentication, database integration, and responsive UI—designed to support a creative and interactive community.",
        image: "/portfolio-covers/tinkercover.png",
        link: "https://tinker-six.vercel.app/"
    },
    binding:{
        title: "Binding Website",
        description: "Binding is an innovative literacy hub that combines reading, writing, and community engagement. The platform empowers users to share their writing, receive personalized book recommendations, and explore educational workshops and events. The goal is to create an accessible and inspiring space where young readers, particularly girls, can expand their literary horizons and engage with enriching, diverse content in a fun and interactive way.",
        descriptionSpan: "For this project, I utilized HTML, CSS, and JavaScript to build an intuitive and visually appealing platform. I implemented layouts for large screens using flexbox and grid. Key features include a dark mode toggle for enhanced readability, JavaScript animations for dynamic interactions, and a custom modal for confirmation messages. Additionally, I integrated a calendar feature to allow users to track events and workshops, and a form validation system to ensure data integrity. These skills helped bring the concept to life and deliver an engaging, functional platform.",
        image: "/portfolio-covers/bindingcover.png",
        link: "https://brave-bubblegum-unicorn-281.vscodeedu.app/#home"
    },
    pawsUpXR:{
        title: "Paws Up! XR Freshman Experience",
        description:"Paws Up is a virtual onboarding solution designed for new students, featuring online campus tours through mixed reality technology. It allows prospective students to explore university facilities and engage with campus culture in an immersive way, even when they cannot visit in person. By integrating pandemic-proof technology, it offers a fun and interactive way to experience college life remotely, making the transition to university smoother and more engaging.",
        descriptionSpan:"For this project, I developed the main menu interface for the XR experience using Unity, C#, and Meta’s All-In-One SDK, improving user navigation and accessibility. I modeled key FIU buildings in Blender to create a realistic and immersive virtual campus environment. Additionally, I scripted interactive animations to enhance the overall user experience and engagement. To strengthen the project’s identity, I designed the logo using Adobe Illustrator and created a polished presentation for Demo Day to effectively showcase the experience and its impact.",
        image:"/portfolio-covers/pawsUpcover.jpg",
        link: "/https://github.com/FelixJ98/PawsUp"
    },
     brilliancesatprep:{
        title: "Brilliance SAT Prep",
        description: "I crafted a mobile user interface on Figma for Brilliance SAT PREP, ensuring an intuitive and engaging experience for students accessing affordable tutoring resources. The platform connects students to their school accounts, encourages collaborative study groups, and delivers personalized daily lessons to strengthen their skills.",
        descriptionSpan: "To further support the mission, mockups for supplies and merchandise—such as journals, pens, pouches, and totes—were developed to inspire and motivate students. These designs emphasize accessibility and collaboration, reinforcing a sense of community in the learning journey.",
        image: "/portfolio-covers/brilliancecover.png",
        link:"https://www.figma.com/proto/xVZTkInDg56TSDMZabqlGe/bee?node-id=0-1&t=916d5t0WKwULZS1F-1",
        images: [
            "/brillianceSAT/light-mode-1.jpg",
            "/brillianceSAT/Brilliance-SAT-Figma-2.jpg",
            "/brillianceSAT/Brilliance-SAT-Figma 3.jpg",
             "/brillianceSAT/Brilliance-SAT-Figma.jpg",
            "/brillianceSAT/Brilliance-SAT-Figma 5.jpg",
        ],
        mockups: [
            "/brillianceSAT/tote-bag.jpg",
            "/brillianceSAT/pens.jpg",
            "/brillianceSAT/brilliance-pouch.png",
            "/brillianceSAT/brilliance-notebook.png"
        ],
        darkMode: [
            "/brillianceSAT/iPhone-14-6.jpg",
            "/brillianceSAT/iPhone-14-7.png",
            "/brillianceSAT/iPhone-14-8.png",
            "/brillianceSAT/iPhone-14-9.png",
            "/brillianceSAT/iPhone-14-10.png"
        ]
    },
     hertechpath:{
        title: "HerTechPath",
        description: "HerTechPath is a platform dedicated to empowering the next generation of women in tech. The project aims to break down the barriers that women face in the technology industry, such as stereotypes, lack of visibility, and limited access to mentors and role models. By providing resources, support, and pathways tailored to women, HerTechPath helps inspire young girls to pursue careers in tech and provides them with the tools they need to succeed.",
        descriptionSpan: "During ShellHacks, Florida's Largest Hackathon, I worked on creating a user-friendly and visually appealing prototype for the HerTechPath platform using Figma. The prototype was designed to feature a personalized quiz to help users discover which tech pathway aligns with their strengths, a detailed exploration of tech career options, and a community blog for sharing inspiring stories from women in tech. The prototype embodies the vision of supporting and encouraging women to embrace their potential in the tech industry. ",
        image: "/portfolio-covers/hertechpathcover.png",
        images: [
        "/hertechpath/landing-page.png",
        "/hertechpath/quiz-page.png",
        "/hertechpath/Pathway.png",
        ],
        moreImages:[
        "/hertechpath/comp-sci-match.png",
        "/hertechpath/login-page.png",
        "/hertechpath/connect-page.png",
        ]
    },
      explorePins:{
       title: "Init Explore Pins",
       description: "INIT Explore Pins were created to incentivize students to complete workshops as part of the INIT Explore program. Explore provides workshops for students to learn skills in various tracks, including Web Development, Hardware, AI/ML, and Game Development. These pins serve as a fun and engaging way to encourage students to stay motivated and track their progress.",
       descriptionSpan:"In the design process, I used Adobe Illustrator and Photoshop to create the designs and mockups for the INIT Explore Pins. Adobe Illustrator allowed me to craft clean, vector-based designs with sharp lines and scalable elements, while Photoshop helped refine textures and add depth to the mockups. The combination of these tools ensured that the final product was visually appealing and polished, offering a professional look that aligned with the brand’s mission and the excitement of the workshops.",
       image: "/portfolio-covers/initpinscover.png"
    },
    agilis:{
        title:"Agilis Marketing Agency",
        description: "Agilis is a digital marketing agency focused on promoting emerging sports and athletics businesses. With a target audience of young adults in Florida, Agilis encourages the youth to embrace a healthy and active lifestyle. The agency thrives on transforming insights into engagement and turning strategy into action.",
        descriptionSpan: "In my role as Creative Director, I led a team of designers to develop Agilis' brand identity from the ground up. This included designing the logo and logotype, creating merchandise that reflects the brand's values, and building a website using Google Sites. The process allowed me to contribute to every stage of the creative journey, ensuring that the brand’s message was visually compelling and cohesive across all touchpoints.",
        image: "/portfolio-covers/agiliscover1.png",
        link: "https://sites.google.com/miamiartsstudio.com/agilis?usp=sharing",
        mockups: ["/agilis/ball-mockup.png",
            "/agilis/workout.png",
            "/agilis/agilis-cap-mockup.png",
            "/agilis/drawstring.png",
        ],
        moreImages:[
            "/agilis/Elevating-Your-Business.jpeg",
            "/agilis/agilis.jpg"
        ]
    },
     lively:{
        title: "Lively Youth",
        description: "Lively is an engaging youth afterschool program designed to inspire and empower young minds. With a focus on creativity, teamwork, and personal growth, it offers a variety of activities like arts, sports, and skill-building workshops in a supportive environment. Lively helps students develop confidence, build friendships, and discover their unique talents, making every afternoon a fun and enriching experience.",
        descriptionSpan: "For the Florida Scholastic Press Association (FSPA) competition, I conceptualized and designed a comprehensive branding strategy, creating mockups for various promotional items, including frisbees, business cards, popsockets, and more. Each piece was carefully selected to engage the target audience while also serving as a powerful marketing tool. The merchandise was designed to be both visually appealing and practical, fostering brand awareness and creating a memorable experience. This project earned me the Best Branding Award at my high school's tech production banquet.",
        image: "/portfolio-covers/livelycover.png",
        mockups: ["/lively/livelymockups.png"],
    },
    eden: {
      title: "Eden Garden Coffee Shop",
      description: "Eden Garden is a coffee shop where nature and flavor come together in harmony. Surrounded by lush greenery, it offers a menu of fresh, vibrant dishes and beverages that delight the senses. Whether you're seeking a peaceful retreat or a cozy spot to connect, Eden Garden Café is the perfect escape.",
      descriptionSpan: "I developed a brand identity where I experimented with typography and logomark design. Using Illustrator, I created a logotype inspired by the concept of the Garden of Eden, incorporating leaf-like, whimsical lettering. To bring the brand to life, I used Photoshop and online assets to create mockups, ranging from billboards to coffee cups.",
      image: "/portfolio-covers/edencover.png",
      mockups:[
        "/eden/buildboard.jpg",
        "/eden/coffee-pouch.jpg",
        "/eden/cup.jpg",
         "/eden/engraved.jpg"
        ]
      
    },
    fearlessOnIce: {
      title: "Fearless On Ice",
      description: "Fearless on Ice is a heartwarming children’s book that brings Agilis’ mission to life—promoting fitness and a healthy lifestyle through storytelling. The story follows Angie, a curious and adventurous polar bear, who finds herself on an unexpected journey one Christmas Eve. Through her love for ice skating, she faces challenges, makes mistakes, and learns valuable lessons about resilience and determination. With the help of Santa and a touch of Christmas magic, Angie overcomes her fears, saves Christmas, and spreads joy to animals around the world.",
      descriptionSpan:"I led a creative team as we worked together to bring this book to life. Using Adobe Illustrator, we carefully designed each page to capture Angie’s journey through vibrant illustrations that enhance the story’s message. From character designs to dynamic winter scenes, every detail was thoughtfully crafted to create an immersive reading experience. Through a combination of storytelling and design, Fearless on Ice serves as both an entertaining and inspiring book that encourages children to stay active and embrace new challenges.",
      image: "/portfolio-covers/fearlessOnIceCover.png",
    }
  };

export function CaseStudyInfo() {
    const details = [
        {
            title: "Role",
            info: "Lead Product Designer"
        },
        {
            title: "Timeline",
            info: "May 2025"
        },
        {
            title: "Skills",
            info: ["User Research", "Prototyping", "Collaboration"]
        },
        {
            title: "Collaborators",
            info: ["Tasnimah A Rahim", "Paula Romero", "Rajiv Chevannes"]
        },
    ];

    return (
        <div className="flex flex-col md:flex-row mx-4 md:mx-40">
            {/* About the Project */}
            <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
                <h2 className="text-gray-500">About the Project</h2>
                <p className="w-full md:w-3/4">
                    PlateItForward is a student-centered app created 
                    for the CodePath x Amazon Next Challenge, addressing 
                    food waste and food insecurity on campus.
                    After uncovering that students care about making an impact 
                    but feel unmotivated due to inefficient systems, we designed an engaging,
                    accessible solution that makes action easier and more meaningful. 
                    We focused on a user-first design approach that combined clarity, connection, and purpose.
                    Throughout the process, we received valuable feedback from multiple Amazonian designers,
                    helping us refine the experience for real-world impact.
                </p>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-3 w-full md:w-1/2">
                {details.map((detail, idx) => (
                    <div key={idx}>
                        <h2 className="text-gray-500">{detail.title}</h2>
                        {Array.isArray(detail.info) ? (
                            <div className="flex flex-col">
                                {detail.info.map((item, i) => (
                                    <span key={i}>{item}</span>
                                ))}
                            </div>
                        ) : (
                            <p>{detail.info}</p>
                        )}
                        {idx < details.length - 1 && (
                            <div className="border-b border-gray-200 mt-2" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}




export function CaseBlock({ subtitle, title, children }) {
    return (
        <div className="mx-10 md:mx-10 py-10 flex flex-col gap-2 border-b border-gray-200">
            <div className="mx-4 md:mx-40 w-full md:w-3/5">
                <p className="text-gray-500  whitespace-nowrap">{subtitle}</p>
                <p className="text-2xl font-bold">{title}</p>
            </div>
            <div className="my-5 mx-4 md:mx-40">
                {children}
            </div>
        </div>
    );
}

export function Feature({title, subtitle, description}){
   return(
    <>
     <p className="text-gray-500 text-xl">{subtitle}</p>
    <p className="text-[#0E956D] font-bold text-3xl">{title}</p>
   
    <p className="text-lg">{description}</p>
    </>
   )
}
export default function PlateItForward(){

    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);

    const projectKeys = Object.keys(projectData);
    const currentIndex = projectKeys.indexOf("plateItForward");
    const prevIndex = (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    const prevProjectID = projectKeys[prevIndex];
    const nextProjectID = projectKeys[nextIndex];
    const prevProject = projectData[prevProjectID];
    const nextProject = projectData[nextProjectID];
    return(
 <main>
     <nav>
         <Navigation />
    </nav>

    <div className="bg-white">
<section className="w-screen h-auto flex flex-col md:flex-row">
  <div className="flex flex-col px-4 md:px-20 mt-[10vh] justify-center w-full">
    <h3
      className={`mt-[2vh] font-bold leading-none self-start ${window.innerWidth < 500 ? "text-[10vw]" : "text-[10vw]"}`}
      data-aos="fade-up"
    >
      PlateItForward
    </h3>

    <div data-aos="fade-up">
      <p className={`${window.innerWidth < 500 ? "text-[2vw]" : "text-[2.5vw]"} mb-8`}>
        From Leftover to Impact - Students Leading the Way
      </p>
    </div>

    {/* Full-width banner */}
    <div className="-mx-4 md:-mx-20 w-screen">
      <img
        src="/banners/plateItForwardBanner.png"
        className="w-full object-cover mb-6"
        alt="PlateItForward Banner"
      />
    </div>

    {/* CaseStudyInfo */}
    <div className="w-full border-t border-b border-gray-200 py-8 px-8">
      <CaseStudyInfo />
    </div>
  </div>
</section>



         <CaseBlock 
         subtitle={"Problem"} 
         title={
            <>
            “We throw away so much food.. but <span className="text-[#0E956D]">what difference do I make? </span>
            </>
        }>
            Every week, public schools in the US produce approximately 14,000 tons of food waste. Students want to reduce school food waste, but current systems within their schools are confusing, time-consuming, and invisible.Without clarity, simplicity, and motivation, willing students stop trying.
         </CaseBlock>
         

<CaseBlock
  subtitle={"User Research"}
  title={"6 Student Interviews. 3 Themes. Actionable Insights."}
>
  <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-center">
    <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
      <Lightbulb color="#0E956D" size={64} className="mb-4" />
      <p className="font-bold text-center">Theme 1: Awareness</p>
      <p className="text-center">“It’s a problem, but no one really does anything about it”</p>
    </div>
    <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
      <MonitorSmartphone color="#0E956D" size={64} className="mb-4" />
      <p className="font-bold text-center">Theme 2: Tech Habits</p>
      <p className="text-center">“I’ll use trackers but then forget about them or get bored of them”</p>
    </div>
    <div className="w-full md:w-1/3 flex flex-col items-center">
      <Heart color="#0E956D" size={64} className="mb-4" />
      <p className="font-bold text-center">Theme 3: Motivation</p>
      <p className="text-center">“It’s fun when you can customize something”</p>
    </div>
  </div>
</CaseBlock>


<CaseBlock
  subtitle={"Insights"}
  title={"The Barriers to Student Action"}
>
  <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-center">
    <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
      <Cog color="#0E956D" size={64} className="mb-4" />
      <p className="font-bold text-center">Unclear & inefficient systems</p>
      <p className="text-center">Current processes make it hard for students to take action</p>
    </div>
    <div className="w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
      <ChartColumnDecreasing color="#0E956D" size={64} className="mb-4" />
      <p className="font-bold text-center">Low engagement & motivation</p>
      <p className="text-center">Students don’t feel compelled to act because of invisbility</p>
    </div>
    <div className="w-full md:w-1/3 flex flex-col items-center">
      <BadgeHelp color="#0E956D" size={64} className="mb-4" />
      <p className="font-bold text-center">Unclear sense of impact & purpose</p>
      <p className="text-center">Without a clear sense of how their actions create change, students lose interest or doubt their efforts matter.</p>
    </div>
  </div>
</CaseBlock>



     
<CaseBlock subtitle="Solution" title={<>Giving students the <span className="text-[#0E956D]">tools</span> for impact &amp; the <span className="text-[#0E956D]">motivation</span> to keep going</>}>
  <p>
    Our solution allows students to donate effortlessly, stay engaged, and feel connected to a larger mission—transforming small daily choices into lasting change.
  </p>
    <p className="mt-4">Our Approach:</p>
    <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Make food donation easier to find and faster to use</li>
        <li>
      Boost engagement with gamified, community experiences
        </li>
         <li>
      Show students their impact and why it matters
        </li>
      </ul>
   <div className="flex justify-center">
    <img src="/plateItForward/earlyiterations.jpg" className="w-full max-w-[800px] mt-4" alt="Early Iterations" />
  </div>
</CaseBlock>

 <CaseBlock subtitle={"Testing & Improvements"}>
  <div className="space-y-8">
    {/* 1. Refining Point System */}
    <div>
      <p className="text-2xl font-bold mb-2">1. Refining Point System</p>
      <p>
        Our original gamification model 
        awarded students points for every donation made. 
        However, after initial testing, we realized this 
        system risked incentivizing quantity over quality, 
        potentially encouraging unhealthy behaviors.
      </p>
      <p className="mt-4">To shift the focus toward meaningful engagement, we redesigned the system so that:</p>
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Points are earned through completing educational lessons, not donating.</li>
        <li>
          After donation, students can nudge a friend as a social call-to-action or share their impact via social media, maintaining visibility and motivation without encouraging mindless contributions.
        </li>
      </ul>
    </div>

    {/* 2. Improving Scanning Flow */}
    <div>
      <p className="text-2xl font-bold mb-2">2. Improving Scanning Flow</p>
      <p>
        During early feedback sessions, we identified a gap in the item scanning flow. Originally, there was no way for students to add or review multiple items efficiently. It felt tedious and unclear.
      </p>
      <p className="mt-4">To improve this:</p>
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>We added confirmation screens and subtle microcopy indicating when an item was successfully added.</li>
        <li>
          We introduced a "donation list" view, resembling a shopping cart, where students could:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>View all scanned items at once</li>
            <li>Edit quantities or remove items</li>
            <li>Submit all donations in one streamlined action, rather than approving each individually</li>
          </ul>
        </li>
      </ul>
      <p>
        This significantly sped up the donation process while giving users more control and clarity.
      </p>
    </div>

    {/* 3. Enhancing Long-Term Engagement */}
    <div>
      <p className="text-2xl font-bold mb-2">3. Enhancing Long-Term Engagement</p>
      <p>
        To further encourage returning users without relying solely on points, we:
      </p>
      <ul className="list-disc pl-6 my-4 space-y-2">
        <li>Introduced unlockable personalization features (e.g. character customization)</li>
        <li>Added impact metrics, like “meals saved” or “friends nudged,” to visually show a student’s contribution</li>
        <li>Ensured that the main CTA (Call to Action) was consistently visible on the homepage for ease of access and clarity</li>
      </ul>
    </div>
  </div>
</CaseBlock>       


<CaseBlock subtitle={"Final Product"} title={"Here's how we brought it all together"}>
<FeaturesCarousel />
</CaseBlock>

   <CaseBlock
  subtitle="Prospective Impact"
  title={
    <>
      PlateItForward: <span className="text-[#0E956D]">Efficient.</span> <span className="text-[#0E956D]">Rewarding.</span> <span className="text-[#0E956D]">Impactful.</span>
    </>
  }
>
  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
    <div className="flex-1 flex flex-col items-center text-center">
      <p className="text-4xl font-bold text-[#0E956D]">+880 million</p>
      <p className="font-semibold">meals saved annually</p>
      <span className="text-xs text-gray-500 mt-1">Based on Feeding America, 530K tons converted to meals at 1.2 lbs each</span>
    </div>
    <div className="flex-1 flex flex-col items-center text-center">
      <p className="text-4xl font-bold text-[#0E956D]">3.8 billion</p>
      <p className="font-semibold">pounds of CO₂ emissions avoided</p>
      <span className="text-xs text-gray-500 mt-1">Based on Environmental Protection Agency, 1lb food = 3.8 lbs CO₂</span>
    </div>
    <div className="flex-1 flex flex-col items-center text-center">
      <p className="text-4xl font-bold text-[#0E956D]">Millions</p>
      <p className="font-semibold">empowered to create lasting change</p>
    </div>
  </div>
</CaseBlock>

<div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 m-4 md:m-10 bg-white p-4 md:p-8">
  <Link
    to={`/portfolio/${prevProjectID}`}
    className="flex items-center justify-center bg-white hover:bg-[#9E76FF] text-[#212121] font-bold w-[300px] md:w-auto px-3 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition z-10 text-xs md:text-base"
  >
    <ArrowRight size={20} className="rotate-180 mr-2" />
    {prevProject.title}
  </Link>

  <Link
    to={`/portfolio/${nextProjectID}`}
    className="flex items-center justify-center bg-white hover:bg-[#9E76FF] text-[#212121] font-bold w-[300px] md:w-auto px-3 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition text-xs md:text-base"
  >
    <span className="mr-2">{nextProject.title}</span>
    <ArrowRight size={20} />
  </Link>
</div>
 


    </div>


 

    <footer className="pointer-events-auto sticky bottom-0 z-[-1]">
        <Footer className="pointer-events-auto"/>
    </footer>
</main>
    )
}