function About()
{
    return (
        <div className="w-6/12 m-auto rounded-md mt-5 p-2 h-80 lg:mt-10">
            <div id="LabelContainer" className="text-center py-1">
                <p className="text-[#797D83] mx-auto text-sm lg:text-xl"><i class="fa-regular fa-user fa-xl"></i></p>
                <p className="text-[#9589D7] font-bold text-sm my-2 oswald-font tracking-wider lg:text-xl">About Me</p>
            </div>

            <div id="DetailsContainer" className="bg-white mt-2 flex">
                <div id="image" className="">
                    img
                </div>
                <div id="detailsSection">
                    <div id="cardContainer"></div>
                    <div id="Objectives"></div>
                </div>
            </div>
        </div>
    )
}

export default About;