import './App.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import ChallengeRegister from './pages/challengeRegister/challengeRegister';
import ChallengeViewAll from './pages/challengeViewAll/challengeViewAll';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Announcement from './pages/announcement/announcement';
import AnnouncementRegister from './pages/announceRegister/announcementRegister';
import Mypage from './pages/mypage/mypage';
import AnnouncementDetail from './pages/announcementDetail/announcementDetail';
import { AuthProvider } from './context/AuthContext';
import NavBar from './component/navBar/navBar';

function App() {
    return (
        <AuthProvider>
            <div className='App'>
                <BrowserRouter>
                    <ConditionalNavBar />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/challenge" element={<ChallengeRegister />} />
                        <Route path="/challengeView" element={<ChallengeViewAll />} />
                        <Route path="/announcement" element={<Announcement />} />
                        <Route path="/announcementRegister" element={<AnnouncementRegister />} />
                        <Route path="/announcementDetail" element={<AnnouncementDetail />} />
                        <Route path="/mypage" element={<Mypage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthProvider>
    );
}

function ConditionalNavBar() {
    const location = useLocation();
    const shouldShowNavBar = location.pathname !== "/login" && location.pathname !== "/signup";

    return shouldShowNavBar ? <NavBar /> : null;
}

export default App;
