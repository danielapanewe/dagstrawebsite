import Cardservices from './Cardservices';
import { featurewebdevelopment } from '../constants';

import serviceimg from '../assets/service1.jpg';

function Servicestransformationdigital() {
    return (
        <section >
            <div className="containeur  ">
                <div className=" owngrid mt-12 bg-white shadow-lg px-3 sm:px-8">
                    <Cardservices
                        image={serviceimg}
                        title={`Développement Web`}
                        text={`Des solutions productives, attrayantes et fiables pour les résultats commerciaux que vous méritez. Construisez pour le Web centré sur le mobile ou transformez votre entreprise pour l’adapter à la réalité multiplateforme moderne. S’appuyant sur une vaste expertise UI / UX et front-end, nos développeurs d’applications Web offrent une expérience utilisateur riche en:`}
                        detailservice={featurewebdevelopment}
                    />
                </div>
                <div className=" owngrid mt-12 bg-white shadow-lg px-3 sm:px-8">
                    <Cardservices
                        image={serviceimg}
                        title={`Développement Mobile`}
                        text={`Des solutions productives, attrayantes et fiables pour les résultats commerciaux que vous méritez. Construisez pour le Web centré sur le mobile ou transformez votre entreprise pour l’adapter à la réalité multiplateforme moderne. S’appuyant sur une vaste expertise UI / UX et front-end, nos développeurs d’applications Web offrent une expérience utilisateur riche en:`}
                        detailservice={featurewebdevelopment}
                        
                    />
                </div>
                <div className=" owngrid mt-12 bg-white shadow-lg px-3 sm:px-8">
                    <Cardservices
                        image={serviceimg}
                        title={`Développement De Logiciels D'Entreprises`}
                        text={`Les systèmes logiciels permettent aux entreprises d’exploiter efficacement leurs activités tout en gérant efficacement leur croissance. Avec l’évolution des pratiques organisationnelles et l’amélioration rapide de la technologie, les entreprises modernes ont commencé à s’appuyer davantage sur ces systèmes logiciels. Ils investissent maintenant dans des technologies futuristes qui transforment les entreprises.`}
                        detailservice={featurewebdevelopment}
                    />
                </div>
            </div>
        </section>
    );
}

export default Servicestransformationdigital;
