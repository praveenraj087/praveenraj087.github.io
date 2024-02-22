import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Qualifications from './components/qualifications/Qualification';
import Experiences from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<Nav />
			<About />
			<Qualifications />
			<Experiences />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};

export default App;
