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

function App() {
  return (
    <div className='App'>
		  <BrowserRouter>
				<Routes>
					<Route path="/*" element={<Main />}/>
					<Route path="/login/*" element={<Login />}/>
					<Route path="/Signup/*" element={<Signup />}/>
					<Route path="/Challenge/*" element={<ChallengeRegister />}/>
					
					{/* 추가 */}
					<Route path="/ChallengeView/*" element={<ChallengeViewAll />}/> 
					<Route path="/Announcement" element={<Announcement />}/> 
					<Route path="/AnnouncementRegister" element={<AnnouncementRegister />}/> 
					<Route path="/Mypage" element={<Mypage />}/> 
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
