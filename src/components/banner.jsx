import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import imagebannerone from '../assets/backgroundtransformationdigitale.jpg';
import imagebannertwo from '../assets/cameraimg.jpg';
import imagebannerthree from '../assets/learningbackimg.jpg';
import { NavLink } from 'react-router-dom';

const fadeImages = [
    {
        url: `${imagebannerone}`,
        title: ' Votre partenaire pour une transformation numérique réussie',
        description:
            ' Nous vous aidons à amener votre entreprise vers de nouveaux sommets.',
        linktext: ' Contacter',
    },
    {
        url: `${imagebannertwo}`,
        title: ' Nous garantissons votre sécurité',
        description:
            ' Avec notre service Video Surveillance, nous assurons les meilleures installations de caméra et un service de maintenance',
        linktext: ' Contacter',
    },
    {
        url: `${imagebannerthree}`,
        title: 'Votre succès est notre priorité chez DAGSTRA',
        description:
            'Avec notre service Formation, accédez aux meilleurs cours pour accroître vos compétences',
        linktext: 'Contacter',
    },
];

const Banner = () => {
    return (
        <div className="slide-container mt-[-4rem]">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <div
                            className={` w-full h-[100vh] grid items-center justify-start customgrid `}
                            style={{
                                backgroundImage: `linear-gradient(#1c276565,#1c276565) ,url(${fadeImage.url})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                        >
                            <div className="containeur flex flex-col gap-4  ">
                                <h2 className="font-bold text-4xl  lg:text-5xl text-white pl-4 sm:pl-0">
                                    {fadeImage.title}
                                </h2>
                                <p className="text-white font-medium text-lg pl-4 sm:pl-0">
                                    {fadeImage.description}
                                </p>
                                
                                <NavLink
                                to="/Contact"
                                className={
                                    'btn bg-primarycolor text-white self-start ml-4 sm:ml-0'
                                }
                            >
                                {fadeImage.linktext}
                            </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Banner;
