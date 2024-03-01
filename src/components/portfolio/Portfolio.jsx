import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/CPCScore.jpg';
import IMG2 from '../../assets/BrainTumor.jpg';
import IMG3 from '../../assets/Raspberry.jpg';
import IMG4 from '../../assets/Retinopathy.jpg';

const data = [
	{
		id: 1,
		image: IMG,
		title: 'Innovative Threads: A 3D design Experience powered by DALL-E',
		github: 'https://github.com/praveenraj087/three-generative-ai',
	},
	{
		id: 2,
		image: IMG,
		title: 'Personal Portfolio Design',
		github:
			'https://github.com/praveenraj087/praveenraj087.github.io/tree/main',
	},
	{
		id: 2,
		image: IMG1,
		title: 'Best CPC Score',
		github: 'https://github.com/praveenraj087/best-cpc-score',
	},
	{
		id: 3,
		image: IMG2,
		title: 'Brain Tumor Detection using Deep Learning',
		github: 'https://github.com/praveenraj087/brain-tumor-detection-DL',
	},
	{
		id: 4,
		image: IMG3,
		title: 'Bibliometric Study of Raspberry Pi in Healthcare',
		github:
			'https://thesai.org/Publications/ViewPaper?Volume=11&Issue=10&Code=IJACSA&SerialNo=38',
	},
	{
		id: 5,
		image: IMG4,
		title: 'Diabetic Retinpathy Diagnosis',
		github: 'https://github.com/praveenraj087/diabetic-retinopathy',
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
									Github Repo
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
