import Name from '../Navigation/Name';
import Project from '../Navigation/Project';
import Skills from '../Navigation/Skills';
import DarkMode from '../Buttons/DarkLightMode';

function NavigationBar() {
    return (
        <div className="bg-slate-500 h-16 flex items-center w-6/12 m-auto rounded-md pe-10">
            <Name class="flex-1 px-8 text-2xl w-64 oswald-font text-white"></Name>
            <Project class="flex-none text-xl oswald-font underline underline-offset-4 mx-4 rounded-md text-center p-2 cursor-pointer"></Project>
            <Skills class="flex-none text-xl oswald-font underline underline-offset-4 mx-4 cursor-pointer"></Skills>
            {/* <DarkMode btnClass="flex-initial px-8 text-xl oswald-font cursor-pointer mx-1"></DarkMode> */}
        </div>
    )
}

export default NavigationBar;