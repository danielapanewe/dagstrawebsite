import { useState, useEffect } from 'react';

function ButtonScrollToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    });
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <i
            className={`scrolltotopbtn uil uil-angle-up opacity-0 invisible transition-opacity pointer-events-none cursor-pointer text-white fixed bg-primarycolor text-3xl bottom-4 right-5 rounded-md z-[100] hover:animate-none hover:bg-[#161f51]
            ${showTopBtn && 'opacity-100 !visible pointer-events-auto'}`}
            onClick={goToTop}
        ></i>
    );
}

export default ButtonScrollToTop;
