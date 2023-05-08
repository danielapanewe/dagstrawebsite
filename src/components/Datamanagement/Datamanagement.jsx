import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import Description from '../Description';
import Firstcard from '../Firstcard';
import Title from '../Title';
import { featuresCamera } from '../../constants';
import backgroundimg from '../../assets/datamanageback.jpeg';
import Servicestransformationdigital from '../Servicestransformationdigital';
import { Fade } from 'react-awesome-reveal';
import ButtonScrollToTop from '../ButtonScrollToTop';

function Datamanagement() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={backgroundimg}
                text={`Data Management`}
                navigation={`Services >> Data Management`}
                stylebackimg={`bg-right`}
            />
            <Description
                paragraph1={` Le data management, ou la gestion de données en français, est un ensemble de pratiques qui visent à gérer de manière efficace les données d'une organisation tout au long de leur cycle de vie, de leur création à leur archivage ou destruction. Cette discipline inclut la collecte, la classification, le stockage, la sécurisation, l'analyse et la distribution de données.`}
                paragraph2={`La gestion de données est devenue un enjeu majeur pour les entreprises dans un monde de plus en plus connecté, où les données sont produites en quantités considérables. Un bon data management permet à une entreprise de mieux comprendre ses activités, de prendre des décisions éclairées et de se différencier de la concurrence. DAGSTRA vous accompagne dans ce processus.`}
            />

            <section>
                <Title
                    nametitle={'NOS PRATIQUES CLES'}
                    className={'text-primarycolor text-center mt-12'}
                />
                <div className="containeur pt-8">
                    <ul className="list-disc pl-6 flex flex-col gap-4">
                        <Fade
                            cascade
                            damping={0.1}
                            direction={'up'}
                            triggerOnce
                        >
                            <li>
                                <b>La collecte et la saisie de données </b> :
                                Cela peut inclure l'utilisation de capteurs, la
                                collecte de données à partir de formulaires en
                                ligne ou la capture de données à partir de
                                systèmes tiers.
                            </li>
                            <li>
                                <b>La gestion de la qualité des données </b>{' '}
                                :Cela implique de s'assurer que les données sont
                                précises, complètes et fiables.
                            </li>
                            <li>
                                <b>La sécurisation des données </b>: Cela
                                consiste à protéger les données contre les accès
                                non autorisés, les pertes de données et les
                                fuites d'informations sensibles.
                            </li>
                            <li>
                                <b>La gestion du stockage des données </b>: Cela
                                peut inclure le stockage sur disques durs, sur
                                le cloud ou sur des systèmes de stockage en
                                réseau.
                            </li>
                            <li>
                                <b>La gestion de l'archivage des données </b>:
                                Cela implique de stocker les données pour une
                                période déterminée avant de les archiver ou de
                                les détruire.
                            </li>
                            <li>
                                <b>L'analyse de données </b>: Cela inclut
                                l'utilisation de techniques statistiques et de
                                visualisation pour explorer les données et en
                                extraire des informations exploitables.
                            </li>
                            <li>
                                <b>La distribution de données </b>: Cela peut
                                inclure la mise à disposition des données via
                                des API, des services web ou des fichiers de
                                données exportables.
                            </li>
                        </Fade>
                    </ul>
                 
                </div>
            </section>

            <Footer />
            <ButtonScrollToTop></ButtonScrollToTop>
        </>
    );
}

export default Datamanagement;
