import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';

function Partners() {
    return (
        <section className="partners  bg-[#f2f2f2] py-14">
            <div className="containeur">
                <h2 className="title text-#6a6a6a text-center mb-8 after:bg-[#6a6a6a]">
                    Ils nous font confiance
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center ">
                    <img src={logo1} alt="logo de ..." />
                    <img src={logo2} alt="logo de ..." />
                    <img src={logo3} alt="logo de ..." />
                    <img src={logo4} alt="logo de ..." />
                    <img src={logo5} alt="logo de ..." />
                    <img src={logo6} alt="logo de ..." />
                </div>
            </div>
        </section>
    );
}

export default Partners;
