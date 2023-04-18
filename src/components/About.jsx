import React from 'react';
import Firstcard from './Firstcard';
import { featuresItem } from '../constants';

export default function About() {
    return (
        <section className="atouts mt-14">
            <div className="containeur">
                <h2 className="title text-primarycolor text-center">
                    WELCOME TO DAGSTRA
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
                    {featuresItem.map((carditem) => (
                        <Firstcard key={carditem.id} {...carditem} />
                    ))}
                </div>
            </div>
        </section>
    );
}
