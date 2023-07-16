import { BiLogoSpringBoot  } from 'react-icons/bi';

function SkillCards (props) 
{
    let data = props.section.list;
    console.log()
    return (
        <div className="bg-[#151C28] w-full md:w-[44%] lg:w-[44%] mx-3 my-2 h-fit min-h-[350px] rounded-3xl mt-5 py-3">
            <div id="title" className="w-100 h-28 flex justify-center items-center">
                <div id="text" className="w-[45%] h-20 flex items-end text-center">
                    <p className="m-auto oswald-font text-lg sm:text-2xl lg:text-2xl md:text-2xl text-[#9589D7] tracking-wide">{ props.section.part }</p>
                </div>
            </div>
            <div id="list" className="grid grid-cols-2 grid-flow-row gap-1 text-center md:p-2 lg:p-2">
                {
                    data.map((element) => (
                        <div key={element} className="h-14 flex flex-row justify-start items-center ps-4 md:p-0 lg:p-0"> 
                            <p className="text-[#9589D7] text-xl mt-1 me-4 md:ms-[40px] lg:ms-[40px]">{ element.title.icon } </p>
                            <p class="text-white text-base oswald-font tracking-wide">{ element.title.name }</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default SkillCards;