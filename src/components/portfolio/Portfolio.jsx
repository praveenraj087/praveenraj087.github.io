import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/CPCScore.jpg';
import IMG2 from '../../assets/BrainTumor.jpg';
import IMG3 from '../../assets/Raspberry.jpg';
import IMG4 from '../../assets/Retinopathy.jpg';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Best CPC Score',
		github: 'https://github.com',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Brain Tumor Detection using Deep Learning',
		github: 'https://github.com',
	},
	{
		id: 3,
		image: IMG3,
		title: 'Bibliometric Study of Raspberry Pi in Healthcare',
		github: 'https://github.com',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Diabetic Retinpathy Diagnosis',
		github: 'https://github.com',
	},
];
const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github }) => {
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt={title} />
							</div>
							<div className='portfolio__item-cta'>
								<h3>{title}</h3>
								<a href={github} className='btn'>
									Github
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
