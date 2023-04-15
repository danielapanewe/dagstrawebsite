import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import contactimg from '../../assets/contactimg.jpg';
import Form from '../Form';

function Contact() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={contactimg}
                text={`Nous Contacter`}
                navigation={`Accueil >> Contact`}
            />
            <Form/>
            <Footer />
        </>
    );
}

export default Contact;
