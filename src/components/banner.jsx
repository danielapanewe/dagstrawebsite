import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import imagebannerone from '../assets/banner1.jpg'
import imagebannertwo from '../assets/banner2.jpg'
import imagebannerthree from '../assets/banner3.jpg'

const fadeImages = [
    {
        url: `${imagebannerone}`,
        title: '  Growth Partners',
        description:
            ' We look forward to help you in taking your company to new height.',
        linktext: ' Contacter',
    },
    {
        url: `${imagebannertwo}`,
        title: ' Helping Leaders',
        description:
            ' We look forward to help you in taking your company to new height.',
        linktext: ' Contacter',
    },
    {
        url: `${imagebannerthree}`,
        title: '   Expert Consultants',
        description:
            'Over 10 years of experience in helping clients finding comprehensive solutions.',
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
                            className={` w-full h-[100vh] grid items-center justify-start `}
                            style={{
                                backgroundImage: `url(${fadeImage.url})`,
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="containeur flex flex-col gap-4  ">
                                <h2 className="font-bold text-4xl  lg:text-6xl text-primarycolor pl-4 sm:pl-0">
                                    {fadeImage.title}
                                </h2>
                                <p className="text-primarycolor font-medium text-lg pl-4 sm:pl-0">
                                    {fadeImage.description}
                                </p>
                                <a
                                    href="#"
                                    className="btn bg-primarycolor text-white self-start ml-4 sm:ml-0"
                                >
                                    {fadeImage.linktext}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Banner;
