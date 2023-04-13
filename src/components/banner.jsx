// import React from 'react';
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
// import banner1 from '../assets/banner1.jpg';
// import banner2 from '../assets/banner2.jpg';
// import banner3 from '../assets/banner3.jpg';

// function banner() {
//     return (
//         <section className="  top-0 z-[-1] w-full">
//             <Splide
//                 options={{
//                     rewind: true,
//                     gap: '1rem',
//                 }}
//                 aria-label="Banner images"
//             >
//                 <SplideSlide>
//                     <div className="slide__text absolute top-[50%] translate-x-[-50%] left-[35%] translate-y-[-50%] flex flex-col gap-6">
//                         <h2 className="font-bold text-6xl text-primarycolor">
//                             Growth Partners
//                         </h2>
//                         <p className="text-primarycolor">
//                             We look forward to help you in taking your company
//                             to new height.
//                         </p>
//                         <a href="#" className="btn bg-primarycolor text-white self-start">
//                             Contacter
//                         </a>
//                     </div>
//                     <img src={banner1} alt="Image 1"  />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <div className="slide__text absolute top-[50%] translate-x-[-50%] left-[35%] translate-y-[-50%]  flex flex-col gap-6">
//                         <h2 className="font-bold text-6xl text-primarycolor">
//                             Helping Leaders
//                         </h2>
//                         <p className="text-primarycolor">
//                             We look forward to help you in taking your company
//                             to new height.
//                         </p>
//                         <a href="#" className="btn bg-primarycolor text-white self-start">
//                             Contacter
//                         </a>
//                     </div>
//                     <img src={banner2} alt="Image 2" />
//                 </SplideSlide>
//                 <SplideSlide>
//                     <div className="slide__text absolute top-[50%] translate-x-[-50%] left-[35%] translate-y-[-50%] flex flex-col gap-6">
//                         <h2 className="font-bold text-6xl text-primarycolor">
//                             Expert Consultants
//                         </h2>
//                         <p className="text-primarycolor">
//                             Over 10 years of experience in helping clients
//                             finding comprehensive solutions.
//                         </p>
//                         <a href="#" className="btn bg-primarycolor text-white self-start">
//                             Contacter
//                         </a>
//                     </div>
//                     <img src={banner3} alt="Image 3" />
//                 </SplideSlide>
//             </Splide>
//         </section>
//     );
// }

// export default banner;

import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [
    {
        url: '/src/assets/banner1.jpg',
        title: '  Growth Partners',
        description:
            ' We look forward to help you in taking your company to new height.',
        linktext: ' Contacter',
    },
    {
        url: '/src/assets/banner2.jpg',
        title: ' Helping Leaders',
        description:
            ' We look forward to help you in taking your company to new height.',
        linktext: ' Contacter',
    },
    {
        url: '/src/assets/banner3.jpg',
        title: '   Expert Consultants',
        description:
            'Over 10 years of experience in helping clients finding comprehensive solutions.',
        linktext: 'Contacter',
    },
];

const Slideshow = () => {
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

export default Slideshow;
