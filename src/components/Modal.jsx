import { useState } from 'react';
function Modal({ show, onHide, imageInfo }) {
    const openModal = show
        ? 'opacity-100 visible pointer-events-auto transition-opacity'
        : 'opacity-0 invisible pointer-events-none transition-opacity';
    return (
        <div className={openModal}>
            <div
                className="overlay fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,0.7)] z-[1000]"
                onClick={onHide}
            ></div>
            <div
                id="defaultModal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 grid items-center h-full lg:top-[50%] lg:left-[50%] z-[1000] p-4 overflow-x-hidden overflow-y-auto lg:translate-x-[-50%] lg:translate-y-[-50%] "
            >
                <div className="relative">
                    <div className="relative bg-white  rounded-2xl shadow-xl border border-b-primarycolor">
                        <div className="flex items-center justify-between p-4 ">
                            <button
                                type="button"
                                className="text-primarycolor bg-transparent font-bold hover:bg-primarycolor hover:text-white rounded-lg text-3xl absolute top-2 right-[9px]"
                                data-modal-hide="defaultModal"
                                onClick={onHide}
                            >
                                <i className="uil uil-times"></i>
                            </button>
                        </div>

                        {/* <div className="description p-4 space-y-2">
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
                        </div> */}
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-primarycolor">
                                {imageInfo.name}
                            </h3>
                        </div>
                        <div className="description p-4 pt-0 space-y-2">
                            <p>
                               {imageInfo.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
