import { useState } from 'react';
function Modal({ setShowModal, nomprojet }) {
    // const [showModal,setShowModal]= useState(isOpen);
    return (
        <>
            <div
                className="overlay fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.2)] z-[1000]"
                onClick={() => setShowModal(false)}
            ></div>
            <div
                id="defaultModal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 grid items-center h-full lg:top-[50%] lg:left-[50%] z-[1000] p-4 overflow-x-hidden overflow-y-auto lg:translate-x-[-50%] lg:translate-y-[-50%] "
            >
                <div className="relative">
                    <div className="relative bg-white shadow ">
                        <div className="flex items-center justify-between p-4 ">
                            <div>
                                <h3 className="text-2xl font-semibold text-primarycolor">
                                    {nomprojet}
                                </h3>
                                <p>Type du projet</p>
                            </div>

                            <button
                                type="button"
                                className="text-primarycolor bg-transparent font-bold hover:bg-primarycolor hover:text-white rounded-lg text-3xl absolute top-2 right-[9px]"
                                data-modal-hide="defaultModal"
                                onClick={() => setShowModal(false)}
                            >
                                <i className="uil uil-times"></i>
                            </button>
                        </div>

                        <div className="description p-4 space-y-2">
                            <h3 className="text-primarycolor text-xl font-bold">
                                Technologies
                            </h3>
                            <div className="flex gap-4 flex-wrap">
                                <span className=" inline-block px-2 py-1 bg-primarycolor text-white rounded-[10rem]">
                                    Bootstrap
                                </span>
                                <span className=" inline-block px-2 py-1 bg-primarycolor text-white rounded-[10rem]">
                                    Bootstrap
                                </span>
                                <span className=" inline-block px-2 py-1 bg-primarycolor text-white rounded-[10rem]">
                                    Bootstrap
                                </span>
                            </div>
                        </div>
                        <div className="description p-4 space-y-2">
                            <h3 className="text-primarycolor text-xl font-bold">
                                Description
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod labore exercitationem,
                                doloremque, maxime possimus nulla cupiditate
                                expedita eum natus ex ipsam at nisi officiis
                                iure provident distinctio recusandae porro quis.
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quod labore exercitationem,
                                doloremque, maxime possimus nulla cupiditate
                                expedita eum natus ex ipsam at nisi officiis
                                iure provident distinctio recusandae porro quis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
