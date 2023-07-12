import SkillCards from "../Cards/SkillCards";

const skills = {
    'backend': {
        'title': 'Backend Development',
        'list' : [
            'PHP',
            'Laravel',
            'Codeigniter',
            'Ruby',
            'RoR',
            'Java',
            'Spring/SpringBoot',
            'Node/Express.js'
        ]
    },
    'frontend': {
        'title': 'Frontend Development',
        'list' : [
            'CSS/LESS',
            'Javascript',
            'jQuery',
            'Livewire',
            'VueJS',
            'ReactJS',
            'Bootstrap',
            'Tailwind',
        ]
    },
    'technologies': {
        'title': 'Technologies',
        'list': [
            'Postgresql',
            'MySQL',
            'Git/GitHub',
            'RESTful',
            'Linux',
            'LEMP stack',
        ]
    }
}

function Skills()
{
    return (
        <section id="skillsContainer" className="w-full m-auto rounded-md min-h-[400px] h-fit sm:w-10/12 md:mt-[300px] md:w-[95%] lg:w-[985px]">
            <div id="title" className="w-100 h-fit text-center pt-2 mt-[30px] md:mt-0 lg:mt-0">
                <p className="text-[#797D83] mx-auto text-sm md:text-xl"><i class="fa-solid fa-gears fa-xl"></i></p>
                <p className="text-[#9589D7] font-bold text-lg my-2 oswald-font tracking-wider md:text-xl">My Skills</p>
            </div>
            <div id="skill-cards" className="flex flex-wrap justify-center align-center px-2">
                <SkillCards section={skills.backend}></SkillCards>
                <SkillCards section={skills.frontend}></SkillCards>
                <SkillCards section={skills.technologies}></SkillCards>
            </div>

        </section>
    )
}

export default Skills;