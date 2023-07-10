import SkillCards from "../Cards/SkillCards";

function About()
{
    return (
        <section id="ParentContainer" className="w-96 m-auto rounded-md mt-5 h-fit sm:w-10/12 md:mt-10 md:w-[700px] lg:w-[985px]">
            <div id="LabelContainer" className="text-center py-1">
                <p className="text-[#797D83] mx-auto text-sm md:text-xl"><i class="fa-regular fa-user fa-xl"></i></p>
                <p className="text-[#9589D7] font-bold text-sm my-2 oswald-font tracking-wider md:text-xl">About Me</p>
            </div>

            <div id="DetailsContainer" className="mt-2 flex flex-wrap">
                <div id="Image" className="rounded-[22px] bg-blue-500 w-80 m-auto h-64 sm:w-80 md:w-[300px] md:h-[300px]">
                    img
                </div>
                <div id="detailsSection" className="w-full min-h-[300px] h-fit lg:h-64 mt-12 md:w-4/6 md:mt-0">
                    <div id="cardContainer" className="h-1/2 px-2 flex flex-wrap justify-evenly">
                        <SkillCards icon="exp" title="Experience" details="5 Months"></SkillCards>
                        <SkillCards icon="exp" title="Projects" details="3+"></SkillCards>
                        <SkillCards icon="exp" title="Degree" details="Bachelor's"></SkillCards>
                    </div>
                    <div id="Objectives" className="h-fit px-2 py-1 w-full flex mt-8 md:mt-1 justify-center">
                        <div className="m-2 min-h-fit">
                            <p className="ms-4 text-center md:text-start text-[#A9ADB4]">
                            I'm a backend developer who is passionate about implementing clean code. I strive to contribute to a company where I can learn and grow while making a positive impact.
                            </p>
                        </div>
                    </div>
                    <div id="ConnectButton" className="ms-4 mt-4 h-[50px] text-center md:text-start md:mt-6">
                        <button className="w-42 bg-[#A395E9] md:ms-3 hover:bg-blue-700 text-black poppins-font py-2 px-4 rounded md:mt-3">Connect with me</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;