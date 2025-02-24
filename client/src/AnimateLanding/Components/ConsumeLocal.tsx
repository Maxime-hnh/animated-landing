import React, { useEffect, useLayoutEffect, useRef } from 'react'
import moneybag from '../assets/moneybag.svg'
import quality from '../assets/quality.svg'
import tree from '../assets/tree2.svg'
import magnifyingglass from '../assets/magnifyingglass.svg'
import '../HomePage.css'

import float_1 from '../assets/float_1.png'
import float_2 from '../assets/float_2.png'
import float_3 from '../assets/float_3.png'
import float_4 from '../assets/float_4.png'
import float_5 from '../assets/float_5.png'
import float_6 from '../assets/float_6.png'
import float_7 from '../assets/float_7.png'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';




const ConsumeLocal = () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".c1", {
        duration: 2,
        y: -150,
        ease: 'none',
        scrollTrigger: {
            trigger: ".c1",
            scrub: true,
            start: "top top",
            // markers: true
        }
    })

    gsap.to(".c2", {
        duration: 3,
        y: -75,
        ease: 'none',
        scrollTrigger: {
            trigger: ".c2",
            scrub: true,
            start: "top 60%",
        }
    })

    gsap.to(".c3", {
        duration: 6,
        y: -150,
        ease: 'none',
        scrollTrigger: {
            trigger: ".c3",
            scrub: true,
            start: "top 50%",
        }
    })

    return (
        <>
            <div className='section-consume-local'>
                <div className='c-consume_heading'>
                    <h2 className='c-consume_title'>Pourquoi consommer local ?</h2>
                </div>
                <div className='c-consume_content'>
                    <div className='c-consume_float'>
                        <div className='c-consume_float_item'>
                            <img src={float_1} className='c-consume_float-img c1' />
                        </div>
                        <div className='c-consume_float_item'>
                            <img src={float_2} className='c-consume_float-img c2' />
                            <img src={float_4} className='c-consume_float-img c1' />
                        </div>
                        <div className='c-consume_float_item'>
                            <img src={float_6} className='c-consume_float-img c2' />
                        </div>
                    </div>
                    <div className='c-consume_list'>
                        <div className='c-consume_item'>
                            <img src={moneybag} className='c-consume_logo' />
                            <h3 className='c-consume_item-title'>Soutien à l'économie</h3>
                            <p className='c-consume_item-text'>
                                Moins il y a d’intermédiaires plus le prix fixé par le producteur sera
                                juste pour lui et le consommateur. L’argent dépensé localement favorisera
                                naturellement l’économie et la création d’emploi.
                            </p>
                        </div>
                        <div className='c-consume_item'>
                            <img src={tree} className='c-consume_logo' />
                            <h3 className='c-consume_item-title'>Protection de l’environnement</h3>
                            <p className='c-consume_item-text'>
                                Le transport des produits contribue encore largement à la pollution.
                                Néanmoins, en consommant local et de saison, la consommation d’eau et
                                d’énergie est fortement réduite.
                            </p>
                        </div>
                        <div className='c-consume_item'>
                            <img src={magnifyingglass} className='c-consume_logo' />
                            <h3 className='c-consume_item-title'>Traçabilité des produits</h3>
                            <p className='c-consume_item-text'>
                                En consommant directement chez mes producteurs locaux ou via un seul
                                intermédiaire, la traçabilité des produits simple ; je connais la
                                provenance des produits ainsi que la manière dont-ils ont été préparés.
                            </p>
                        </div>
                        <div className='c-consume_item'>
                            <img src={quality} className='c-consume_logo' />
                            <h3 className='c-consume_item-title'>Qualité des produits</h3>
                            <p className='c-consume_item-text'>
                                Fruits et légumes produits et vendus localement sont la plupart du temps
                                ramassés à maturité le jour même où ils sont vendus. Ils ne passent pas
                                plusieurs semaines dans des frigos dans des containeurs ! Fraîcheur
                                garantie !
                            </p>
                        </div>
                    </div>
                    <div className='c-consume_float'>
                        <div className='c-consume_float_item'>
                            <img src={float_3} className='c-consume_float-img c1' />
                        </div>
                        <div className='c-consume_float_item'>
                            <img src={float_5} className='c-consume_float-img c3' />
                        </div>
                        <div className='c-consume_float_item'>
                            <img src={float_7} className='c-consume_float-img c2' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ConsumeLocal
