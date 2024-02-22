import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { SiFirebase, SiMongodb, SiTensorflow } from 'react-icons/si';
import { SiPytorch } from 'react-icons/si';
import { SiKeras } from 'react-icons/si';
import { SiOpencv } from 'react-icons/si';
import { SiApachespark } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { SiFlask } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa6';
import { FaNpm } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri';
import { SiGooglecloud } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiPostgresql } from 'react-icons/si';
import { TbBrandMongodb } from 'react-icons/tb';
import { FaDocker } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>

			<div className='container experience__container'>
				<div className='experience_ML'>
					<h3>Data Science & AI</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<FaPython className='experience__details-icons' />
							<div>
								<h4>Python</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiTensorflow className='experience__details-icons' />
							<div>
								<h4>TensorFlow</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiPytorch className='experience__details-icons' />
							<div>
								<h4>PyTorch</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiKeras className='experience__details-icons' />
							<div>
								<h4>Keras</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiOpencv className='experience__details-icons' />
							<div>
								<h4>OpenCV</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiApachespark className='experience__details-icons' />
							<div>
								<h4>PySpark</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>
				<div className='experience_webdev'>
					<h3>Web Development</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<AiOutlineHtml5 className='experience__details-icons' />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaCss3Alt className='experience__details-icons' />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<IoLogoJavascript className='experience__details-icons' />
							<div>
								<h4>JavaScript</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaReact className='experience__details-icons' />
							<div>
								<h4>React</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaNode className='experience__details-icons' />
							<div>
								<h4>Node</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiFlask className='experience__details-icons' />
							<div>
								<h4>Flask</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiTailwindcss className='experience__details-icons' />
							<div>
								<h4>Tailwind</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaNpm className='experience__details-icons' />
							<div>
								<h4>NPM</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<RiFlutterFill className='experience__details-icons' />
							<div>
								<h4>Flutter</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>
				<div className='experience_cloud'>
					<h3>Cloud-Infra Architecture</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<SiGooglecloud className='experience__details-icons' />
							<div>
								<h4>GCP</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaAws className='experience__details-icons' />
							<div>
								<h4>AWS</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<IoLogoFirebase className='experience__details-icons' />
							<div>
								<h4>Firebase</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiPostgresql className='experience__details-icons' />
							<div>
								<h4>PostgreSQL</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<TbBrandMongodb className='experience__details-icons' />
							<div>
								<h4>MongoDB</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<FaDocker className='experience__details-icons' />
							<div>
								<h4>Docker</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<SiKubernetes className='experience__details-icons' />
							<div>
								<h4>Kubernetes</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
