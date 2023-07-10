function SkillCards(props)
{
    let { icon, title, details } = props.data
    
    return (
        <div id="card" className="bg-[#151C28] w-[31%] h-28 rounded-lg flex flex-col justify-center items-center md:w-[29%] md:h-28">
            <p className="text-[#A395E9] text-sm md:text-lg">{ icon }</p>
            <p className="text-[#E8EAED] text-sm md:text-base">{ title }</p>
            <p className="text-[#A9ADB4] mt-1 text-xs text-center md:text-center md:text-xs md:mx-1">{ details }</p>
        </div>
    )
}

export default SkillCards;