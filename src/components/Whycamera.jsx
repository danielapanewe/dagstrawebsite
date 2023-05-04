import Title from './Title';
import { Fade } from 'react-awesome-reveal';

function Whycamera({
    title,
    image,
    boldtextone,
    thintextone,
    descriptionfeature,
    thintextwo,
    stylescontainer,
    stylestitle,
}) {
    return (
        <section className={` ${stylescontainer}`}>
            <div className="containeur">
                <Title
                    nametitle={`${title}`}
                    className={` text-center after:bg-textcolor mb-6 ${stylestitle}`}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
                    <img src={image} alt="image de camera" className="w-full" />
                    <div className="content flex flex-col gap-4  pb-8 pt-4">
                    <Fade cascade damping={0.1} direction={'up'} triggerOnce>
                        <p>
                            <b>{boldtextone}</b>

                            {thintextone}
                        </p>
                        <ul className="list-disc flex flex-col gap-2 pl-8">
                            {descriptionfeature.map(
                                (descriptionfeatureitem) => (
                                    <li key={descriptionfeatureitem.id}>
                                        {descriptionfeatureitem.content}
                                    </li>
                                )
                            )}
                        </ul>
                        <p>{thintextwo}</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whycamera;
