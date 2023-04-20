import { projectitem } from '../constants';
import { useState } from 'react';

const Filtergallery = () => {
    const [items, setItems] = useState(projectitem);
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const filterItem = (catItem) => {
        const updateItem = projectitem.filter((currentItem) => {
            return currentItem.categorie === catItem;
        });

        setItems(updateItem);
        setActive(true);
    };

    return (
        <>
            <div className="nav__project my-8">
                <ul className="containeur flex gap-8 flex-wrap items-start  gap-y-4">
                    <li className="nav-item">
                        <a
                            className={`${
                                !active
                                    ? ' text-primarycolor underline  '
                                    : 'text-textcolor'
                            }`}
                            onClick={() => {
                                setItems(projectitem);
                            }}
                        >
                            Tout
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="cursor-pointer"
                            onClick={() => {
                                filterItem('applicationweb');
                            }}
                        >
                            Applications Web
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="cursor-pointer"
                            onClick={() => {
                                filterItem('applicationmobile');
                            }}
                        >
                            Application mobile
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                             className="cursor-pointer"
                            onClick={() => {
                                filterItem('siteweb');
                            }}
                        >
                            Sites Web
                        </a>
                    </li>
                </ul>
            </div>

            <div className="project__containeur containeur grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((element) => {
                    const { id, image } = element;
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
