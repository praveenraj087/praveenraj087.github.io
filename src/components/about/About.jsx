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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut at
						impedit deleniti ab nobis sed ea perferendis libero repellendus,
						repudiandae corporis tenetur reprehenderit id dicta doloremque
						doloribus consequuntur quam ullam.
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
