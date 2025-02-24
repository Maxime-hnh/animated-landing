import wine from '../assets/wine.jpg'
import foire from '../assets/foire.jpg'
import { TiLocation } from 'react-icons/ti'
import '../HomePage.css'
import { AiOutlineArrowRight } from 'react-icons/ai';

interface EventsProps {
    img: any;
    type: string;
    title: string;
    date: string;
    city: string;
}


const Events = () => {

    const Card = ({ img, type, title, date, city }: EventsProps) => {
        return (
            <div className='c-events_carroussel'>
                <div className='c-events_card'>
                    <div className='c-events-top'>
                        <div className='c-events-tag'>
                            <p>{type}</p>
                        </div>
                    </div>
                    <figure>
                        <img src={img} className='c-events_img' />
                    </figure>
                    <div className='c-events-title'>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className='c-events_item-bottom'>
                    <div className='c-events_item-bottom-left'>
                        <h4>{date}</h4>
                        <div>
                            <TiLocation />
                            <span>{city}</span>
                        </div>
                    </div>
                    <div className='c-events_item-bottom-right'>
                        <button className='c-events_item-bottom-button'>
                            <AiOutlineArrowRight color='white' size={25} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (

        <div className='section-events-cards'>

            <div className='c-events_list'>
                <Card img={wine} type="Dégustation" title="Dégustation de vin dieppois" date="Sam. 14 Dec." city="Dieppe" />

                <Card img={foire} type="Foire" title="Foire de Deauville" date="Ven. 30 Oct." city="Deauville" />

                <Card img={foire} type="Brocante" title="Brocante de Caen" date="Dim. 28 Jui." city="Caen" />

            </div>
        </div>
    )
}
export default Events
