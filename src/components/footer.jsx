import logoblanc from '../assets/noname.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-primarycolor mt-12 pt-14">
            <div className="containeur">
                <div className="footer__firstpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className=" text-white">
                        <img
                            src={logoblanc}
                            alt="logo entreprise"
                            className="w-[80%]"
                        />
                        <p className="pt-4 text-sm ">
                            DAGSTRA est une entreprise de TI spécialisée dans
                            le développement de logiciels pour les entreprises.
                        </p>
                        <div className="mt-4 flex gap-2 text-xl">
                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>

                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a
                                href="#"
                                className=" hover:scale-110 transition-transform ease-linear"
                            >
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col  text-white">
                        <h3 className="font-bold mb-4 text-lg">Contact</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <p className="flex items-center gap-1">
                                <ion-icon name="mail"></ion-icon>
                                <a
                                    href="mailto:info@cm.dagstra.com"
                                    className="hover:underline"
                                >
                                    info@cm.dagstra.com
                                </a>
                            </p>
                            <p className="flex items-center gap-1">
                                <ion-icon name="call"></ion-icon>
                                <a
                                    href="tel:tel:+4915231918349"
                                    className="hover:underline"
                                >
                                    +49 152 3191 8349
                                </a>
                            </p>

                            <p className="flex items-center gap-1">
                                <ion-icon
                                    name="location"
                                    class="text-white text-base"
                                ></ion-icon>
                                <span>
                                    Moosweg 3, 51377 <br /> Leverkusen,
                                    Allemagne
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col  text-white">
                        <h3 className="font-bold mb-4 text-lg">Liens Rapide</h3>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <NavLink
                                to="/"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Accueil </span>
                            </NavLink>

                            <NavLink
                                to="/Apropos"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>A propos</span>
                            </NavLink>
                            <NavLink
                                to="/Réalisations"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Réalisations </span>
                            </NavLink>
                            <NavLink
                                to="/Contact"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Contact</span>
                            </NavLink>
                            <NavLink
                                to="/Politiquedeconfidentialité"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Politique de Confidentialité</span>
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h3 className="font-bold mb-4 text-lg">Nos Services</h3>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <NavLink
                                to="/Service/TransformationDigitale"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Transformation Digitale </span>
                            </NavLink>
                            <NavLink
                                to="/Service/VideoSurveillance"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Video Surveillance</span>
                            </NavLink>
                            <NavLink
                                to="/Service/Reseau"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Reseau</span>
                            </NavLink>
                            <NavLink
                                to="/Service/DataManagement"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Data Management</span>
                            </NavLink>
                            <NavLink
                                to="/Service/Formation"
                                className={
                                    'flex items-center hover:pl-1 transition-all ease-linear'
                                }
                            >
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Formation</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-6 footer__secondpart text-white text-xs py-4 text-center font-light  bg-[#141b47]">
                <p className="containeur">
                    {' '}
                    Copyright &copy; 2023 DAGSTRA Cameroun SARL
                </p>
            </div>
        </footer>
    );
}

export default Footer;
