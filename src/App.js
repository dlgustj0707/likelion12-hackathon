import './App.css';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import ChallengeRegister from './pages/challengeRegister/challengeRegister';
import Main from './pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
		  <BrowserRouter>
				<Routes>
					<Route path="/*" element={<Main />}/>
					<Route path="/login/*" element={<Login />}/>
					<Route path="/Signup/*" element={<Signup />}/>
					<Route path="/Challenge/*" element={<ChallengeRegister />}/>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
