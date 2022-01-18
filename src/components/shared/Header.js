import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from 'react-router-dom'
const linkStyle = {
	color: 'white',
	textDecoration: 'none'
}

const authenticatedOptions = (

	<div className='authOptions'>
		<NavLink className="signOut" style={linkStyle} to="sign-out">Sign Out</NavLink>
		<NavLink className="dashboard" style={linkStyle} to="/dashboard">Dashboard </NavLink>
		<NavLink className="changepassword" style={linkStyle} to="change-password">Change Password</NavLink>
	</div>

)

const unauthenticatedOptions = (
	<div className='unAuthOptions'>
		<NavLink className="signup" style={linkStyle} to="sign-up">Sign Up</NavLink>
		<NavLink className="signin" style={linkStyle} to="sign-in">Sign In</NavLink>
	</div>

)

const alwaysOptions = (
	<div className='alwaysOptions'>
		<NavLink className="home" style={linkStyle} to="/">Home</NavLink>
		<NavLink className="contacts" style={linkStyle} to="/contacts">Contact Us</NavLink>
	</div>
)

const Header = ({ user }) => (
	<Navbar className='d-flex flex-row' bg='black' variant='dark' expand='lg'>
		<Navbar.Brand>
		<div id="cryptoByte">
				<Link to='/' style={linkStyle}>
					Crypto/Bytes
				</Link>
			</div>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav>
				{user && (
					<span className='navbar-text-mr-2'>Welcome, {user.fullName}!</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
