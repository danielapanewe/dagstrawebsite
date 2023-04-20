import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import Description from '../Description';
import Firstcard from '../Firstcard';
import Title from '../Title';
import { featuresCamera } from '../../constants';
import backgroundimg from '../../assets/datamanageback.jpeg';
import Servicestransformationdigital from '../Servicestransformationdigital';

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
                
                paragraph1={`Cette démarche prend en charge la conception, la mise en place et la rationalisation des architectures data pour embrasser la totalité du cycle de vie de vos données.`}
                paragraph2={`Notre activité de data management prend ainsi en charge la conception, la mise en place et la rationalisation de ces architectures data pour embrasser la totalité du cycle de vie de vos données et assurer leur distribution ou leur orchestration au sein des systèmes applicatifs. De la mise en place de solutions ETL ou ESB pour faire circuler l’information à la gestion des référentiels de données par des MDM, nous vous aidons à tirer le meilleur parti de vos données dans vos processus, vos applicatifs ou vos outils analytiques.`}
            />
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center !mt-12 containeur">
                {featuresCamera.map((carditem) => (
                    <Firstcard key={carditem.id} {...carditem} />
                ))}
            </div>
            <Title
            nametitle={`NOS SERVICES`}
            className={`text-primarycolor text-center mb-8 mt-14`}
            />
            <Servicestransformationdigital />
            <Footer />
        </>
    );
}

export default Datamanagement;
