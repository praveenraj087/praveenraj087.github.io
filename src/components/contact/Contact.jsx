import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

export const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_18ijq4g', 'template_2jt3i1g', form.current, {
				publicKey: 'EM22TBRM3UvOedQ-w',
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);

		e.target.reset();
	};
	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact me</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>thepokemonkiller2@gmail.com</h5>
						<a href='mailto:thepokemonkiller2@gmail.com' target='_blank'>
							Send a Message
						</a>
					</article>
					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+16318045860</h5>
						<a
							href='https://api.whatsapp.com/send?phone+16318045860'
							target='_blank'
						>
							Send a Message
						</a>
					</article>
					<article className='contact__option'>
						<FaGithub className='contact__option-icon' />
						<h4>Github</h4>
						<h5>praveenraj087</h5>
						<a href='https://github.com/praveenraj087' target='_blank'>
							View Profile
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='10'
						placeholder='Your Message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
