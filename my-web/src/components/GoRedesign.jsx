import Navigation from "./Navigation-Bar/Navigation"
import Footer from "./Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';  
import { ArrowRight, Cog, ChartColumnDecreasing, BadgeHelp, Lightbulb, Heart, MonitorSmartphone } from "lucide-react";

import { Link } from 'react-router-dom'

import React, { useState } from "react";

export function CaseStudyInfo() {
        const details = [
            {
                title: "Role",
                info: "Product Designer"
            },
            {
                title: "Timeline",
                info: "Jul-Aug 2025"
            },
            {
                title: "Skills",
                info: ["User Research", "Competitive Analysis", "Interviews", "Wireframing", "Personas", "Affinity Mapping"]
            },

        ];

        return (
            <div className="flex flex-col md:flex-row mx-8 md:mx-40">
                <div className="w-full md:w-1/2 flex flex-col gap-1 mb-6 md:mb-0">
                    <h2 className="text-gray-500">About the Project</h2>
                    <p className="w-full  flex flex-col">
                During an internship, I relied on Miami-Dade public transit for the first time and noticed the GO app made navigation unnecessarily frustrating. Thinking as a designer, I took the initiative to reimagine the app.
                I translated commuter frustrations into a concept redesign of the GO app, crafting wireframes that make the app more accessible, efficient, and easier to navigate.
                <span className="italic pt-10">
                *This project is currently a concept redesign, but my long-term vision is to propose these improvements to Miami-Dade Transit to make a real impact in my community.
                </span>
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-full md:ml-10 md:w-1/2">
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

const projectData = {
    GoRedesign: {
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

  export function CaseBlock({ subtitle, title, children, ...props}) {
      return (
          <div className="mx-4 md:mx-10 py-10 flex flex-col gap-2 border-b border-gray-200" {...props}>
              <div className="mx-4 md:mx-20 w-full md:w-3/5">
                  <p className="text-gray-500  whitespace-nowrap">{subtitle}</p>
                  <p className="text-2xl font-bold">{title}</p>
              </div>
              <div className="my-5 mx-4 md:mx-20">
                  {children}
              </div>
          </div>
      );
  }

export default function GoRedesign(){
      useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projectKeys = Object.keys(projectData);
    const currentIndex = projectKeys.indexOf("GoRedesign");
    const prevIndex = (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    const prevProjectID = projectKeys[prevIndex];
    const nextProjectID = projectKeys[nextIndex];
    const prevProject = projectData[prevProjectID];
    const nextProject = projectData[nextProjectID];
    
    return(
      <main className="overflow-x-hidden">
     <nav>
         <Navigation />
    </nav>

    <div className="bg-white ">
<section className="w-screen h-auto flex flex-col md:flex-row">
  <div className="flex flex-col px-4 md:px-20 mt-[10vh] justify-center w-full">
    <h3
      className={`mt-[2vh] font-bold leading-none self-start ${window.innerWidth < 600 ? "text-[8vw]" : "text-[8vw]"}`}
    >
      GO Redesign
    </h3>

    <div >
      <p className={`${window.innerWidth < 600 ? "text-[4vw]" : "text-[2vw]"} mb-8`}>
        Transforming Transit Apps - Starting at Home
      </p>
    </div>

    {/* Full-width banner */}
    <div className="-mx-4 md:-mx-20 w-screen">
      <img
        src="/goApp/go-cover.png"
        className="w-full object-cover mb-6"
        alt="GO App Cover"
      />
    </div>

        <div className="w-full border-t border-b border-gray-200 py-8" data-aos="fade-up">
          <CaseStudyInfo />
        </div>
   <CaseBlock
  subtitle={"Problem"}
  title={"The problem that hit too close to home..."}
  data-aos="fade-up"
>
  <p>
    As a native Miamian, relying on the GO app for public transport revealed a
    navigation experience that was far from intuitive and often frustrating.
    Cluttered layouts, distracting ads, and unclear icons made navigation
    frustrating and slow. And I wasn’t alone; checking the app store confirmed
    my experience — a painfully low <b>1.8-star rating</b>. If thousands of users were
    struggling, I had to find a better solution.
  </p>
</CaseBlock>


{/* App Store Reviews */}
       <section className="mx-4 md:mx-10 py-10 flex flex-col gap-2" data-aos="fade-up">
  <div className="mx-4 md:mx-20">
    <div className="w-full">
      <p className="text-gray-500 whitespace-nowrap">App Store Reviews</p>
      <p className="text-2xl font-bold">Stories Behind the Stars</p>
    </div>
    <p className="w-fit">
      I analyzed <span className="font-bold">25+ App Store Reviews.</span> Feedback consistently mentioned difficulties finding information, confusing interfaces, and inefficient payment UX.
    </p>
  </div>

  <div className="mx-4 md:mx-20">
    <div className="grid grid-cols-2 md:flex mt-10 gap-4">
      {["review1r", "review2r", "review3r", "review4r"].map((img, i) => (
        <div key={i} className="w-full md:w-1/4 h-40 overflow-hidden rounded-xl shadow-lg">
          <img
            src={`/goApp/${img}.png`}
            className="w-full h-full object-cover scale-110 md:scale-[1.75]"
            alt={`Review ${i + 1}`}
          />
        </div>
      ))}
    </div>
  </div>
</section>


{/* On-Site Interviews (Convos on the Go) Section */}
<section className="mx-4 md:mx-10 pb-10 flex flex-col gap-2" data-aos="fade-up">
  <div className="mx-4 md:mx-20">
    <div className="w-full">
      <p className="text-gray-500 whitespace-nowrap">On-Site Interviews</p>
      <p className="text-2xl font-bold">Conversations on the Go</p>
    </div>
    <div className="flex flex-col md:flex-row gap-5 mt-3">
      <p className="w-full text-base ">
        Reading reviews was just the start;
        to feel users’ real frustration, I met
        them where it mattered most—at the Park
        & Ride station where they awaited their bus…
        There, I conducted
        <span className="font-bold"> 7 face-to-face interviews
        </span> and gathered additional insights through
        <span className="font-bold"> 5 quick surveys</span>
        , gaining valuable  perspectives
        to complement my initial research.
      </p>
      <div className="flex flex-col md:flex-row gap-1 justify-center">
        <div className="flex flex-col items-center">
          <img src="/goApp/affinitymapping.png" className="w-full max-w-[300px] sm:w-auto h-40 object-cover" />
          <p className="text-gray-500 whitespace-nowrap text-xs md:text-base">Affinity mapping from user quotes</p>
        </div>
        <div className="flex flex-col items-center text-gray-500 whitespace-nowrap">
          <img src="/goApp/surveys.jpg" className="w-full max-w-[300px] sm:w-auto h-40 object-cover" />
          <p className="text-xs md:text-base">Survey Insights</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Pain Points Section */}

<CaseBlock
  subtitle={"Pain Points"}
  title={"What wasn't working"}
  data-aos="fade-up"
>
  <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between items-start">
    <div className="w-full md:w-1/3 flex flex-col items-center md:items-center mb-8 md:mb-0">
      <img
        src="/goApp/Puzzled.png"
        className="h-20 w-20 mb-4 object-contain"
        alt="Confusing UI"
      />
      <div className="text-center md:text-left">
        <p className="font-bold">Confusing & Visually Inconsistent Interface</p>
        <p>Cluttered layouts, overwhelming menus, misplaced ads, pixelated icons, misaligned text, and limited accessibility options made navigation difficult.</p>
      </div>
    </div>

    <div className="w-full md:w-1/3 flex flex-col items-center md:items-center mb-8 md:mb-0">
      <img
        src="/goApp/Browse page.png"
        className="h-20 w-20 mb-4 object-contain"
        alt="Difficulty Finding Transit Information"
      />
      <div className="text-center md:text-left">
        <p className="font-bold">Difficulty Finding Transit Information</p>
        <p>Routes, stops, and schedules were buried or hard to access, making trips slower and more stressful.</p>
      </div>
    </div>

    <div className="w-full md:w-1/3 flex flex-col items-center md:items-center">
      <img
        src="/goApp/Split Money.png"
        className="h-20 w-20 mb-4 object-contain"
        alt="Weak Integration of Passes"
      />
      <div className="text-center md:text-left">
        <p className="font-bold">Weak integration of passes and Easy Cards</p>
        <p>Users struggled to add or use Easy Cards and passes within the app, with unintuitive steps and lack of integration with mobile wallets.</p>
      </div>
    </div>
  </div>
</CaseBlock>




{/* Personas Section */}
          <CaseBlock subtitle={"Personas"} title="Meet the Users" data-aos="fade-up">
            <div className="flex flex-col md:flex-row w-fit">
              <img src="/goApp/mariaP.png" alt="Personas" className="md:w-1/2" />
              <img src="/goApp/nicolas.png" alt="Personas" className="md:w-1/2" />
            </div>
          </CaseBlock>


<CaseBlock
  subtitle="Competitive Analysis + SWOT Analysis"
  title="Transit Apps Under the Lens"
  data-aos="fade-up"
>
  <div className="flex flex-col gap-5">
    <p className="w-full">
      Users shouldn’t have to use 3 different apps to
      find navigation information. I decided to <b>compare
      3 transportation apps with 4.6+ ratings</b> to identify
      design patterns and features that address common
      user pain points. Next, I <b>evaluated the current
      app </b>using a SWOT Analysis.
    </p>

    {/* First row */}
    <div className="flex flex-col md:flex-row gap-2">
      <img
        src="/goApp/CA1.jpg"
        className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
        alt="SWOT Analysis"
      />
      <img
        src="/goApp/CA2.jpg"
        className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
        alt="SWOT Analysis"
      />
    </div>

    {/* Second row */}
    <div className="flex flex-col md:flex-row gap-2">
      <img
        src="/goApp/CA3.jpg"
        className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
        alt="SWOT Analysis"
      />
      <img
        src="/goApp/SWOT.jpg"
        className="w-full md:w-1/2 max-w-full h-auto rounded-lg shadow"
        alt="SWOT Analysis"
      />
    </div>
  </div>
</CaseBlock>



{/* Design Goals Section */}
          <CaseBlock
  subtitle="Design Goals in Action"
  title="How might we redesign the GO app to be faster, clearer, and easier to use?"
  data-aos="fade-up"
>
  <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col gap-6">
      <p>
        <span className="font-bold">1. Create a clean, accessible interface</span><br />
        Reduce clutter, bring consistency to the UI, and use clearer iconography with a modern, accessible design system (including dark and light modes) to make navigation more intuitive.
      </p>
      <p>
        <span className="font-bold">2. Surface key information faster</span><br />
        Highlight routes, stops, and schedules upfront with fewer steps and added search functionality.
      </p>
      <p>
        <span className="font-bold">3. Streamline Cards & Passes</span><br />
        Integrate Easy Cards and passes more smoothly, reducing friction and enabling mobile wallet support.
      </p>
    </div>
    {/* Images + Caption Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center gap-2">
      <div className="flex flex-col md:flex-row gap-2">
        <img
          src="/goApp/low-fidelity.png"
          alt="low-fidelity mockups"
          className="max-w-full  md:h-[260px] rounded-lg shadow object-cover"
        />
        <img
          src="/goApp/sketches.png"
          alt="sketches"
          className="max-w-full  md:h-[260px] rounded-lg shadow object-cover"
        />
      </div>
      <p className="text-gray-500 text-xs md:text-base mt-2 text-center">
        Low-Fidelity Wireframes and Ideation
      </p>
    </div>
  </div>
</CaseBlock>


{/* Final Product Section */}
<CaseBlock
  subtitle="High Fidelity Mockups"
  title="The Final Product"
  data-aos="fade-up"
>
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-none">
    
    {/* Before Mockups */}
    <div className="flex flex-col items-center gap-2">
      <p className="font-bold text-center">Before</p>
      <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
        <img src="/goApp/og1.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 1" />
        <img src="/goApp/og2.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 2" />
      </div>
    </div>

    {/* Arrow only visible on wider screens */}
    <ArrowRight size={40} className="mx-4 text-gray-400 hidden md:block" />

    {/* After Mockups */}
    <div className="flex flex-col items-center gap-2">
      <p className="font-bold text-center">After</p>
      <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
        <img src="/goApp/finalHome.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 3" />
        <img src="/goApp/finalTracker.png" className="w-48 sm:w-56 md:w-64 h-96 object-contain" alt="Mockup 4" />
      </div>
    </div>
  </div>

  <p className="text-2xl font-bold mt-8 text-left mx-4 md:mx-10">Key Improvements at a Glance</p>
  <img src="/goApp/finalKeyFeatures.jpg" className="w-full object-contain mt-4" alt="Key Features" />
</CaseBlock>




          <CaseBlock
            subtitle="Conclusion"
            title="Takeaways & Next Steps"
            data-aos="fade-up"
          >
            <p>
              This project gave me the chance to design with real users and real feedback,
              highlighting the power of user interviews and meeting users where they are.
              Many simple changes can make a big impact and can make two experiences feel like night and day.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <p><span className="font-bold">Validated insights:</span> Conversations with users informed not just the app’s design but also ideas for broader improvements.  </p>
              <p><span className="font-bold">Future impact:</span> Propose this solution to Miami-Dade County to make a tangible, city-wide improvement.</p>
              <p className="font-bold mt-2">Opportunities for iteration:</p>
              <ul className="list-disc ml-6">
                <li>Enhance accessibility for all users</li>
                <li>Add features like real-time bus occupancy</li>
                <li>Support multiple languages</li>
                <li>Improve accuracy of bus arrival times</li>
              </ul>
            </div>
          </CaseBlock>


          </div>


        </section>






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