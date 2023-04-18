import Title from './Title';
import imagecamera2 from '../assets/cameraimg2.png';

function Whycamera() {
    return (
        <section className="bg-[#e8e9f0] py-12 mt-12">
            <div className="containeur">
                <Title
                    nametitle={`Pourquoi avoir une vidéo surveillance`}
                    className={` text-center after:bg-textcolor mb-6 `}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                    <img
                        src={imagecamera2}
                        alt="image de camera"
                        className="w-full"
                    />
                    <div className="content flex flex-col gap-4  py-8">
                        <p>
                            <b>
                                Dissuader, surveiller et agir sont les 3
                                principaux objectifs de tout système de
                                vidéosurveillance
                            </b>
                            . Nos solutions sont donc conçues afin d’apporter
                            une réponse simple et sécuritaire à toutes les
                            problématiques que vous rencontrez quel que soit
                            votre secteur
                        </p>
                        <ul>
                            <li>Dissuasion des actes de malveillance</li>
                            <li>
                                Protection de vos collaborateurs, de vos clients
                                et de vos visiteurs
                            </li>
                            <li>
                                Surveillance de votre site et de ses zones
                                sensibles ou à risques
                            </li>
                            <li>
                                Surveillance de vos biens, marchandises ou
                                données à forte valeur
                            </li>
                            <li>
                                Lutte contre le vol et la démarque (inconnue ou
                                interne)
                            </li>
                            <li>
                                Outil de preuve en cas d’intrusion, de vol,
                                d’agression ou de litige
                            </li>
                            <li>
                                Outil de gestion et de pilotage (comptage de
                                personnes, traçabilité de colis,…)
                            </li>
                        </ul>
                        <p>
                            La <b>surveillance vidéo</b> est un atout essentiel
                            de votre système de sécurité qui gagne en
                            performance lorsqu’il est couplé à votre contrôle
                            d’accès ou votre système d’alarme. C’est pour cela
                            que tous nos dispositifs sont interopérables et
                            compatibles entre eux !
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whycamera;
