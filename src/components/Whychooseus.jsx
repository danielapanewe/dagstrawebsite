import React from 'react';
import whychooseusimg from '../assets/pourquoinouschoisir.png';
import { Fade, Zoom } from 'react-awesome-reveal';

function Whychooseus() {
    return (
        <section className="whychooseus mt-14">
            <div className="containeur">
                <Zoom triggerOnce>
                    <h2 className="title text-primarycolor text-center">
                        POURQUOI NOUS CHOISIR
                    </h2>
                </Zoom>
                <div className="whychooseus__content grid grid-cols-1 lg:grid-cols-2 mt-12 gap-10 items-center">
                    <img src={whychooseusimg} alt="image alt" />
                    <div className="whychooseus__text flex flex-col gap-4">
                        <Fade cascade damping={0.2} triggerOnce>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-primarycolor font-bold text-xl">
                                    1. Expertise
                                </h3>
                                <p>
                                    DAGSTRA dispose d'une équipe d'experts
                                    techniques compétents qui ont une expérience
                                    considérable dans le domaine de la
                                    technologie et peuvent fournir des solutions
                                    adaptées à vos besoins.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className=" text-primarycolor font-bold text-xl">
                                    2. Innovation
                                </h3>
                                <p>
                                    DAGSTRA est à l'avant-garde de la
                                    technologie et s'efforce toujours d'innover
                                    pour offrir des solutions de pointe à ses
                                    clients.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className=" text-primarycolor font-bold text-xl">
                                    3. Engagement envers la satisfaction du
                                    client
                                </h3>
                                <p>
                                    DAGSTRA met l'accent sur la satisfaction de
                                    ses clients et s'assure que ses solutions
                                    répondent aux besoins de ses clients.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className=" text-primarycolor font-bold text-xl">
                                    4. Flexibilité
                                </h3>
                                <p>
                                    DAGSTRA s'adapte aux besoins de ses clients
                                    et offre des solutions personnalisées pour
                                    répondre à leurs besoins spécifiques.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className=" text-primarycolor font-bold text-xl">
                                    5. Collaboration
                                </h3>
                                <p>
                                    DAGSTRA travaille en étroite collaboration
                                    avec ses clients pour comprendre leurs
                                    besoins et fournir des solutions qui
                                    répondent à leurs exigences.
                                </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whychooseus;
