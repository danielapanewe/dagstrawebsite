import { NavLink } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Secondcard = ({ image, title, text, order, path }) => (
    <>
        {/* <img src={image} alt={alt}  /> */}

        <div
            className={`hidden md:block w-full bg-no-repeat bg-cover h-[200px] md:h-auto`}
            style={{
                backgroundImage: `url(${image})`,
                order: `${order}`,
                backgroundPosition: 'right',
            }}
        >
         
        </div>
        <Fade triggerOnce >
            <div className="p-4 sm:p-8 md:py-16 md:px-10 bg-white flex flex-col gap-4 order-1 ">
                <h2 className="text-xl text-primarycolor font-bold">{title}</h2>
                <p>{text}</p>
                <NavLink
                    to={`${path}`}
                    className={`btn bg-primarycolor text-white self-start `}
                >
                    En savoir plus
                </NavLink>
            </div>
        </Fade>
    </>
);

export default Secondcard;
