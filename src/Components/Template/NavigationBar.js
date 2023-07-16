import Name from '../Navigation/Name';
import Project from '../Navigation/Project';
import Skills from '../Navigation/Skills';
import DarkMode from '../Buttons/DarkLightMode';

function NavigationBar() {
    return (
        <div className="h-16 flex items-center max-w-screen-lg m-auto rounded-md shadow-lg sticky top-0 bg-[#0B111E]">
            <Name class="flex-1 px-8 text-xl w-64 oswald-font text-[#9589D7]"></Name>
            <Skills class="flex-none text-l oswald-font underline underline-offset-4 mx-4 cursor-pointer text-[#9589D7]"></Skills>
            <Project class="flex-none text-l oswald-font underline underline-offset-4 mx-4 rounded-md text-center p-2 cursor-pointer text-[#9589D7]"></Project>
            
        </div>
    )
}

export default NavigationBar;