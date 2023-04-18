import Firstcard from "./Firstcard";
import { featuresCamera } from '../constants';
function Camerafeature() {
    return (
        <section className="atouts mt-14">
        <div className="containeur">
            <h2 className="title text-primarycolor text-center">
               LES AVANTAGES DE NOS VIDEO SURVEILLANCE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-12">
                {featuresCamera.map((carditem) => (
                    <Firstcard key={carditem.id} {...carditem} />
                ))}
            </div>
        </div>
    </section>
    );
}

export default Camerafeature;
