import React from 'react';
import Thirdcard from './Thirdcard';
import { Fade, Zoom } from 'react-awesome-reveal';

function Cardwithtitle({ title, cardcontent }) {
    return (
        <section className="notreequipe mt-14 mb-12">
            <div className="containeur">
                <Zoom triggerOnce>
                    <h2 className="title text-primarycolor text-center">
                        {title}
                    </h2>
                </Zoom>
                <div className="notreequipe__content mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Fade cascade damping={0.3} direction={'up'} triggerOnce>
                        {cardcontent.map((carditem) => (
                            <Thirdcard key={carditem.id} {...carditem} />
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Cardwithtitle;
