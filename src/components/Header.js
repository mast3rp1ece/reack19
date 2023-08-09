import React from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Main</Link>
				</li>
				<li>
					<Link to="/posts">Posts</Link>
				</li>
				<li>
					<Link to="/photos">Photos</Link>
				</li>
				<li>
					<Link to="/contacts">Contacts</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Header;