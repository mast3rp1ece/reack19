import React from "react";
import './home.css';
import homephoto from '../images/myphoto.jpg'

const Home = () => {
	return (
		<div className="home_container">
			<h1>My First Art</h1>
			<img className="main_img" src={homephoto} alt="Author" />
			<p>Taras Kotovych </p>
		</div>
	)
}
export default Home;