import { Fade, Zoom } from 'react-awesome-reveal';

function Description({name, paragraph1, paragraph2, paragraph3}) {
    return (
        <section>
            <div className="containeur">
            <Zoom triggerOnce>
                <h2 className="title text-primarycolor text-center mt-12 mb-8">DESCRIPTION</h2>
              </Zoom>
                <div className="flex flex-col gap-4">
                <p>
                    <b>{name}</b>{paragraph1}
                </p>
                <p>
                    {paragraph2}
                </p>
                <p>
                   {paragraph3}
                </p>
                </div>
                
            </div>
        </section>
    );
}

export default Description;
