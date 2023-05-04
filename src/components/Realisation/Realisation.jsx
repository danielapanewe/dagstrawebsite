import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import backgroundimg from '../../assets/projectback.jpg';
import Filtergallery from '../Filtergallery';
import Title from '../Title';
import RealisationCard from '../RealisationCard';
function Realisation() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={backgroundimg}
                text={`Réalisations`}
                navigation={`Accueil >> Réalisations`}
                stylebackimg={`bg-right`}
            />
            <Title
                nametitle={`NOS REALISATIONS`}
                className="text-primarycolor text-center mt-12"
            ></Title>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 containeur gap-6 pt-8'>
                <RealisationCard
                    title={`Développement d'une plateforme de gestion de projet `}
                    body={`DAGSTRA a développé une plateforme de gestion de projet pour aider les entreprises à suivre leurs projets, à gérer les tâches et à collaborer efficacement. La plateforme est facile à utiliser et personnalisable en fonction des besoins de l'entreprise.`}
                ></RealisationCard>
                  <RealisationCard
                    title={`Solution de cybersécurité  `}
                    body={`DAGSTRA a conçu une solution de cybersécurité complète pour protéger les données sensibles des entreprises. La solution comprend des pares-feux, des antivirus, des logiciels de détection des intrusions et des solutions de sauvegarde et de récupération.`}
                ></RealisationCard>
                  <RealisationCard
                    title={`Solution d'analyse de données  `}
                    body={` DAGSTRA a créé une solution d'analyse de données qui permet aux entreprises de collecter, de stocker, de gérer et d'analyser de grandes quantités de données. La solution permet aux entreprises de prendre des décisions éclairées en utilisant des informations exploitables.`}
                ></RealisationCard>
                  <RealisationCard
                    title={`Plateforme de commerce électronique `}
                    body={`DAGSTRA a développé une plateforme de commerce électronique complète pour aider les entreprises à vendre leurs produits en ligne. La plateforme comprend des fonctionnalités de paiement en ligne, de gestion des commandes et de suivi des expéditions.`}
                ></RealisationCard>
                  <RealisationCard
                    title={`Solution de gestion de la relation client  `}
                    body={`DAGSTRA a conçu une solution de gestion de la relation client qui permet aux entreprises de suivre les interactions avec les clients, de gérer les plaintes et de fournir un service client exceptionnel.`}
                ></RealisationCard>
            </section>
            <Footer />
        </>
    );
}

export default Realisation;
