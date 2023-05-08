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
                text={` Si vous avez besoin de nos services... nous sommes disponibles`}
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
