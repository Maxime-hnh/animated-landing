import React, { useEffect, useRef } from 'react'
import './HomePage.css'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import vegetable from './assets/fruits.jpg'
import farmer from './assets/farmer.jpg'
import logo from './assets/logo_okolo_text.svg'
import map from './assets/map.png'
import gsap from "gsap";
import ConsumeLocal from './Components/ConsumeLocal'
import Events from './Components/Events'
import Trust from './Components/Trust'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Features from './Components/Features'



const TestPage = ({ ...props }) => {


	const homeItem1 = useRef<HTMLLIElement>(null)
	const homeItem2 = useRef<HTMLLIElement>(null)
	const homeItem3 = useRef<HTMLLIElement>(null)

	const imgItem1 = useRef<HTMLImageElement>(null)
	const imgItem2 = useRef<HTMLImageElement>(null)
	const imgItem3 = useRef<HTMLImageElement>(null)


	useEffect(() => {
		if (homeItem1.current && homeItem2.current && homeItem3.current) {
			setTimeout(() => {
				gsap.set([homeItem1.current, homeItem2.current, homeItem3.current], { opacity: 0, y: +100 });
				gsap.set([imgItem2.current, imgItem3.current], { opacity: 0 })
			}, 0);
			const tl = gsap.timeline({ repeat: -1 });

			tl.fromTo(homeItem1.current, { y: +100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "elastic.out(1.2, 0.5)" })
				.fromTo(homeItem1.current, { y: 0, opacity: 1 }, { y: +10, opacity: 0, duration: 0.4 }, 3)
				.fromTo(imgItem1.current, { opacity: 0.8 }, { opacity: 0, duration: 2, ease: "expo.inOut" }, 2.7)
				.fromTo(imgItem2.current, { opacity: 0, scale: 1.2 }, { opacity: 0.8, scale: 1, duration: 2, ease: "expo.inOut" }, 2.7)

				.fromTo(homeItem2.current, { y: +100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "elastic.out(1.2, 0.5)" }, 3.2)
				.fromTo(homeItem2.current, { y: 0, opacity: 1 }, { y: +10, opacity: 0, duration: 0.4 }, 6.4)
				.fromTo(imgItem2.current, { opacity: 0.8 }, { opacity: 0, duration: 2, ease: "expo.inOut" }, 6.1)
				.fromTo(imgItem3.current, { opacity: 0, scale: 1.2 }, { opacity: 0.8, scale: 1, duration: 2, ease: "expo.inOut" }, 6.1)

				.fromTo(homeItem3.current, { y: +100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "elastic.out(1.2, 0.5)" }, 6.6)
				.fromTo(homeItem3.current, { y: 0, opacity: 1 }, { y: +10, opacity: 0, duration: 0.4 }, 8.6)
				.fromTo(imgItem3.current, { opacity: 0.8 }, { opacity: 0, duration: 2, ease: "expo.inOut" }, 8.3)
				.fromTo(imgItem1.current, { opacity: 0, scale: 1.2 }, { opacity: 0.8, scale: 1, duration: 2, ease: "expo.inOut" }, 8.3)
		}
	}, []);


	return (
		<>
			<div className='home-test'>
				<div className='c-header -absolute'>
					<div className="o-container">
						<nav className='c-header_nav'>
							<div className="c-header_logo">
								<img src={logo} alt="logo" />
							</div>
							<ul className="c-header_nav_list">
								<li className="c-header_nav-item"><a href="#">accueil</a></li>
								<li className="c-header_nav-item"><a href="#">notre histoire</a></li>
								<li className="c-header_nav-item"><a href="#">contact</a></li>
							</ul>
						</nav>
						<div></div>
						<div className="c-header_media">
							<ul className="c-header_media_list">
								<li className="c-header_media_item"><a href="#">S'identifier</a></li>
								<li className="c-header_media_item"><a href="#"><BsFacebook size={30} /></a></li>
								<li className="c-header_media_item"><a href="#"><BsInstagram size={30} /></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="c-home">
					<div className="o-container">
						<div className="c-home_inner">
							<div className="c-home_heading">
								<div className="c-home_title">
									<div>
										<p>Consommer local</p>
									</div>
									<div>
										<span>n'aura jamais été aussi</span>
									</div>
								</div>
								<ul className='c-home_title_list'>
									<li className='c-home_title_item' ref={homeItem1}>simple</li>
									<li className='c-home_title_item' ref={homeItem2}>lorem</li>
									<li className='c-home_title_item' ref={homeItem3}>ipsum</li>
								</ul>
							</div>
							<button className='c-home_button button is-rounded'>Explorer la carte</button>
						</div>
						<div className="c-home_visual">
							<div className="c-home_list">
								<div className="c-home_item">
									<img src={vegetable} ref={imgItem1} />
								</div>
								<div className="c-home_item" >
									<img src={farmer} ref={imgItem2} />
								</div>
								<div className="c-home_item" >
									<img src={map} ref={imgItem3} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ConsumeLocal />
			<Events />
			<Trust />
			<Features />
		</>
	)
}

export default TestPage
