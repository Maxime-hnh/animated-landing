import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import bee from '../assets/bee.jpg'
import champ from '../assets/champ.jpg'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../HomePage.css'

gsap.registerPlugin(ScrollTrigger);

const Trust = () => {

	const section = useRef(null)
	const cardContainer = useRef<HTMLDivElement>(null)
	const frontFace = useRef(null)
	const backFace = useRef(null)
	const imgContainer = useRef<HTMLDivElement>(null)
	const imgFront = useRef(null)
	const imgBack = useRef(null)
	const title = useRef(null)


	useLayoutEffect(() => {

		const tl = gsap.timeline({ repeat: -1, repeatDelay: 4, yoyo: true });
		const tlTitle = gsap.timeline({ repeat: -1, repeatDelay: 4, yoyo: true, });

		tl.to([frontFace.current, backFace.current], {
			duration: 0.8,
			rotateY: "+=180",
			ease: "power3.inOut",
		})
			.to(imgContainer.current, {
				duration: 0.8,
				x: cardContainer.current!.getBoundingClientRect().left - imgContainer.current!.getBoundingClientRect().left,
				marginLeft: "-5.5rem",
				marginRight: "0",
				ease: "power3.inOut",
			}, "-=0.8")
			.to(cardContainer.current, {
				duration: 0.8,
				x: imgContainer.current!.getBoundingClientRect().left - cardContainer.current!.getBoundingClientRect().left,
				ease: "power3.inOut",
			}, "-=0.8")
			.fromTo(imgFront.current, { opacity: 1 }, { opacity: 0, duration: 0.8, ease: "expo.inOut" }, "-=0.8")
			.fromTo(imgBack.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "expo.inOut" }, "-=0.8")

		tlTitle.to(title.current, {
			duration: 0.8,
			color: "#37D389",
			ease: "power3.inOut",
		})
	}, []);

	return (
		<div className='section-trust' ref={section}>
			<div className='c-trust_heading'>
				<h2 className='c-trust_title'>Ils nous font <span ref={title}>confiance</span></h2>
			</div>
			<div>
				<div className='c-trust_content'>
					<div className='c-trust_img' ref={imgContainer}>
						<div>
							<img src={bee} className='img-front' ref={imgFront} />
						</div>
						<div style={{ height: '100%' }}>
							<img src={champ} className='img-back' ref={imgBack} />
						</div>
					</div>
					<div className='c-trust_card' ref={cardContainer} style={{ perspective: '1000px' }}>
						<div className='c-trust_card-face c-trust_card-face-front' ref={frontFace}>
							<div className='c-trust_card-text'>
								<RiDoubleQuotesL size={45} style={{ marginLeft: '1rem' }} />
								<p>
									Je recevais beucoup de commandes par mail, sms, téléphone, etc. Okolo
									m’a permi de centraliser toutes les demandes très simplement tout en
									me faisant gagner une à deux heures par semaines.
								</p>
								<div className='c-trust_card-quote'>
									<RiDoubleQuotesR size={45} />
								</div>
							</div>
							<div className='c-trust_card-author'>
								<h3>Jean-Louis,</h3>
								<h3>apiculteur à Honfleur</h3>
							</div>
						</div>

						<div className=' c-trust_card-face c-trust_card-face-back' ref={backFace}>
							<div className='c-trust_card-text'>
								<RiDoubleQuotesL size={45} style={{ marginLeft: '1rem' }} />
								<p>
									Je recevais beucoup de commandes par mail, sms, téléphone, etc. Okolo
									m’a permi de centraliser toutes les demandes très simplement tout en
									me faisant gagner une à deux heures par semaines.
								</p>
								<div className='c-trust_card-quote'>
									<RiDoubleQuotesR size={45} />
								</div>
							</div>
							<div className='c-trust_card-author'>
								<h3>Jean-Pierre,</h3>
								<h3>éleveur de Pokémon à Dieppe</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Trust