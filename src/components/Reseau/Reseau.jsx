import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import Description from '../Description';
import backgroundimg from '../../assets/networkback.jpeg';
import Whycamera from '../Whycamera';
import { descriptionnetwork } from '../../constants';
import Calltoaction from '../Calltoaction';
function Reseau() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={backgroundimg}
                text={`Réseau`}
                navigation={`Services >> Réseau`}
                stylebackimg={`bg-center`}
            />
            <Description
                paragraph1={`Un réseau informatique est un ensemble de dispositifs électroniques tels que des ordinateurs, des serveurs, des routeurs, des commutateurs, des imprimantes, etc., interconnectés pour partager des ressources, des données et des applications. Les réseaux informatiques permettent aux utilisateurs de communiquer et de partager des données plus rapidement et plus efficacement.
                Il existe différents types de réseaux informatiques, notamment les réseaux locaux (LAN) qui couvrent une zone géographique limitée telle qu'un bureau ou un bâtiment, les réseaux étendus (WAN) qui couvrent une zone géographique plus étendue telle qu'une ville ou un pays, et les réseaux métropolitains (MAN) qui couvrent une zone géographique plus grande que LAN mais plus petite que WAN.
                .`}
                paragraph2={`Les réseaux informatiques sont conçus pour être évolutifs et flexibles, avec des architectures et des topologies différentes pour répondre aux besoins des utilisateurs. Les réseaux peuvent être configurés en utilisant différentes technologies de câblage telles que le câblage cuivre, la fibre optique et le sans fil (Wi-Fi).`}
            />

            <Whycamera
                title={`AVANTAGES DE NOTRE SERVICE RESEAU`}
                image={backgroundimg}
               
                thintextone={` La mise en réseau avec DAGSTRA offre plusieurs avantages notammant:`}
                descriptionfeature={descriptionnetwork}
                thintextwo={`Cependant, les réseaux informatiques peuvent également présenter des risques pour la sécurité des données mais ne vous inquitez pas, nos professionnels prennent des mesures pour protéger le réseau et vos données. `}
                stylescontainer={`bg-[#e8e9f0] py-12 mt-12`}
            />
            
            <Calltoaction 
            text={`Besoin qu'on mette en place le réseau de votre système ? `}/>
            <Footer />
        </>
    );
}

export default Reseau;
