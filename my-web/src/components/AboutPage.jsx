import Navigation from "./Navigation-Bar/Navigation.jsx";
import Footer from "./Footer.jsx";
import {useState, useEffect} from "react";

export default function AboutPage() {
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=> {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    }
  
  
  handleResize()

  window.addEventListener("resize", handleResize);
  
  return () =>
    window.removeEventListener("resize", handleResize);

  },[]);
  
function ExperienceSection({ experiences }) {
  return (
  
    
    <section className="bg-[#212121] w-full h-auto mx-auto text-white p-8 flex flex-row gap-5">
        <div className="flex flex-col w-1/2 justify-center items-center gap-8">
        {experiences.map((exp, idx) => 
          exp.img?(
          <div
            key={idx}
            className="w-full max-w-[600px] h-[400px] overflow-hidden border-8 border-[#FF97DB] flex items-center justify-center bg-white"
          >
            <img
              src={exp.img}
              alt={exp.imgAlt || exp.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ) : null )}
      </div>
        {/* Right */}
      <div className="flex flex-col w-1/2  pr-8">
        <h3 className="text-3xl font-bold mb-8">EXPERIENCE</h3>
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-12 ">
            <p className="mb-2 font-bold text-xl">{exp.title}</p>
            {exp.subtitle && <p className="italic text-lg">{exp.subtitle}</p>}
            <p className="mb-2 text-lg">{exp.description}</p>
          </div>
        ))}
      </div>
      
    
    </section>
  );
}
  const experiences = [
    {
      title: "Miami Heat - Software Engineer Intern",
      subtitle: "Break Through Tech Sprinternship, May 2025",
      description:
        "Collaborated with other interns to redesign and implement the frontend of a key application for an enhanced user experience. We used Figma for UI/UX design, React and TypeScript for development, and Azure DevOps for version control and task management.",
      img: "/me-miamiheat.JPG",
      imgAlt: "Miami Heat Internship",
    },
    {
      title: "The CuCompany - Graphic Design Intern",
      subtitle: "Summer Youth Internship Program, Summer 2023",
      description:
        "During my internship, I created daily Spanish social media content for a nursing home and produced content for a restaurant. I also redesigned Instagram highlight covers improving branding and increasing reach. Writing about marketing trends and new technology increased my knowledge on the evolving digital landscape. Knowing Spanish allowed me to bridge cultural and communication gaps in a global work environment.",
      img: "/cuco-phones.jpg",
      imgAlt: "CuCompany Internship",
    },
    {
      title: "Private Tutor",
      subtitle:"Feb 2022 - Present",
      description:
        "I privately tutor middle and high school students in foundational subjects, with a focus on Algebra. My sessions simplify complex concepts, boost understanding, and build confidence in problem-solving."
    },
  ];

  return (
    <main>
    <div className="flex flex-col">
      <section>
      <Navigation className="z-50 top-0 left-0 h-full" />
      </section>
      
      {isMobile && (
                <section className="bg-[#ffffff] flex flex-col md:flex-row w-full min-h-screen p-4 md:p-8 mt-16">
                  <div className="aboutAndEducation mb-4 md:w-1/2 mt-8 md:mt-16">
                    <h3 className="text-3xl font-bold mb-2">ABOUT ✦ ME</h3>
                    <p className="mb-4">
                      Hi! I’m Emely Barcenas, a passionate Computer Science student with a knack for blending technical precision with creative design. With experience in graphic design, marketing, and software development, I love developing and crafting engaging user experiences.
                    </p>
                    <h3 className="text-2xl font-bold mb-2">EDUCATION</h3>
                    <p className="mb-2 font-bold">Florida International University</p>
                    <p className="mb-2">
                      I’m currently a first-year student, pursuing a Bachelor’s of Science in Computer Science. I am honored to be a Presidential Scholar, awarded full tuition for my academic achievements.
                    </p>
                    <p className="mb-2 font-bold">Miami Arts Studio</p>
                    <p className="italic">Technical Production, 2017-2024</p>
                    <p>
                      At MAS, I developed invaluable graphic design skills over 7 years. My leadership roles, such as President of Mu Alpha Theta and Vice President of Future Business Leaders of America, provided me with strong leadership experience.
                    </p>
                  </div>

                  <div className="picsOfMe flex flex-col justify-center items-center md:w-1/2 mt-8 gap-4">
                    <img src="/me-init.jpg" className="w-full max-w-[400px] h-auto object-cover" />
                  </div>
                </section>
      )}

      {isMobile && (
                <section className='bg-[#212121] w-full min-h-[50vh] text-white p-4 md:p-8 flex flex-col gap-8'>
                
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col md:w-1/2">
                    <h3 className="text-3xl font-bold mb-2">EXPERIENCE</h3>
                    <p className="mb-2 font-bold">Miami Heat - Software Engineer Intern</p>
                    <p className="italic">Break Through Tech Sprinternship, May 2025</p>
                      <p className="mt-2 mb-2">
                          Collaborated with other interns to redesign 
                          and implement the frontend of a key application
                          for an enhanced user experience. We used Figma 
                          for UI/UX design, React and TypeScript for development, 
                          and Azure DevOps for version control and task management.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <img src="/me-miamiheat.JPG" className="w-full max-w-[400px]" />
                    </div>
                  </div>
                
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col md:w-1/2">
                    
                      <p className="mb-2 font-bold">The CuCompany - Graphic Design Intern</p>
                      <p className="italic">Summer Youth Internship Program, Summer 2023</p>
                      <p className="mt-2 mb-2">
                      During my internship, I created daily <strong>Spanish social media content</strong> for
                      a nursing home and produced  content for a restaurant. I also <strong>redesigned
                      Instagram highlight covers </strong> improving branding and increasing reach. Writing 
                      about <strong>marketing trends</strong> and <strong>new technology</strong> increased my knowledge on the evolving
                      <strong>digital landscape</strong>. Knowing <strong>spanish</strong> allowed me to bridge cultural and communication
                      gaps in a global work environment.
                      </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                      <img src="/cuco-phones.jpg" className="w-full max-w-[400px]" />
                    </div>

                  </div>

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col md:w-1/2">
                    <p className="mb-2 font-bold">Private Tutor</p>
                      <p className="mb-2 mt-2">
                      I privately tutor middle and high school students in foundational subjects,
                      with a focus on Algebra. My sessions simplify complex concepts,
                      boost understanding, and build confidence in problem-solving.
              </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <img src="/me-junior-ring.PNG" className="w-full max-w-[400px]" />
                    </div>
                  </div>

                  

                  
                </section>
      )}

      {isMobile && (
                <section className='bg-white w-full min-h-[50vh] text-[#212121] p-4 md:p-8 flex flex-col gap-8'>
                  <div className="flex flex-col md:flex-row gap-8">
                  
                    <div className="flex flex-col md:w-1/2">
                      <h3 className="text-2xl font-bold mb-2">ACTIVITIES</h3>
                      <p className="mb-2 font-bold">INIT FIU - Creative Director</p>
                      <p>
                      With over 4,000 members, 
                                  INIT is a nonprofit tech organization that empowers underserved communities to launch careers in technology.
                                  As Creative Director at INIT, I work to design assets for ShellHacks,
                                  Florida’s Largest Hackathon (1,400+ participants). Collaborating with my team, I help create an
                                  engaging experience that empowers students to develop their skills and secure opportunities in the tech industry.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <img src="/init-group-pic.jpg" className="w-full max-w-[400px]" />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col md:w-1/2">
                      <p className="mb-2 font-bold">CodePath Emerging Engineers Empowerment Program</p>
                      <p>
                        I am part of the CodePath E3 program, a community of aspiring engineers where I receive mentorship, career resources, and networking opportunities to further develop my skills and career in tech. I successfully completed CodePath's Web 101 course with honors, where I built my own website, further strengthening my technical skills.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <img src="/codepath-group-pic.jpg" className="w-full max-w-[400px]" />
                    </div>
                  </div>
                </section>
      )}

      {!isMobile && (
              <div>

                <Navigation className="z-50"/>

                  <section className="bg-[#ffffff] flex flex-row w-full h-auto p-8 z-[1]">


                    <div className="aboutAndEducation mb-4 w-1/2 mt-16">
                      <h3 className="text-3xl font-bold mb-2">ABOUT ME</h3>
                      <p className="mb-4 text-lg">
                        Hi! I’m Emely Barcenas, a passionate Computer Science student with a knack for blending technical precision with creative design. With experience in graphic design, marketing, and software development, I love developing and crafting engaging user experiences.
                      </p>
                      <h3 className="text-3xl font-bold mb-2">EDUCATION</h3>
                      <p className="mb-2 font-bold text-xl">Florida International University</p>
                      <p className="mb-2 text-lg">
                        I’m pursuing a Bachelor’s of Science in Computer Science. I am honored to be a Presidential Scholar, awarded full tuition for my academic achievements.
                      </p>


                      <p className="mb-2 font-bold text-xl">Miami Arts Studio</p>
                      <p className="font-italic">Technical Production, 2017-2024</p>
                      <p className="text-lg">
                      At MAS, I developed invaluable graphic design skills over 7 years.
                      My leadership roles, such as President of Mu Alpha Theta and Vice President
                      of Future Business Leaders of America, provided me with strong leadership experience.
                      </p>
                    </div>

                    <div className="picsOfMe flex flex-col justify-center items-center w-1/2 overflow-hidden mt-10 p-2 gap-2">
            <div className="h-[90%] w-full flex justify-center items-center">
              <img src="/me-init.jpg" className="w-full h-full object-cover border-[#FF97DB] border-8" />
            </div>
                    </div>


                  </section>
              
                  


          <section className='bg-[#212121] w-full h-auto mx-auto p-8 flex'>
          <ExperienceSection experiences={experiences} />
          </section>

          <section className="bg-white w-full h-fit text-[#212121] p-8 flex flex-row gap-8">
            {/* Left Column (INIT FIU Image + CodePath Text) */}
            <div className="w-1/2 flex flex-col gap-8 m-10 ">
              <img src="/init-group-pic.jpg" className="w-full h-auto object-cover border-[#FF97DB] border-8"/>

              <div className="flex flex-col">
                <p className="mb-2 font-bold text-xl">CodePath Emerging Engineers Empowerment Program</p>
                <p className="mb-2 text-lg">
                  I am part of the CodePath E3 program, a community of aspiring engineers where I receive mentorship, 
                  career resources, and networking opportunities to further develop my skills and career in tech. 
                  I successfully completed CodePath's Web 101 course with honors, where I built my own website, further strengthening my technical skills.
                </p>
              </div>
            </div>

            {/* Right Column (INIT FIU Text + CodePath Image) */}
            <div className="w-1/2 flex flex-col gap-8  m-10">
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold mb-2 text-right">ACTIVITIES</h3>
                <p className="mb-2 font-bold text-xl text-right">INIT FIU - Creative Director</p>
                <p className="mb-2 text-lg text-right">
                  With over 4,000 members, INIT is a nonprofit tech organization that empowers underserved communities to launch careers in technology.
                  As Creative Director at INIT, I work to design assets for ShellHacks, Florida’s Largest Hackathon (1,400+ participants).
                  Collaborating with my team, I help create an engaging experience that empowers students to develop their skills and secure opportunities in the tech industry.
                </p>
              </div>

              <img src="/codepath-group-pic.jpg" className="w-full h-auto object-cover border-[#FF97DB] border-8"/>
            </div>
                  </section>
            
              </div>
      )}
    </div>

<footer className="sticky bottom-0 z-[-1]">
      <Footer />
</footer>
    </main>
  );
}
