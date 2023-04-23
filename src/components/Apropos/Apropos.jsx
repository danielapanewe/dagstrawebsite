import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import logo from '../../assets/background-15.jpg';
import Title from '../Title';
function Apropos() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={logo}
                text={`A propos de nous`}
                navigation={`Accueil >> A propos`}
                stylebackimg={`bg-center bg-center `}
            />
            <section>
                <Title
                    nametitle={'QUI EST DAGSTRA ?'}
                    className={'text-primarycolor text-center mt-12'}
                />
                <p className="containeur pt-8">
                    <b>DAGSTRA</b> est une agence digitale à taille humaine.
                    Elle est le fruit d'une expérience de plus de 20 ans dans le
                    domaine de la réalisation de sites internet, du
                    développement d'applications mobiles, du webmarketing et de
                    la communication online. Comme ses outils, la structure de
                    l'agence est souple et modulable, tout en couvrant les
                    compétences graphiques, éditoriales et technologiques
                    essentielles. En effet, Dagstra réunit tous les métiers des
                    nouvelles technologies et de la gestion de projets
                    permettant d'offrir à ses clients l'excellence de la
                    création et de la réalisation ainsi que la rigueur et
                    l'expérience dans le conseil stratégique. Guidée par ses
                    valeurs humaines et sa vision du monde d'aujourd'hui,Dagstra
                    prend soin de la relation avec sa clientèle et la place au
                    coeur de toute collaboration. Alors si vous souhaitez sortir
                    de votre cadre, c'est avec plaisir que Dagstra vous emmènera
                    vers de nouveaux projets dans la sérénité et la
                    convivialité..
                </p>
            </section>

            <section>
                <Title
                    nametitle={'NOTRE MISSION'}
                    className={'text-primarycolor text-center mt-12'}
                />
                <p className="containeur pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci rerum facere, eius iusto, reprehenderit quisquam,
                    perferendis nemo delectus mollitia inventore ipsa ratione?
                    Ducimus, placeat cupiditate commodi id vero aliquam alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci rerum facere, eius iusto, reprehenderit quisquam,
                    perferendis nemo delectus mollitia inventore ipsa ratione?
                    Ducimus, placeat cupiditate commodi id vero aliquam alias.
                </p>
            </section>

            <section>
                <Title
                    nametitle={'NOTRE VISION'}
                    className={'text-primarycolor text-center mt-12'}
                />
                <p className="containeur pt-8">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci rerum facere, eius iusto, reprehenderit quisquam,
                    perferendis nemo delectus mollitia inventore ipsa ratione?
                    Ducimus, placeat cupiditate commodi id vero aliquam alias.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Adipisci rerum facere, eius iusto, reprehenderit quisquam,
                    perferendis nemo delectus mollitia inventore ipsa ratione?
                    Ducimus, placeat cupiditate commodi id vero aliquam alias.
                </p>
            </section>

            <section>
                <Title
                    nametitle={'NOS VALEURS'}
                    className={'text-primarycolor text-center mt-12'}
                />
                <div className="containeur pt-8">
                    <ul className="list-disc pl-6 flex flex-col gap-4">
                        <li>
                            <b>La poursuite de l'excellence</b> : Nous exigeons
                            de nous-mêmes des normes élevées, en recherchant
                            toujours l'excellence dans notre travail. Notre
                            objectif principal est de grandir en faisant grandir
                            les autres.
                        </li>
                        <li>
                            <b>La qualité du service avant tout </b> : Nous
                            faisons tout pour trouver des solutions afin de
                            répondre aux besoins de nos clients, nous les
                            écoutons. Nous considérons également nos employés
                            comme nos clients internes, et nos partenaires comme
                            nos clients externes.
                        </li>
                        <li>
                            <b>Simplicité, intégrité et responsabilité </b> :
                            Nous travaillons avec équité, franchise et
                            transparence. Nous sommes responsables de notre
                            travail, nous faisons ce qui doit être fait et
                            savons corriger nos erreurs dans la plus grande
                            simplicité.
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Apropos;
