import React from 'react';
import './about.css';
import ME from '../../assets/me-about.svg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
const About = () => {
	return (
		<section id='about'>
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<img src={ME} alt='' />
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>2 Internships</small>
						</article>
						<article className='about__card'>
							<FiUsers className='about__icon' />
							<h5>Education</h5>
							<small>MS</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>10+ Completed</small>
						</article>
					</div>

					<p>
						As an adept professional in the technology sector, I specialize in
						machine learning and data science, integrating analytical precision
						with creative problem-solving. My approach combines technical
						proficiency with strategic thinking, aiming to resolve complex
						issues efficiently. Committed to continuous learning, I leverage my
						skills to contribute positively to dynamic teams and impactful
						projects, fostering growth and technological advancement.
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
