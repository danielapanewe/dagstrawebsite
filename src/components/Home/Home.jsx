import React from 'react';
import Menu from '../Menu';
import Banner from '../Banner';
import About from '../About';
import Ourservices from '../Ourservices';
import Whychooseus from '../Whychooseus';
import Calltoaction from '../Calltoaction';
import Cardwithtitle from '../Cardwithtitle';
import Counter from '../Counter';
import Footer from '../Footer';
import Partners from '../Partners';
import ButtonScrollToTop from '../ButtonScrollToTop';
import { employee } from '../../constants';

function Home() {
    return (
        <>
            <Menu />
            <Banner />
            <About />
            <Ourservices />
            <Whychooseus />
            <Calltoaction
                text={` Si vous avez besoin d'aide, n'hésitez pas à nous contacter. Nous sommes là pour vous aider`}
            />
            <Cardwithtitle title={`NOTRE EQUIPE`} cardcontent={employee} />
            <Counter />
            <Partners />
            <Footer />
            <ButtonScrollToTop></ButtonScrollToTop>
        </>
    );
}

export default Home;
