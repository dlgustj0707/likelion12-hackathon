import './App.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import ChallengeRegister from './pages/challengeRegister/challengeRegister';
import ChallengeViewAll from './pages/challengeViewAll/challengeViewAll';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Announcement from './pages/announcement/announcement';
import AnnouncementRegister from './pages/announceRegister/announcementRegister';
import Mypage from './pages/mypage/mypage';
import AnnouncementDetail from './pages/announcementDetail/announcementDetail';
import { useState } from 'react';
import NavBar from './component/navBar/navBar'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

	return (
		<div className='App'>
			<BrowserRouter>
				<NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
				<Routes>
					<Route path="/*" element={<Main />} />
					<Route path="/login/*" element={<Login onLogin={handleLogin} />} />
					<Route path="/signup/*" element={<Signup />} />
					<Route path="/challenge/*" element={<ChallengeRegister />} />
					
					{/* 추가 */}
					<Route path="/challengeView" element={<ChallengeViewAll />} /> 
					<Route path="/announcement" element={<Announcement />} /> 
					<Route path="/announcementRegister" element={<AnnouncementRegister />} /> 
					<Route path="/announcementDetail" element={<AnnouncementDetail />} /> 
					<Route path="/mypage" element={<Mypage />} /> 
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
