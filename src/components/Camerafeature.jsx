import Firstcard from './Firstcard';
import { featuresCamera } from '../constants';
import { Fade, Zoom } from 'react-awesome-reveal';
function Camerafeature() {
    return (
        <section className="atouts mt-14">
            <div className="containeur">
                <Zoom triggerOnce>
                    <h2 className="title text-primarycolor text-center">
                        LES AVANTAGES DE NOS VIDEOS SURVEILLANCE
                    </h2>
                </Zoom>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
                    <Fade cascade damping={0.3} direction={'up'} triggerOnce>
                        {featuresCamera.map((carditem) => (
                            <Firstcard key={carditem.id} {...carditem} />
                        ))}
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Camerafeature;
