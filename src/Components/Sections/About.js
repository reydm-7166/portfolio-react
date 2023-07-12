import AboutMe from "../Cards/AboutMeCards";
import Tiger from '../../Assets/img/tigeroh.jpg'

const obj = {
    experience: {
        icon: <i class='fa-solid fa-briefcase'></i>,
        title: "Experience",
        details: "5 Months"
    },
    projects: {
        icon: <i class="fa-solid fa-gears"></i>,
        title: "Projects",
        details: "3+"
    },
    degree: {
        icon: <i class="fa-solid fa-graduation-cap"></i>,
        title: "Degree",
        details: "Information Technology"
    }
}

function About()
{
    return (
        <section id="ParentContainer" className="w-96 m-auto rounded-md mt-5 h-fit sm:w-10/12 md:mt-10 md:w-[95%] lg:w-[985px]">
            <div id="LabelContainer" className="text-center py-1">
                <p className="text-[#797D83] mx-auto text-sm md:text-xl"><i class="fa-regular fa-user fa-xl"></i></p>
                <p className="text-[#9589D7] font-bold text-lg my-2 oswald-font tracking-wider md:text-xl">About Me</p>
            </div>

            <div id="DetailsContainer" className="mt-2 flex flex-wrap md:w-full md:h-full">
                <div id="Image" className="bg-white rounded-[22px] w-80 m-auto h-64 sm:w-[300px] md:w-[300px] md:h-[310px]">
                    <img src={Tiger} alt="" className="w-full h-full rounded-[22px]"/>
                </div>
                <div id="detailsSection" className="w-full min-h-[300px] h-fit mt-12 md:w-[58%] lg:w-[66%] md:mt-0">
                    <div id="cardContainer" className="h-1/2 px-2 flex flex-wrap justify-evenly">
                        <AboutMe data={obj.experience}></AboutMe>
                        <AboutMe data={obj.projects}></AboutMe>
                        <AboutMe data={obj.degree}></AboutMe>
                    </div>
                    <div id="Objectives" className="h-[112px] px-2 py-1 w-full flex mt-5 md:mt-5 justify-center">
                        <div className="m-2 min-h-fit">
                            <p className="ms-4 text-center md:text-start text-[#A9ADB4]">
                            I'm a backend developer who is passionate about implementing clean code. I strive to contribute to a company where I can learn and grow while making a positive impact.
                            </p>
                        </div>
                    </div>
                    <div id="ConnectButton" className="ps-4 mt-4 h-[50px] text-center md:text-start md:mt-5">
                        <button className="w-42 bg-[#A395E9] md:ms-3 hover:bg-blue-700 text-black poppins-font py-2 px-4 rounded md:mt-3 text-xs sm:text-sm lg:text-sm">Connect with me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;