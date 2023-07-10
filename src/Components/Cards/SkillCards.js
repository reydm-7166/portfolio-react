function SkillCards(props)
{
    return (
        <div id="card" className="bg-[#151C28] w-[31%] h-24 rounded-lg flex flex-col justify-center items-center md:w-[29%] md:h-28">
            <p className="my-1 text-[#9589D7] text-sm md:text-base">{ props.icon }</p>
            <p className="my-1 text-[#E8EAED] text-sm md:text-base">{ props.title }</p>
            <p className="my-1 text-[#A9ADB4] text-sm md:text-base">{ props.details }</p>
        </div>
    )
}

export default SkillCards;