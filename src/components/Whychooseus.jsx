import React from 'react';
import whychooseusimg from '../assets/why-choose-us.jpg';

function Whychooseus() {
    return (
        <section className="whychooseus mt-14">
            <div className="containeur">
                <h2 className="title text-primarycolor text-center">
                    POURQUOI NOUS CHOISIR
                </h2>
                <div className="whychooseus__content grid grid-cols-1 lg:grid-cols-2 mt-12 gap-10 items-center">
                    <img src={whychooseusimg} alt="image alt" />
                    <div className="whychooseus__text flex flex-col gap-14">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-primarycolor font-bold text-xl">
                                <ion-icon
                                    name="flash"
                                    class="text-md mr-2"
                                ></ion-icon>
                                We are professionals
                            </h3>
                            <p>
                                We resource, train, speak, mentor and encourage;
                                marketplace leaders, business owners and career
                                professionals to be effective in the workplace.
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
                                With so many factors to consider when deciding
                                how to characterize your company , wouldn’t it
                                be great to have a group of forward-thinking,
                                well-informed individuals on board who know what
                                they’re doing?
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
    );
}

export default Whychooseus;
