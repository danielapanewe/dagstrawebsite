import { useState } from 'react';
import logo from '../assets/logodagstra.png';
import { useNavigate, NavLink } from 'react-router-dom';

function Menu() {
    const [hidden, setHidden] = useState(false);
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
                        <span>Douala-Akwa, en face ancien Boulangerie Saker</span>
                    </p>
                    <p className="text-white font-semibold text-xs flex items-center gap-1">
                        <ion-icon
                            name="call"
                            class="text-white text-base"
                        ></ion-icon>
                        <a href="tel:+4915231918349" className='hover:underline'>+49 152 3191 8349</a>
                    </p>
                    <p className="text-white font-semibold text-xs flex items-center gap-1">
                        <ion-icon
                            name="time"
                            class="text-white text-base"
                        ></ion-icon>
                        <span>Lun-Ven,8.00-17.00</span>
                    </p>
                </div>
            </div>
            <nav className="sticky top-0  bg-[rgba(255,255,255,0.85)] z-[500]">
                <div className="flex  justify-between w-full containeur items-center ">
                    <NavLink to="/" className="pt-2">
                        <img src={logo} alt="logo" className="w-14" />
                    </NavLink>
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
                        {/* <li key={nav.id} onClick={() => setActive(nav.title)}> */}
                        <li>
                            <NavLink
                                to="/"
                                // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-primarycolor font-medium inline-block text-lg'
                                        : 'hover:text-[#6a6796] font-medium inline-block text-lg'
                                }
                            >
                                Accueil
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Apropos"
                                // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                className={({ isActive }) =>
                                    isActive
                                    ? 'text-primarycolor font-medium inline-block text-lg'
                                    : 'hover:text-[#6a6796] font-medium inline-block text-lg'
                                }
                            >
                              A propos
                            </NavLink>
                        </li>

                        <li className="relative">
                            <a
                                onClick={() => setHidden(!hidden)}
                               
                                className={` hover:text-[#6a6796] cursor-pointer font-medium nav__link text-lg flex items-center`}
                            >
                                <span>Services</span>
                                <ion-icon
                                    name="chevron-down"
                                    class="hidden lg:inline-block"
                                ></ion-icon>
                            </a>
                            <ul
                                className={` ${
                                    !hidden
                                        ? 'lg:opacity-0 lginvisible lg:pointer-events-none transition-opacity ease-in-out'
                                        : ' opacity-1 visible pointer-events-auto '
                                } submenu pb-0 pt-4 px-8 lg:absolute top-[114%] left-0 bg-white lg:p-8 lg:shadow-[0_0.5px_12px_-1px_rgba(0,0,0,0.3)] rounded-sm flex flex-col gap-4`}
                            >
                                <li>
                                    <NavLink
                                        to="/Service/TransformationDigitale"
                                        // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-primarycolor font-medium  text-md'
                                                : 'hover:text-[#6a6796] font-normal  text-md'
                                        }
                                    >
                                        Transformation Digitale
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Service/VideoSurveillance"
                                        // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-primarycolor font-medium  text-md'
                                                : 'hover:text-[#6a6796] font-normal  text-md'
                                        }
                                    >
                                        Video Surveillance
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Service/Reseau"
                                        // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-primarycolor font-medium  text-md'
                                                : 'hover:text-[#6a6796] font-normal  text-md'
                                        }
                                    >
                                        Reseau
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Service/DataManagement"
                                        // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-primarycolor font-medium  text-md'
                                                : 'hover:text-[#6a6796] font-normal  text-md'
                                        }
                                    >
                                        Data Management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/Service/Formation"
                                        // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-primarycolor font-medium  text-md'
                                                : 'hover:text-[#6a6796] font-normal  text-md'
                                        }
                                    >
                                        Formations
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="/Réalisations"
                                // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                className={({ isActive }) =>
                                    isActive
                                    ? 'text-primarycolor font-medium inline-block text-lg'
                                    : 'hover:text-[#6a6796] font-medium inline-block text-lg'
                                }
                            >
                               Réalisations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Contact"
                                // className={` hover:text-[#6a6796]  font-medium nav__link text-lg inline-block`}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-primarycolor font-medium inline-block text-lg'
                                        : 'hover:text-[#6a6796] font-medium inline-block text-lg'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Menu;
