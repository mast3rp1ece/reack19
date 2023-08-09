import React from "react";
import './photos.css';
import art1 from '../images/ph1.jpg';
import art2 from '../images/ph2.jpg';
import art3 from '../images/ph3.jpg';
import art4 from '../images/ph4.jpg';
import art5 from '../images/ph5.jpg';
import art6 from '../images/ph6.jpg';
import art7 from '../images/ph7.jpg';
import art8 from '../images/ph8.jpg';
import art9 from '../images/ph9.jpg';
import art10 from '../images/ph10.jpg';
import art11 from '../images/ph11.jpg';
import art12 from '../images/ph12.jpg';
import art13 from '../images/ph13.jpg';
import art14 from '../images/ph14.jpg';
import art15 from '../images/ph15.jpg';

const Photos = () => {
	return (
		<div className="photos_container">
			<img className="photos_img" src={art1} alt="GIrl on wolf" />
			<img className="photos_img" src={art2} alt="Girls on the road" />
			<img className="photos_img" src={art3} alt="Girls in wood" />
			<img className="photos_img" src={art4} alt="Men and explosion" />
			<img className="photos_img" src={art5} alt="Men and zombies" />
			<img className="photos_img" src={art6} alt="Girl in wood" />
			<img className="photos_img" src={art7} alt="Mafia" />
			<img className="photos_img" src={art8} alt="Santa Claus" />
			<img className="photos_img" src={art9} alt="Girls meditating" />
			<img className="photos_img" src={art10} alt="Girl with spit" />
			<img className="photos_img" src={art11} alt="Halloween" />
			<img className="photos_img" src={art12} alt="Girl with sword" />
			<img className="photos_img" src={art13} alt="Me=)" />
			<img className="photos_img" src={art14} alt="Girl with It" />
			<img className="photos_img" src={art15} alt="Couple" />
		</div>
	)
}

export default Photos;