import React, { useState } from 'react';
import './qualification.css';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { RiGraduationCapLine } from 'react-icons/ri';
const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);
	const toggleTab = (index) => {
		setToggleState(index);
	};
	return (
		<section className='qualification section' id='qualification'>
			<h5 className='section__subtitle'>My Personal Journey</h5>
			<h2 className='section__title'>Qualifications</h2>

			<div className='container qualification__container'>
				<div className='qualification__tabs'>
					<div
						className={
							toggleState === 1
								? 'qualification__button qualification__active button--flex'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(1)}
					>
						<i className='uil uil-graduation-cap qualification__icon'>
							{/* <RiGraduationCapLine size='1rem' /> */}
						</i>
						Education
					</div>
					<div
						className={
							toggleState === 2
								? 'qualification__button qualification__active button--flex'
								: 'qualification__button button--flex'
						}
						onClick={() => toggleTab(2)}
					>
						<i className='uil uil-briefcast-alt'>
							{/* <MdOutlineWorkOutline size='1rem' /> */}
						</i>
						Experience
					</div>
				</div>
				<div className='qualification__sections'>
					<div
						className={
							toggleState === 1
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									MS Computer Engineering
								</h3>
								<span className='qualification_subtitle'>
									Stony Brook University
								</span>
								<div className='qualification__calendar'>
									<i className='iul uil-calendar-alt'></i>
									2022-Present
								</div>
							</div>
							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
						</div>

						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div>
								<h3 className='qualification__title'>BS Computer Science</h3>
								<span className='qualification_subtitle'>
									Vellore Institute of Technology
								</span>
								<div className='qualification__calendar'>
									<i className='iul uil-calendar-alt'></i>
									2018-2022
								</div>
							</div>
						</div>
					</div>

					<div
						className={
							toggleState === 2
								? 'qualification__content qualification__content-active'
								: 'qualification__content'
						}
					>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Graduate Teaching Assistant
								</h3>
								<span className='qualification_subtitle'>
									Stony Brook University
								</span>
								<div className='qualification__calendar'>
									<i className='iul uil-calendar-alt'></i>
									Jan 2024-Present
								</div>
							</div>
							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
						</div>
						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div>
								<h3 className='qualification__title'>
									Embedded Software Engineer Intern
								</h3>
								<span className='qualification_subtitle'>Qualcomm Inc.</span>
								<div className='qualification__calendar'>
									<i className='iul uil-calendar-alt'></i>
									Jul 2023 - Aug 2023
								</div>
							</div>
						</div>
						<div className='qualification__data'>
							<div>
								<h3 className='qualification__title'>
									Graduate Research Assistant
								</h3>
								<span className='qualification_subtitle'>
									MESL, UC San Diego
								</span>
								<div className='qualification__calendar'>
									<i className='iul uil-calendar-alt'></i>
									Jun 2023 - Aug 2023
								</div>
							</div>
							<div>
								<span className='qualification__rounder'></span>
								<div className='qualification__line'></div>
							</div>
						</div>
						<div className='qualification__data'>
							<div></div>
							<div>
								<span className='qualification__rounder'></span>
								<span className='qualification__line'></span>
							</div>

							<div>
								<h3 className='qualification__title'>Data Science Intern</h3>
								<span className='qualification_subtitle'>
									Society for Health and Medical Technology
								</span>
								<div className='qualification__calendar'>
									<i className='iul uil-calendar-alt'></i>
									Jan 2022 - Jul 2022
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
