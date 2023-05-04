import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';
import bacgroundimage from '../assets/background-15.jpg'


function Counter() {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
        >
            <div
                className="flex flex-col gap-8 py-28 containeur"
                style={{
                    background: `linear-gradient(#1c276565,#1c276565) ,url(${bacgroundimage})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase">
                    Nos chiffres-clé
                </h2>
                <div className="grid grid-cols-2  lg:grid-cols-4">
                    <p className="text-white flex flex-col ">
                      <span  className="text-4xl font-bold text-white ">
                        +
                        {counterOn && (
                            <CountUp
                                start={0}
                                end={2500}
                                duration={2}
                                delay={0}
                               
                            />
                        )}
                      </span>

                        <span className="text-normal ">Cases resolved</span>
                    </p>
                    <p className="text-white flex flex-col">
                        <span   className="text-4xl font-bold text-white">+
                        {counterOn && (
                            <CountUp
                                start={0}
                                end={20}
                                duration={2}
                                delay={0}
                              
                            />
                        )}
                        </span>

                        <span>Trainee expert</span>
                    </p>
                    <p className="text-white flex flex-col">
                       <span className="text-4xl font-bold text-white">+
                       {counterOn && (
                            <CountUp
                                start={0}
                                end={1000}
                                duration={2}
                                delay={0}
                          
                            />
                        )}
                       </span>

                        <span>Clients satisfaits</span>
                    </p>
                    <p className="text-white flex flex-col">
                       <span  className="text-4xl font-bold text-white"> +
                       {counterOn && (
                            <CountUp
                            
                                start={0}
                                end={15}
                                duration={2}
                                delay={0}
                               
                            />
                        )}
                       </span>

                        <span>Année d expérience</span>
                    </p>
                </div>
            </div>
        </ScrollTrigger>
    );
}

export default Counter;
