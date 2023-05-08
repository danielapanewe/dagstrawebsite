import Menu from '../Menu';
import Footer from '../Footer';
import Title from '../Title';
import ButtonScrollToTop from '../ButtonScrollToTop';

function Confidentialite() {
    return (
        <>
            <Menu />

            <Title
                nametitle={'POLITIQUE DE CONFIDENTIALITE'}
                className={'text-primarycolor text-center !mt-12 containeur'}
            />
            <section className="content containeur">
                <h3 className="text-primarycolor my-8 text-xl font-semibold">
                    Contenu
                </h3>
                <div className="flex flex-col gap-4">
                    <a href="#General" className="text-primarycolor">
                        Général
                    </a>
                    <a
                        href="#Informationgénérale"
                        className="text-primarycolor"
                    >
                        1.Informations générales
                    </a>
                    <a
                        href="#Collectedesdonnéespersonnelles"
                        className="text-primarycolor"
                    >
                        2.Collecte des données personnelles
                    </a>
                    <a
                        href="#Destinatairedesdonnéespersonnelles"
                        className="text-primarycolor"
                    >
                        3.Destinataire des données personnelles
                    </a>
                    <a
                        href="#Conservationdesdonnéespersonnelles"
                        className="text-primarycolor"
                    >
                        4.Conservation des données personnelles
                    </a>
                </div>
            </section>
            <section id="General" className="containeur">
                <h3 className="text-primarycolor my-8 text-xl font-semibold">
                    Général
                </h3>
                <div>
                    <p>
                        Nous avons rédigé cette déclaration de protection des
                        données (version 11.12.2019-311135153) afin de vous
                        expliquer conformément aux dispositions du règlement
                        général sur la protection des données (UE) 2016/679
                        quelles informations nous collectons, comment nous
                        utilisons les données et quelle décision -faire les
                        options dont vous disposez en tant que visiteur de ce
                        site Web. Malheureusement, c'est dans la nature des
                        choses que ces explications semblent très techniques,
                        mais nous avons essayé de décrire les choses les plus
                        importantes aussi simplement et clairement que possible
                        lors de leur création.
                    </p>
                </div>
            </section>
            <section id="Informationgénérale" className="containeur">
                <h3 className="text-primarycolor my-8 text-xl font-semibold">
                    1.Informations générales
                </h3>
                <div>
                    La présente politique de confidentialité (la « Politique de
                    Confidentialité ») fait partie intégrante des conditions
                    générales d’utilisation de notre site. Elle vise à vous fournir toutes les
                    informations pertinentes relatives au traitement des données
                    à caractère personnel vous concernant et décrit les modalités de collecte,
                    d'enregistrement et de traitement des Données Personnelles
                    obtenues lors de la consultation ou de l’inscription sur le
                    Site Internet, dans le cadre de notre processus de
                    recrutement ou de nos actions commerciales et marketing.
                </div>
            </section>
            <section id="Collectedesdonnéespersonnelles" className="containeur">
                <h3 className="text-primarycolor my-8 text-xl font-semibold">
                    2.Collecte des données personnelles
                </h3>
                <div>
                    <p>
                       DAGSTRA s’engage pour que les Données Personnelles vous
                        concernant soient obtenues et traitées loyalement et
                        licitement et de façon transparente, soient collectées
                        pour des finalités déterminées et licites, soient
                        utilisées conformément à ces finalités et soient
                        adéquates, pertinentes et non excessives par rapport à
                        ces finalités dans le respect du principe de
                        minimisation. <br />
                        Les Données Personnelles peuvent être collectées de
                        manière directe lorsque par exemple vous faites une
                        démarche active sur le Site Internet (notamment en
                        effectuant une demande de contact) ou lorsque vous
                        répondez à une offre d’emploi sur un site internet
                        diffusant celle-ci (notamment en remplissant un
                        formulaire) ou indirecte lorsque par exemple les
                        informations sont émises automatiquement par votre
                        ordinateur (notamment par le dépôt de cookies en
                        fonction de votre choix). <br />
                        Lorsque nous collectons des Données Personnelles auprès
                        de vous, nous signalons les champs obligatoires au moyen
                        d’un astérisque. Certaines des Données Personnelles sont
                        indispensables pour la fourniture du service que vous
                        souhaitez, l’évaluation de votre candidature pour un
                        poste au sein du groupe ou l’utilisation de certains
                        outils dans le cadre du processus de recrutement.
                    </p>
                </div>
            </section>

            <section
                id="Destinatairedesdonnéespersonnelles"
                className="containeur"
            >
                <h3 className="text-primarycolor my-8 text-xl font-semibold">
                    3.Destinataire des données personnelles
                </h3>
                <div>
                    <p>
                        Vos Données Personnelles pourront être traitées par les
                        personnes ayant besoin d’avoir accès à ces Données
                        Personnelles dans le cadre de leurs fonctions au sein de
                        la Société (notamment services marketing, commercial,
                        administratif, support fonctionnel ou ressources
                        humaines, etc…). Compte tenu de notre organisation, nous
                        pouvons être amenés à partager vos Données Personnelles
                        avec d’autres sociétés du Groupe DAGSTRA, dans les mêmes
                        conditions. <br />
                        Nous pouvons aussi être amenés à partager vos Données
                        Personnelles à nos partenaires éditeurs avec lesquelles
                        nous sommes en relation et dans le cadre de certaines
                        actions commerciales, marketing et communication. Nous
                        sommes aussi susceptibles de divulguer ou partager vos
                        Données Personnelles pour nous conformer à une
                        obligation légale ou pour protéger les droits, la
                        propriété ou la sécurité. Nous pouvons aussi être amenés
                        à divulguer vos Données Personnelles à un acquéreur
                        potentiel d’une activité ou d’actifs.
                    </p>
                </div>
            </section>

            <section
                id="Conservationdesdonnéespersonnelles"
                className="containeur"
            >
                <h3 className="text-primarycolor my-8 text-xl font-semibold">
                    4.Conservation des données personnelles
                </h3>
                <div>
                    <p>
                        DAGSTRA ne conserve vos Données personnelles que pendant
                        la durée nécessaire relative à la finalité du traitement
                        ou pour répondre à des obligations légales. Concernant
                        les actions commerciales, marketing et communication,
                        les Données Personnelles sont conservées pendant maximum
                        3 ans. Concernant le recrutement, les Données
                        Personnelles sont conservées pendant maximum 2 ans.
                        Concernant la navigation sur Internet, les Données
                        Personnelles sont conservées selon les durées précisées
                        dans le tableau listant les cookies.
                    </p>
                </div>
            </section>
            <Footer />
            <ButtonScrollToTop></ButtonScrollToTop>
        </>
    );
}

export default Confidentialite;
