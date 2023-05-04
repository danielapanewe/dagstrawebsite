import Secondcard from './Secondcard';
import { Fade } from 'react-awesome-reveal';

function Cardservices({ image, title, text, order, detailservice }) {
    return (
        <>
            <div
                className={`hidden md:block w-full bg-no-repeat bg-cover h-[250px] self-center rounded-sm`}
                style={{
                    backgroundImage: `url(${image})`,
                    order: `${order}`,
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className="p-4 sm:p-8 md:py-16 md:px-10 bg-white flex flex-col gap-4 order-1 ">
                <Fade cascade damping={0.1} direction={'up'} triggerOnce>
                    <h2 className="text-xl text-primarycolor font-bold text-center">
                        {title}
                    </h2>
                    <p>{text}</p>
                    <ul className="list-disc pl-8 ">
                        {detailservice.map((detailserviceitem) => (
                            <li key={detailserviceitem.id} className="mb-2">
                                {detailserviceitem.content}
                            </li>
                        ))}
                    </ul>
                </Fade>
            </div>
        </>
    );
}

export default Cardservices;
