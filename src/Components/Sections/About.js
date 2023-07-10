import SkillCards from "../Cards/SkillCards";

function About()
{
    return (
        <section id="ParentContainer" className="w-96 m-auto rounded-md mt-5 h-fit bg-white sm:w-10/12 md:mt-10 md:w-[700px] lg:w-[985px]">
            <div id="LabelContainer" className="text-center py-1">
                <p className="text-[#797D83] mx-auto text-sm md:text-xl"><i class="fa-regular fa-user fa-xl"></i></p>
                <p className="text-[#9589D7] font-bold text-sm my-2 oswald-font tracking-wider md:text-xl">About Me</p>
            </div>

            <div id="DetailsContainer" className="bg-black mt-2 flex flex-wrap">
                <div id="Image" className="bg-blue-500 w-80 m-auto h-64 rounded sm:w-80 md:w-2/6">
                    img
                </div>
                <div id="detailsSection" className="bg-green-500 w-full h-64 mt-5 md:w-4/6 md:mt-0">
                    <div id="cardContainer" className="h-1/2 px-2 flex flex-wrap justify-evenly">
                        <SkillCards icon="exp" title="Experience" details="5 Months"></SkillCards>
                        <SkillCards icon="exp" title="Projects" details="3+"></SkillCards>
                        <SkillCards icon="exp" title="Degree" details="Bachelor's"></SkillCards>
                    </div>
                    <div id="Objectives" className="h-1/2 px-2 py-1">b</div>
                </div>
            </div>
        </section>
    )
}

export default About;