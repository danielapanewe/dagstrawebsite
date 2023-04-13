import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import {useState} from 'react';

function counter() {
    const [counterOn, setCounterOn] = useState(false);
    return (
       <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
         <div
            className="flex flex-col gap-8 py-28 containeur"
            style={{
                background:
                    ' linear-gradient(#1c276565,#1c276565) ,url(/src/assets/background-15.jpg)',
                    backgroundAttachment:'fixed',
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
            }}
        >
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Take the right step, do the big things.
            </h2>
            <div className="grid grid-cols-2  lg:grid-cols-4">
                <p className="text-white flex flex-col ">
                    {counterOn &&   <CountUp
                        start={0}
                        end={52}
                        duration={2}
                        delay={0}
                        className="text-4xl font-bold text-white "
                    />}
                  
                    <span className="text-normal ">Cases Solved</span>
                </p>
                <p className="text-white flex flex-col">
                    {counterOn && <CountUp start={0} end={164} duration={2} delay={0} className="text-4xl font-bold text-white" />}
                    
                    <span>Trained Experts</span>
                </p>
                <p className="text-white flex flex-col">
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0} className="text-4xl font-bold text-white"/>}
                    
                    <span>Branches</span>
                </p>
                <p className="text-white flex flex-col">
                {counterOn &&   <CountUp start={0} end={52} duration={2} delay={0} className="text-4xl font-bold text-white" />}
                  
                    <span>Satisfied Clients</span>
                </p>
            </div>
        </div>
       </ScrollTrigger>
    );
}

export default counter;
