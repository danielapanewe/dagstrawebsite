import React from 'react';

function Bannernoslide({image, text, navigation}) {
    return (
        <section
            className="banner py-28"
            style={{
                backgroundImage: `linear-gradient(#1c276565,#1c276565) ,url(${image})`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
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
