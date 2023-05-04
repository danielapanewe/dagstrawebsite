import { projectitem, projectbtnnav } from '../constants';
import { useState, useEffect } from 'react';
import Modal from './Modal';

const Filtergallery = () => {
    const [filterGal, setFilterGal] = useState(null);
    const [active, setActive] = useState('tout');
    const [showModals, setShowModals] = useState(false);

    useEffect(() => {
        setFilterGal(projectitem);
    }, []);

    const handleClick = (e) => {
        const btnValue = e.target.value;
        setActive(btnValue);
        const newFilterGal = projectitem.filter(
            (item) => item.categorie === btnValue
        );
        if (btnValue === 'tout') {
            setFilterGal(projectitem);
        } else {
            setFilterGal(newFilterGal);
        }
    };

    return (
        <>
            <div className="nav__project my-8">
                <ul className="containeur flex gap-8 flex-wrap items-start  gap-y-4">
                    {projectbtnnav.map((item, id) => {
                        const { name, value } = item;
                        return (
                            <li className="nav-item " key={id}>
                                <button
                                    className={`${
                                        active === value
                                            ? 'text-primarycolor underline pb-4'
                                            : 'text-textcolor'
                                    }`}
                                    value={value}
                                    onClick={handleClick}
                                >
                                    {name}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="project__containeur containeur grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filterGal &&
                    filterGal.map((element, id) => {
                        const { image, name } = element;
                        return (
                            <div key={id} className="relative">
                                <img src={image} alt="" className="w-full" />
                                <i
                                    className="uil uil-info-circle absolute bottom-0 right-0 p-1 text-3xl text-primarycolor bg-white cursor-pointer hover:text-textcolor"
                                    onClick={() => {
                                        setShowModals(true);
                                    }}
                                ></i>

                                {showModals && (
                                    <Modal
                                        setShowModal={setShowModals}
                                        nomprojet={name}
                                    />
                                )}
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Filtergallery;
