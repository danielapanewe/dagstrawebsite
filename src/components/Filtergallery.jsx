import { projectitem, projectbtnnav } from '../constants';
import { useState, useEffect } from 'react';

const Filtergallery = () => {
    const [filterGal, setFilterGal] = useState(null);
    const [active, setActive] = useState('tout');

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
                            <li className="nav-item">
                                <button
                                    className={`${
                                        active === value
                                            ? 'text-primarycolor underline pb-4'
                                            : 'text-textcolor'
                                    }`}
                                    key={id}
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
                        const { image } = element;
                        return (
                            <div key={id}>
                                <img src={image} alt="" className="w-full" />
                            </div>
                        );
                    })}
            </div>
        </>
    );
};

export default Filtergallery;
