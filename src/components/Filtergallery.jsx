import { projectitem, projectbtnnav } from '../constants';
import { useState, useEffect } from 'react';
import Modal from './Modal';

// const Filtergallery = () => {
//     const [filterGal, setFilterGal] = useState(null);
//     const [active, setActive] = useState('tout');
//     // const [showModals, setShowModals] = useState(false);

//     // useEffect(() => {
//     //     setFilterGal(projectitem);
//     // }, []);

//     const handleImageClick = (projectitem) => {
//         setFilterGal(projectitem);
//     };

//     const handleCloseModal = () => {
//         setFilterGal(null);
//     };

//     const handleClick = (e) => {
//         const btnValue = e.target.value;
//         setActive(btnValue);
//         const newFilterGal = projectitem.filter(
//             (item) => item.categorie === btnValue
//         );
//         if (btnValue === 'tout') {
//             setFilterGal(projectitem);
//         } else {
//             setFilterGal(newFilterGal);
//         }
//     };

//     return (
//         <>
//             <div className="nav__project my-8">
//                 <ul className="containeur flex gap-8 flex-wrap items-start  gap-y-4">
//                     {projectbtnnav.map((item, id) => {
//                         const { name, value } = item;
//                         return (
//                             <li className="nav-item " key={id}>
//                                 <button
//                                     className={`${
//                                         active === value
//                                             ? 'text-primarycolor underline pb-4'
//                                             : 'text-textcolor'
//                                     }`}
//                                     value={value}
//                                     onClick={handleClick}
//                                 >
//                                     {name}
//                                 </button>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>

//             <div className="project__containeur containeur grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {filterGal &&
//                     filterGal.map((element, id) => {
//                         return (
//                             <>
//                                 <div key={id} className="relative">
//                                     <img
//                                         src={element.image}
//                                         alt=""
//                                         className="w-full"
//                                     />
//                                     <i
//                                         className="uil uil-info-circle absolute bottom-0 right-0 p-1 text-3xl text-primarycolor bg-white cursor-pointer hover:text-textcolor"
//                                         onClick={() =>
//                                             handleImageClick(element)
//                                         }
//                                     ></i>
//                                 </div>
//                             </>
//                         );
//                     })}
//             </div>

//             {filterGal && (
//                 <Modal
//                     show={true}
//                     onHide={handleCloseModal}
//                     imageInfo={filterGal}
//                 ></Modal>
//             )}
//         </>
//     );

// };

const Filtergallery = () => {
    const [filter, setFilter] = useState('tout');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (projectitem) => {
        setSelectedImage(projectitem);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    const filterImages = () => {
        if (filter === 'tout') {
            return projectitem;
        } else {
            return projectitem.filter((image) => image.categorie === filter);
        }
    };

    return (
        <div>
            <div className="containeur ">
                <div className="flex gap-8 flex-wrap items-start  gap-y-4 my-8 ">
                    {projectbtnnav.map((category) => (
                        <button
                            key={category.id}
                            className={`${
                                filter === category.value && 'underline '
                            } text-primarycolor paragraph hover:text-textcolor `}
                            onClick={() => {
                                setFilter(category.value);
                            }}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className=" project__containeur containeur grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
                {filterImages().map((image, index) => (
                    <div className=" relative" key={index}>
                        <img
                            src={image.image}
                            alt={image.name}
                            className="w-[50%]"
                        />
                        <i
                            className="uil uil-info-circle absolute bottom-0 right-[30%] p-1 text-3xl text-primarycolor bg-white cursor-pointer hover:text-textcolor"
                            onClick={() => handleImageClick(image)}
                        ></i>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <Modal
                    show={true}
                    onHide={handleCloseModal}
                    imageInfo={selectedImage}
                ></Modal>
            )}
        </div>
    );
};
export default Filtergallery;
