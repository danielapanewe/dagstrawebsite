import React from 'react';
import Menu from '../Menu';
import Banner from '../banner';
import About from '../About';
import Ourservices from '../Ourservices';
import Whychooseus from '../Whychooseus';
import Calltoaction from '../Calltoaction';
import Cardwithtitle from '../Cardwithtitle';
import Counter from '../Counter';
import Footer from '../Footer';
import Partners from '../Partners';
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
                text={` If you have any query related invesment...we are available
            24/7`}
            />
            <Cardwithtitle title={`NOTRE EQUIPE`} cardcontent={employee} />
            <Counter />
            <Partners />
            <Footer />
        </>
    );
}

export default Home;
