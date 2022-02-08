// import './App.css';
import Advertise from './Components/Advertise/Advertise';
import Explore from './Components/Explore';
import Footer from './Components/Footer';
import Recommend from './Components/Recommend';
import TopBar from './Components/TopBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<TopBar />
			<Container>
				{/* <Advertise /> */}
				<Explore />
				<Recommend />
				<Advertise />
				<Footer />
			</Container>
			<Routes>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
