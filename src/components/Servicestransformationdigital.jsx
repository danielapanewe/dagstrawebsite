import Cardservices from './Cardservices';
import {
    featurewebdevelopment,
    featuremobiledevelopment,
    featureempty,
} from '../constants';
import Description from './Description';
import Title from './Title';

import devmobileimg from '../assets/devmobile.jpg';
import devwebimg from '../assets/devweb.png';
import logicieldentreprise from '../assets/logicieldentreprise.png';

function Servicestransformationdigital() {
    return (
        <section>
            <Description
                paragraph1={`La transformation digitale est un processus d'adoption de technologies numériques pour optimiser les processus commerciaux et améliorer l'expérience client. Cette transformation est devenue essentielle pour les entreprises dans le contexte actuel de l'économie numérique.`}
                paragraph2={`Les entreprises qui réussissent la transformation digitale peuvent bénéficier de nombreux avantages, notamment une meilleure efficacité opérationnelle, une réduction des coûts, une amélioration de la qualité des produits et services, une meilleure prise de décision basée sur les données, une expérience client améliorée, une plus grande flexibilité et agilité et une capacité à innover plus rapidement.`}
            />

            <Title
                nametitle={`NOS SERVICES`}
                className={`text-primarycolor text-center mb-8 mt-14`}
            />
            <div className="containeur  ">
                <div className=" owngrid mt-12 bg-white shadow-lg px-3 sm:px-8">
                    <Cardservices
                        image={devwebimg}
                        title={`Développement Web`}
                        text={`Nous mettons en place des solutions productives, attrayantes, performantes et fiables qui peuvent faire passer votre entreprise au niveau supérieur. Notre équipe combine des dizaines d'années d'expérience dans le développement de systèmes à grande échelle. Nous vous proposons:`}
                        detailservice={featurewebdevelopment}
                    />
                </div>
                <div className=" owngrid mt-12 bg-white shadow-lg px-3 sm:px-8">
                    <Cardservices
                        image={devmobileimg}
                        title={`Développement Mobile`}
                        text={`Le développement mobile est une discipline essentielle pour la création d'applications mobiles, qui implique l'utilisation de langages de programmation, de frameworks et de bibliothèques pour créer des applications mobiles attrayantes, fonctionnelles et conviviales. Nos développeurs mobiles sont à jour avec les dernières tendances et technologies afin que les applications dévelopées restent compétitives et pertinentes dans un environnement en constante évolution. Nous vous proposons:`}
                        detailservice={featuremobiledevelopment}
                    />
                </div>
                <div className=" owngrid mt-12 bg-white shadow-lg px-3 sm:px-8">
                    <Cardservices
                        image={logicieldentreprise}
                        title={`Développement De Logiciels D'Entreprises`}
                        text={`Le développement de logiciels d'entreprises (aussi connu sous le nom de développement d'applications d'entreprises) fait référence à la création de logiciels personnalisés pour répondre aux besoins spécifiques d'une entreprise ou d'une organisation. Les applications d'entreprises sont généralement développées pour améliorer l'efficacité opérationnelle, automatiser les processus commerciaux, gérer les données et faciliter la communication et la collaboration entre les employés.`}
                        detailservice={featureempty}
                    />
                </div>
            </div>
        </section>
    );
}

export default Servicestransformationdigital;
