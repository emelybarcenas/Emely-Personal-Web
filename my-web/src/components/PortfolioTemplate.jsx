import Navigation from "./Navigation-Bar/Navigation"
import Footer from "./Footer"
import { useParams } from "react-router-dom";
import { Moon, Sun, ArrowRight } from "lucide-react"; 
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Description from "./Description";
import PlateItForward from "./plateItForward";


const projectData = {
    plateItForward: {
        title: "PlateItForward"
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
      moreImages: ["/fearlessOnIce/page20.pdf.png", "/fearlessOnIce/page21.png", "/fearlessOnIce/page24.png", "/fearlessOnIce/animalpage.png" ]
    }
  };

export default function PortfolioTemplate(){
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {projectID} = useParams();
    const project = projectData[projectID];
    const projectKeys = Object.keys(projectData);
    const currentIndex = projectKeys.indexOf(projectID);
    const nextIndex = (currentIndex + 1) % projectKeys.length;
    const nextProjectID = projectKeys[nextIndex];
    const nextProject = projectData[nextProjectID];
    const prevIndex = (currentIndex - 1 + projectKeys.length) % projectKeys.length;
    const prevProjectID = projectKeys[prevIndex];
    const prevProject = projectData[prevProjectID];


    useEffect(()=>{
            window.scrollTo({top:0, left:0, behavior: "auto"})
    },[projectID])

   if(!project){
    return <h2>Project Not Found</h2>
   }

   
    return(
        <main>
            <nav>
                <Navigation />
            </nav>
        <div className="bg-white">
        <section className="bg-white w-screen h-auto flex flex-col md:flex-row">
        <div className="flex flex-col p-10 mt-[10vh] w-full md:w-1/2">
            <h3 className={`mb-[3vh] font-bold leading-none ${window.innerWidth < 500 ? "text-[10vw]" : "text-[7vw]"}`}>{project.title}</h3>
            <h2 className="text-3xl mb-[3vh] font-bold">About the Project</h2>
            <p className="mb-[3vh]">{project.description}</p>
            <p>{project.descriptionSpan}</p>

            {project.link && window.innerWidth > 600 && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#212121] text-white px-4 py-2 rounded-lg transition mt-[3vh] z-50">
                    View Project
                </button>
            </a>
        )}
        </div>


  <div className="w-full md:w-1/2 mt-[4vh] p-[5vw]">
    <img src={project.image} className="object-cover w-full"/>
  </div>
   
</section>


  {/* Image Gallery Section */}
{project.images && project.images.length > 0 && (
    <section className="w-screen h-auto bg-white flex flex-col justify-center items-center">
        {/* Flex container for heading and dark mode toggle */}
        <div className="flex flex-col items-center justify-center gap-[2vh] w-[80%] mb-[8vh]">
            <h2 className="text-3xl mt-[5vh] font-bold uppercase">User Interface</h2>

            {/* Dark Mode Toggle (without text) */}
            {project.darkMode && project.darkMode.length > 0 && (
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-full bg-[#212121] hover:bg-gray-300 transition-all duration-300 flex items-center justify-center"
                >
                    {isDarkMode ? (
                        <Sun size={24} className="text-yellow-500" />
                    ) : (
                        <Moon size={24} className="text-white" />
                    )}
                    <span className="ml-2 text-sm text-white font-semibold">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
            )}
        </div>

        <div className="flex flex-row gap-4 justify-center mb-[10vh] px-[10vw]">
            {(isDarkMode ? project.darkMode : project.images).map((img, index) => (
                <img 
                    key={index} 
                    src={img} 
                    alt={`${project.title} image ${index + 1}`}
                    className={`${projectID === 'hertechpath' ? 'max-w-[25vw]': 'max-w-[15vw] '} h-auto object-contain rounded-lg shadow-md transition-all duration-300 
                        ${index % 2 !== 0 ? "transform -translate-y-4" : ""}`}
                />
            ))}
        </div>
    </section>
)}

{/* Mockups */}
{project.mockups && project.mockups.length>0 &&(
<section className="bg-white w-screen h-auto flex flex-col items-center justify-center">
<h2 className="text-3xl font-bold justify-center m-10 uppercase">Branding</h2>
<div className="flex flex-wrap justify-center gap-10 mb-[10vh]">
  {project.mockups.map((mockup, index) => (
    <img 
      key={index} 
      src={mockup} 
      alt={`Mockup ${index + 1}`}
      className={`object-cover shadow-sm ${projectID === 'lively' ? 'w-[80vw]' : 'w-[40vw] h-[40vw]'}`}
    />
  ))}
</div>

</section>
)}

{project.moreImages &&(
<section className="flex flex-wrap justify-center items-center bg-white gap-[5vw] mx-[5wv] pb-[10vh]">
{project.moreImages.map((img, index) => (
                <img 
                    key={index} 
                    src={img} 
                    alt={`${project.title} image ${index + 1}`}
                    className={`max-w-[35vw] object-contain rounded-lg shadow-md transition-all duration-300 
                        ${index === project.moreImages.length - 1 ? "" : ""}`}
                />
            ))}
</section>
)}

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