export default function Footer(){
    return(
        <everything>
        <main className="w-full h-[80vh] bg-[#212121] text-white flex flex-col">
            <section className="flex gap-[70vw] mt-[5vh]">

            <div className="flex flex-start text-[8vh] leading-[10vh] whitespace-nowrap font-bold">
                <h1>LET'S WORK TOGETHER.</h1>
            </div>

            <div className="flex flex-end gap-[5vw]">
                <div>
                    <li className="flex flex-col">
                        <a>
                            Home
                        </a>
                        <a>
                            Recent Projects
                        </a>
                        <a>
                            Contact Me
                        </a>
                    </li>
                </div>
                <div >
                    <li className="flex flex-col">
                        <a  href="https://www.linkedin.com/in/emelybarcenas/"
                            target="_blank"
                            rel="noopener noreferrer"> 
                            LinkedIn
                        </a>
                        <a
                         href="https://github.com/emelybarcenas"
                         target="_blank"
                         rel="noopener noreferrer">
                          Github
                        </a>
                        <a>
                          Resume
                        </a>
                    </li>
                </div>
            </div>
            </section>
            <section className="mt-[20vh] text-center w-full">
            <h1 className="text-[20vh] leading-[15vh] font-bold">
                EMELY BARCENAS
            </h1>
            <div className="border-t-2 border-white mt-4 mx-[5vw]"></div>
            <div className="flex justify-between text-nowrap mt-4 mx-[5vw]">
    <h3 className="">© 2025 Emely Barcenas</h3>
    <h3 className="">
      Made with React, Tailwind CSS, & love &lt;3
    </h3>
  </div>
            </section>
        </main>
         </everything>
    )
}
