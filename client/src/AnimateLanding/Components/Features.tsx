import React, { useEffect, useLayoutEffect, useRef } from 'react'
import market from '../assets/market.jpg'
import { TiLocation } from 'react-icons/ti'
import { gsap } from "gsap";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../HomePage.css'


interface FeaturesProps {
    img: any;
    content: string;
    text: string

}

const Features = () => {

    const Card = ({ img, content, text }: FeaturesProps) => {
        return (
            <div className='c-features_carroussel'>
                <div className='c-features_card'>
                    <figure>
                        <img src={market} className='c-features_img' />
                    </figure>
                    <div className='c-features-content'>
                        <p>{content}</p>
                    </div>
                </div>
                <div className='c-features_bottom'>
                    <div className='c-features_bottom-text'>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (

        <div className='section-features-cards'>

            <div className='c-events_list'>
                <Card
                    img={market}
                    content="Lorem ipsum dolor sit amet et ducimus qui sit labore laborum lorem sit"
                    text="iooijo"
                />
            </div>
        </div>
    )
}

export default Features
