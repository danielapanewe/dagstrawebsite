import Menu from "../Menu";
import Footer from "../Footer";
import Bannernoslide from "../Bannernoslide";
import learning from "../../assets/learningbackimg.jpg"
function Formation() {
    return (
        <><Menu />
         <Bannernoslide
                image={learning}
                text={`FORMATION`}
                navigation={`Services >> Formation`}
            />
        <Footer />
        </>
    );
}

export default Formation;
