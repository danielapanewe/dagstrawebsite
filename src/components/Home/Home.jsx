import React from 'react';
import Menu from '../menu';
import Banner from '../banner';
import About from '../About';
import Ourservices from '../Ourservices';
import Whychooseus from '../Whychooseus';
import Calltoaction from '../Calltoaction';
import Ourteam from '../Ourteam';
import Counter from '../Counter';
import Footer from '../Footer';

function Home() {
    return (
        <>
        <Menu />
        <Banner />
        <About/>
        <Ourservices/>
        <Whychooseus/>
        <Calltoaction/>
        <Ourteam/>
        <Counter/>
        <Footer/>
        </>
    );
}

export default Home;