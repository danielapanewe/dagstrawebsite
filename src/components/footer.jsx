import logoblanc from '../assets/logoblanc.png';

function Footer() {
    return (
        <footer className="bg-primarycolor mt-12 pt-14">
            <div className="containeur">
                <div className="footer__firstpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className=" text-white">
                        <img src={logoblanc} alt="logo entreprise" />
                        <p className="pt-4 text-sm ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem nobis alias quod sunt corrupti
                            animi unde porro reiciendis distinctio mollitia
                        </p>
                        <div className="mt-4 flex gap-2 text-xl">
                            <a href="#">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col  text-white">
                        <h3 className="font-bold mb-4 text-lg">Contact</h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <p className="flex items-center gap-1">
                                <ion-icon
                                    name="location"
                                    class="text-white text-base"
                                ></ion-icon>
                                <span>Douala,Cameroun</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <ion-icon name="mail"></ion-icon>
                                <a href="mailto:dagstra@gmail.com">
                                    dagstra@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center gap-1">
                                <ion-icon name="call"></ion-icon>
                                <a href="tel:+699999999">(+237)699999999</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col  text-white">
                        <h3 className="font-bold mb-4 text-lg">Liens Rapide</h3>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Accueil </span>
                            </a>
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Services</span>
                            </a>
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Contact</span>
                            </a>
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Formation</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h3 className="font-bold mb-4 text-lg">Nos Services</h3>
                        <div className="pl-3 flex flex-col gap-2 text-sm">
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Développement </span>
                            </a>
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Réseau</span>
                            </a>
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Vidéo Sécurité</span>
                            </a>
                            <a href="#">
                                <ion-icon name="chevron-forward"></ion-icon>
                                <span>Formation</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-6 footer__secondpart text-white text-xs py-4 text-center font-light  bg-[#141b47]">
                <p> Copyright &copy; 2023 Dagstra</p>
            </div>
        </footer>
    );
}

export default Footer;
