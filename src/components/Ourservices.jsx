import React from 'react';
import Secondcard from './Secondcard';
import imageserviceone from '../assets/transformatondigitale.png';
import imageservicetwo from '../assets/datamanageback.jpeg';
import imageservicethree from '../assets/videosurveillance.png';
import imageservicefour from '../assets/reseau.png';
import imageservicefive from '../assets/formation.png';

import { Fade, Zoom } from 'react-awesome-reveal';

export default function Ourservices() {
    return (
        <section className="ourservice mt-14 bg-[#fafafa] pb-16 pt-8">
            <div className="containeur">
                <Zoom triggerOnce>
                    <h2 className="title text-primarycolor text-center">
                        NOS SERVICES
                    </h2>
                </Zoom>
                <div className="ourservice__content mt-12 ">
                    <div className="card grid gap-4 md:gap-0  ">
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg overflow-hidden">
                            <Secondcard
                                image={imageserviceone}
                                title={`Transformation digitale`}
                                text={`DAGSTRA aide les entreprises à s'adapter aux changements rapides de l'environnement commercial en utilisant les technologies numériques pour améliorer leur efficacité, leur agilité et leur capacité à innover, ce qui peut leur donner un avantage concurrentiel important.`}
                                path={`/Service/TransformationDigitale`}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg ">
                            <Secondcard
                                image={imageservicetwo}
                                title={`Data Management`}
                                text={`La gestion de données est devenue un enjeu majeur pour les entreprises dans un monde de plus en plus connecté, où les données sont produites en quantité considérable.Les entreprises qui adoptent une approche rigoureuse du data management peuvent en tirer de nombreux avantages, tels que la réduction des coûts liés à la gestion des données, l'amélioration de la qualité des données, la prise de décisions plus éclairées, la meilleure compréhension des besoins des clients.`}
                                order={`2`}
                                path={`/Service/DataManagement`}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
                            <Secondcard
                                image={imageservicethree}
                                title={`Video surveillance`}
                                text={`Les systèmes de vidéosurveillance de DAGSTRA sont équipés de diverses fonctionnalités pour répondre aux besoins spécifiques de l'utilisateur et améliorer la sécurité dans les espaces publics et entreprises.`}
                                path={`/Service/VideoSurveillance`}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg ">
                            <Secondcard
                                image={imageservicefour}
                                title={`Réseau
                                `}
                                text={`Les réseaux informatiques sont des outils importants pour les entreprises et les utilisateurs individuels, offrant des avantages significatifs en terme de productivité, d'efficacité et de collaboration. Il est important de prendre des mesures pour protéger les réseaux et les données des utilisateurs contre les menaces potentielles à la sécurité. DAGSTRA vous accompagne dans ce processus.`}
                                order={`2`}
                                path={`/Service/Reseau`}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
                            <Secondcard
                                image={imageservicefive}
                                title={`Formation`}
                                text={`Nous fournissons aux apprenants les connaissances et compétences nécessaires dans les domaines suivants: développement Web & Mobile ,Réseau & Sécurité informatique`}
                               
                                path={`/Service/Formation`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
