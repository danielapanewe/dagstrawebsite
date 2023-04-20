

function Bannernoslide({image, text, navigation,stylebackimg}) {
    return (
        <section
            className={`banner py-40 ${stylebackimg}`}
            style={{
                backgroundImage: `linear-gradient(#1c276565,#1c276565) ,url(${image})`,
                backgroundAttachment: 'fixed',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'
                
            }}
        >
            <div className="containeur">
                <h2 className="text-3xl lg:text-6xl text-white font-bold">{text}</h2>
                <span className=" text-white">{navigation}</span>
            </div>
        </section>
    );
}

export default Bannernoslide;
