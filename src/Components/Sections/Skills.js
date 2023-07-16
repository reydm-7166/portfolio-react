import SkillCards from "../Cards/SkillCards";
import { BiLogoSpringBoot, BiLogoJavascript, BiLogoVuejs  } from 'react-icons/bi';
import { DiRubyRough, DiCodeigniter } from 'react-icons/di';
import { SiRubyonrails, SiCss3, SiJquery, SiLivewire, SiReact, SiTailwindcss, SiBootstrap, SiPostgresql, SiUbuntu, SiGithub, SiMysql } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai'

const skills = {
    'backend': {
        'part': 'Backend Development',
        'list' : [
            {
                'title': {
                    'icon': <i class="fa-brands fa-php"></i>,
                    'name': 'PHP'
                },
            },
            {
                'title': {
                    'icon': <i class="fa-brands fa-laravel"></i>,
                    'name': 'Laravel'
                },
            },
            {
                'title': {
                    'icon': <DiCodeigniter/>,
                    'name': 'Codeigniter'
                },
            },
            {
                'title': {
                    'icon': <DiRubyRough/>,
                    'name': 'Ruby'
                },
            },
            {
                'title': {
                    'icon': <SiRubyonrails/>,
                    'name': 'Ruby on Rails'
                },
            },
            {
                'title': {
                    'icon': <i class="fa-brands fa-java"></i>,
                    'name': 'Java'
                },
            },
            {
                'title': {
                    'icon': <BiLogoSpringBoot />,
                    'name': 'Spring/SpringBoot'
                },
            },
            {
                'title': {
                    'icon': <i class="fa-brands fa-node"></i>,
                    'name': 'Node/Express.js'
                },
            },
        ],
        
    },
    'frontend': {
        'part': 'Frontend Development',
        'list' : [
            {
                'title': {
                    'icon': <SiCss3 />,
                    'name': 'CSS/LESS'
                },
            },
            {
                'title': {
                    'icon': <SiCss3 />,
                    'name': 'Javascript'
                },
            },
            {
                'title': {
                    'icon': <SiJquery />,
                    'name': 'jQuery'
                },
            },
            {
                'title': {
                    'icon': <SiLivewire />,
                    'name': 'Livewire'
                },
            },
            {
                'title': {
                    'icon': <BiLogoVuejs />,
                    'name': 'VueJS'
                },
            },
            {
                'title': {
                    'icon': <SiReact />,
                    'name': 'ReactJS'
                },
            },
            {
                'title': {
                    'icon': <SiBootstrap />,
                    'name': 'Bootstrap'
                },
            },
            {
                'title': {
                    'icon': <SiTailwindcss />,
                    'name': 'Tailwind'
                },
            },
        ]
    },
    'technologies': {
        'part': 'Technologies',
        'list': [
            {
                'title': {
                    'icon': <SiPostgresql />,
                    'name': 'Postgresql'
                },
            },
            {
                'title': {
                    'icon': <SiMysql />,
                    'name': 'MySQL'
                },
            },
            {
                'title': {
                    'icon': <SiGithub />,
                    'name': 'Git/GitHub'
                },
            },
            {
                'title': {
                    'icon': <AiOutlineApi />,
                    'name': 'RESTful API'
                },
            },
            {
                'title': {
                    'icon': <SiUbuntu />,
                    'name': 'Linux'
                },
            },
            {
                'title': {
                    'icon': <SiCss3 />,
                    'name': 'LEMP stack'
                },
            },
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