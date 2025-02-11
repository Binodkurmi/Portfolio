import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../Style/Footer.css';

const Footer = () => {
	const [result, setResult] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult('Sending...');
		const formData = new FormData(event.target);

		formData.append('access_key', 'a7dfd100-2d0e-4ded-a60c-51f44779714c');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			});

			const data = await response.json();

			if (data.success) {
				setResult('Message sent successfully!');
				event.target.reset();
			} else {
				setResult('Error: ' + data.message);
			}
		} catch (error) {
			setResult('An unexpected error occurred. Please try again later.');
		}

		setTimeout(() => setResult(''), 3000);
	};

	return (
		<footer id="contact" className="footer">
			<div className="footer-container">
				<div className="footer-form">
					<h3>Send a Message</h3>
					<form onSubmit={onSubmit}>
						<input type="text" name="name" placeholder="Your Name" required />
						<input type="email" name="email" placeholder="Your Email" required />
						<textarea name="message" placeholder="Your Message" required></textarea>
						<button type="submit">Send</button>
					</form>
					{result && (
						<div className="notification">
							{result}
						</div>
					)}
				</div>

				<div className="footer-contact">
					<h3>Contact Me</h3>
					<p>I am a Front-End Developer</p>
					<p>Email: binodchaudhary3850@gmail.com</p>
					<p>23800, Kaplivastu-3 Taulihawa</p>
					<p>Phone: +997-9821451060</p>
					<div className="social-icons">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<FaFacebook size={25} />
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
							<FaInstagram size={25} />
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
							<FaLinkedin size={25} />
						</a>
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
							<FaTwitter size={25} />
						</a>
					</div>
				</div>
			</div>
			<p className="footer-text">© 2024 Portfolio. All rights reserved. Designed by Binod Kurmi.</p>
		</footer>
	);
};

export default Footer;
