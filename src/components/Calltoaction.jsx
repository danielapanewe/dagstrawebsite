import {  NavLink } from 'react-router-dom';
function Calltoaction({text}) {
    return (
        <section className="calltoaction bg-primarycolor mt-14">
            <div className="containeur flex py-16 flex-wrap text-center justify-center gap-6">
                <p className="font-bold text-white text-xl lg:text-3xl">
                   
                    {text}
                </p>
                <NavLink to="/Contact" className="btn bg-white text-primarycolor">
                     Contacter
                </NavLink>
            </div>
        </section>
    );
}

export default Calltoaction;
