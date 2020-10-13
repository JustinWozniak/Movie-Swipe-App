import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
	<div className="site-header">
	
		<AuthUserContext.Consumer>
			{(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
		</AuthUserContext.Consumer>
	</div>
);

const NavigationAuth = () => (
	<ul className="noBullets">
		<li>
			<Link to={ROUTES.LANDING}  className="landingGlowButton">Welcome</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		<li>
			<Link to={ROUTES.SWIPE}>Start Swiping!</Link>
		</li>
		<li>
			<Link to={ROUTES.NEW_MOVIES}  className="newMoviesGlowButton">New Movies</Link>
		</li>
		{/* <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li> */}
		<li>
			<SignOutButton />
		</li>
	</ul>
);

const NavigationNonAuth = () => (
	<ul className="noBullets">
		<li>
			<Link to={ROUTES.LANDING}  className="landingGlowButton">Welcome</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGN_IN} className='signInGlowButton'>Sign In</Link>
		</li>
		<li>
			<Link to={ROUTES.NEW_MOVIES}  className="newMoviesGlowButton">New Movies</Link>
		</li>
	</ul>
);

export default Navigation;
