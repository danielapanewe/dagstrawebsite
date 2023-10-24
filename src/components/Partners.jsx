import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/partner2.png';
import logo3 from '../assets/partner3.png';
import logo4 from '../assets/partner4.png';
import logo5 from '../assets/partner5.png';
import logo6 from '../assets/partner6.png';
import logo7 from '../assets/partner1.svg';

function Partners() {
    return (
        <section className="partners  bg-[#f2f2f2] py-14">
            <div className="containeur">
                <h2 className="title text-#6a6a6a text-center mb-8 after:bg-[#6a6a6a]">
                    Ils nous font confiance
                </h2>
                <div className="justify-center items-center grid-cols-3 gap-6 sm:grid-cols-4 lg:gap-10 grid lg:grid-cols-7">
                    <img
                        src={logo1}
                        alt="logo de DELL"
                        className=" grayscale"
                    />
                    <img src={logo2} alt="logo de TUI" className=" grayscale" />
                    <img
                        src={logo3}
                        alt="logo de Compagnie des Alpes"
                        className=" grayscale"
                    />
                    <img
                        src={logo4}
                        alt="logo de New Holland"
                        className=" grayscale"
                    />
                    <img
                        src={logo5}
                        alt="logo de SIXT"
                        className=" grayscale"
                    />
                    <img
                        src={logo6}
                        alt="logo de arte"
                        className=" grayscale"
                    />
                    <img
                        src={logo7}
                        alt="logo de alex"
                        className=" grayscale"
                    />
                </div>
            </div>
        </section>
    );
}

export default Partners;
