import './MainContainer.css';
import Index from './Index'
import Profile from './Sections/Profile'

function MainContainer() {
    return (
        <div className="Background pt-3">
            <Index />
            <Profile />
        </div>
    );
}

export default MainContainer;
