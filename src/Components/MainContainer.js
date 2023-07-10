import './MainContainer.css';
import NavigationBar from './Template/NavigationBar'
import Profile from './Sections/Profile'
import About from './Sections/About';
import Skills from './Sections/Skills';

function MainContainer() {
    return (
        <div className="Background">
            <NavigationBar />
            <Profile />
            <About />
            <Skills />
        </div>
    );
}

export default MainContainer;
