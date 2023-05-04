import { Fade } from 'react-awesome-reveal';
function Bannernoslide({ image, text, navigation, stylebackimg }) {
    return (
        <section
            className={`banner py-40 ${stylebackimg}`}
            style={{
                backgroundImage: `linear-gradient(#1c276565,#1c276565) ,url(${image})`,
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="containeur">
                <Fade direction={'left'} triggerOnce>
                <h2
                    className="text-3xl lg:text-6xl text-white font-bold pb-3 
                "
                >
                    {text}
                </h2>
                <span className=" text-white ">{navigation}</span>
                </Fade>
            </div>
        </section>
    );
}

export default Bannernoslide;
