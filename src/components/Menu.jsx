import { useState } from 'react';
import logo from '../assets/logodagstra.png';
import { navLinks } from '../constants';

function Menu() {
    const [active, setActive] = useState('Accueil');
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="nav__first w-full bg-primarycolor relative ">
                <div className="containeur flex gap-6 justify-end py-4">
                    <p className="hidden text-white font-semibold text-xs lg:flex items-center gap-1 ">
                        <ion-icon
                            name="location"
                            class="text-white text-base"
                        ></ion-icon>
                        <span>1010 Avenue, New York, NY 10018 US.</span>
                    </p>
                    <p className="text-white font-semibold text-xs flex items-center gap-1">
                        <ion-icon
                            name="call"
                            class="text-white text-base"
                        ></ion-icon>
                        <a href="mailto:699999999">699999999</a>
                    </p>
                    <p className="text-white font-semibold text-xs flex items-center gap-1">
                        <ion-icon
                            name="time"
                            class="text-white text-base"
                        ></ion-icon>
                        <span>Lun-Ven,8.00-18.00</span>
                    </p>
                </div>
            </div>
            <nav className="sticky top-0  bg-[rgba(255,255,255,0.85)] z-[500]">
                <div className="flex  justify-between w-full containeur items-center ">
                    <a href="#" className="pt-2">
                        <img src={logo} alt="logo" className="w-14" />
                    </a>
                    <div
                        className="lg:hidden relative w-[3rem] h-[3rem] burgermenu cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span
                            className={`h-[2px] w-4 bg-primarycolor block absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out duration-500 ${
                                !toggle
                                    ? 'rotate-0 top-[38%]'
                                    : 'rotate-45 top-[50%]  '
                            }`}
                        ></span>
                        <span
                            className={`block h-[2px] w-4 bg-primarycolor absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out duration-500 ${
                                !toggle ? 'block opacity-1' : 'opacity-0'
                            }`}
                        ></span>
                        <span
                            className={`h-[2px] w-4 bg-primarycolor block absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out duration-500 ${
                                !toggle
                                    ? 'rotate-0 top-[62%]'
                                    : '-rotate-45 top-[50%] '
                            }`}
                        ></span>
                    </div>
                    <ul
                        className={`  ${
                            !toggle
                                ? 'absolute opacity-0 invisible pointer-events-none transition-opacity ease-in-out'
                                : 'absolute left-0 flex flex-col top-[100%] bg-white w-full shadow-lg z-10 opacity-[1] visible pointer-events-auto transition-opacity pl-5 py-4 gap-5 sm:pl-[50px]'
                        } lg:flex lg:gap-8 lg:static lg:opacity-[1] lg:visible lg:pointer-events-auto`}
                    >
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                onClick={() => setActive(nav.title)}
                            >
                                <a
                                    href="#"
                                    className={`${
                                        active === nav.title
                                            ? ' text-[#6a6796]'
                                            : 'text-primarycolor'
                                    } hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                >
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Menu;
