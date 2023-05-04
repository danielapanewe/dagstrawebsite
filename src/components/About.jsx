import React from 'react';
import Firstcard from './Firstcard';
import { featuresItem } from '../constants';
import { Fade, Zoom } from 'react-awesome-reveal';

export default function About() {
    return (
        <section className="atouts mt-14">
            <div className="containeur">
                <Zoom triggerOnce>
                    <h2 className="title text-primarycolor text-center">
                        WELCOME TO DAGSTRA
                    </h2>
                </Zoom>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-12">
                    <Fade cascade damping={0.3} direction={'up'} triggerOnce>
                        {featuresItem.map((carditem) => (
                            <Firstcard key={carditem.id} {...carditem} />
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    );
}
