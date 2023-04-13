import Menu from './components/menu/menu';
import Banner from './components/banner';
import Firstcard from './components/firstcard';
import Secondcard from './components/secondcard';
import Thirdcard from './components/thirdcard';
import Footer from './components/footer';
import Counter from './components/counter';
import { featuresItem, employee } from './constants';
import imageserviceone from './assets/service1.jpg';
import imageservicetwo from './assets/service2.jpg';
import imageservicethree from './assets/service3.jpg';
import whychooseusimage from './assets/why-choose-us.jpg';

const App = () => (
   
        <main>
            <Menu />
            <Banner />
            <section className="atouts mt-14">
                <div className="containeur">
                    <h2 className="title text-primarycolor text-center">
                        WELCOME TO DAGSTRA
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
                        {featuresItem.map((carditem) => (
                            <Firstcard key={carditem.id} {...carditem} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="ourservice mt-14 bg-[#fafafa] py-16">
                <div className="containeur">
                    <h2 className="title text-primarycolor text-center">
                        NOS SERVICES
                    </h2>
                    <div className="ourservice__content mt-12">
                        <div className="card grid gap-4 md:gap-0 ">
                            <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
                                <Secondcard
                                    image={imageserviceone}
                                    title={`Business Consulting`}
                                    text={`As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.`}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg ">
                                <Secondcard
                                    image={imageservicetwo}
                                    title={`Tax consulting`}
                                    text={`Elixir serves clients across the country and around the world as they navigate an increasingly complex tax landscape. Our tax professionals draw on deep experience and industry-specific knowledge to deliver clients the insights and innovation they need.`}
                                    order={`2`}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
                                <Secondcard
                                    image={imageservicethree}
                                    title={`Advisory`}
                                    text={`To help you understand what this road looks like, we surveyed 1165 digital marketers across Europe and North America to explore current trends and priorities in digital marketing.`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="whychooseus mt-14">
                <div className="containeur">
                    <h2 className="title text-primarycolor text-center">
                        POURQUOI NOUS CHOISIR
                    </h2>
                    <div className="whychooseus__content grid grid-cols-1 lg:grid-cols-2 mt-12 gap-10 items-center">
                        <img src={whychooseusimage} alt="image alt" />
                        <div className="whychooseus__text flex flex-col gap-14">
                            <div className="flex flex-col gap-4">
                                <h3 className=" text-primarycolor font-bold text-xl">
                                    <ion-icon
                                        name="flash"
                                        class="text-md mr-2"
                                    ></ion-icon>
                                    We are professionals
                                </h3>
                                <p>
                                    We resource, train, speak, mentor and
                                    encourage; marketplace leaders, business
                                    owners and career professionals to be
                                    effective in the workplace.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className=" text-primarycolor font-bold text-xl">
                                    <ion-icon
                                        name="bulb"
                                        class="text-md mr-2"
                                    ></ion-icon>
                                    We Are Creative
                                </h3>
                                <p>
                                    With so many factors to consider when
                                    deciding how to characterize your company ,
                                    wouldn’t it be great to have a group of
                                    forward-thinking, well-informed individuals
                                    on board who know what they’re doing?
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className=" text-primarycolor font-bold text-xl">
                                    <ion-icon
                                        name="alarm"
                                        class="text-md mr-2"
                                    ></ion-icon>
                                    24/7 Great Support
                                </h3>
                                <p>
                                    Design clever and compelling marketing
                                    strategies, improve product positioning, and
                                    drive conversion rates, Elixir is all time
                                    available to guide you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="calltoaction bg-primarycolor mt-14">
                <div className="containeur flex py-16 flex-wrap text-center justify-center gap-6">
                    <p className="font-bold text-white text-3xl">
                        If you have any query related invesment...we are
                        available 24/7
                    </p>
                    <a href="#" className="btn bg-white text-primarycolor">
                        Contact Us
                    </a>
                </div>
            </section>

            <section className="notreequipe mt-14">
                <div className="containeur">
                    <h2 className="title text-primarycolor text-center">
                        NOTRE EQUIPE
                    </h2>
                    <div className="notreequipe__content mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {employee.map((carditem) => (
                            <Thirdcard key={carditem.id} {...carditem} />
                        ))}
                    </div>
                </div>
            </section>

            <section className=' mt-12'>
                <Counter/>
            </section>
            <Footer />
        </main>
    
);

export default App;
