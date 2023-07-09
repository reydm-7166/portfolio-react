import './MainContainer.css';
import Index from './Index'
import Profile from './Sections/Profile'
import About from './Sections/About';

function MainContainer() {
    return (
        <div className="Background pt-3">
            <Index />
            <Profile />
            <About />
        </div>
    );
}

export default MainContainer;
