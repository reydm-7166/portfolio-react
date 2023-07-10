function SkillCards(props)
{
    return (
        <div id="card" className="bg-blue-500 w-[31%] h-24 rounded flex flex-col justify-center items-center md:w-[32%] md:h-32">
            <p className="my-1 text-sm md:text-base">{ props.icon }</p>
            <p className="my-1 text-sm md:text-base">{ props.title }</p>
            <p className="my-1 text-sm md:text-base">{ props.details }</p>
        </div>
    )
}

export default SkillCards;