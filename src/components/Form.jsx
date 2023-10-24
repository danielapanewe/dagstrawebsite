import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_vierpfk',
                'template_5a0uxdc',
                form.current,
                'gRlUMV_XGWE_TWeV1'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();

        alert('Vos informations ont bien été envoyées');
    };
    return (
        <div className="containeur pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className=" bg-primarycolor py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                    <div className=" px-8 ">
                        <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                            Nous contacter
                        </h1>
                        <p className=" text-white pb-8 lg:pr-4">
                            Vous avez une question ? Êtes-vous intéressé par un
                            partenariat avec nous? Vous avez des suggestions ou
                            vous voulez simplement dire bonjour ?
                            Contactez-nous. Nous sommes là pour vous.
                        </p>
                        <div className="flex pb-4 items-center">
                            <a
                                href="tel:+699 999 999"
                                className="flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-phone-call"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#ffffff"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                    <path d="M15 7a2 2 0 0 1 2 2" />
                                    <path d="M15 3a6 6 0 0 1 6 6" />
                                </svg>
                                <a
                                    href="tel:+4915231918349"
                                    className="pl-4 text-white text-base"
                                >
                                    +49 152 3191 8349
                                </a>
                            </a>
                        </div>
                        <a
                            href="mailto:info@cm.dagstra.com"
                            className="flex items-center pb-4"
                        >
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-mail"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#FFFFFF"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect
                                        x={3}
                                        y={5}
                                        width={18}
                                        height={14}
                                        rx={2}
                                    />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <p className="pl-4 text-white text-base">
                                info@cm.dagstra.com
                            </p>
                        </a>

                        <p className="text-white text-base">
                            Boîte postale : 15.289
                        </p>
                        <p className="text-lg text-white pt-10 tracking-wide">
                            Douala - Akwa, <br /> en face ancien Boulangerie
                            Saker
                        </p>
                    </div>
                </div>
                <div className=" bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                    
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        id="contact"
                        className="bg-white py-4 px-8 rounded-tr rounded-br"
                    >
                        <h1 className="xl:text-4xl text-3xl font-bold mb-6">
                            Entrez vos informations
                        </h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="full_name"
                                        className=" text-sm font-semibold leading-tight tracking-normal mb-2"
                                    >
                                        Nom Complet
                                    </label>
                                    <input
                                        required
                                        id="full_name"
                                        name="full_name"
                                        type="text"
                                        className="focus:outline-none focus:border focus:border-primarycolor font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                    />
                                </div>
                            </div>
                            <div className=" xl:flex xl:justify-end">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="email"
                                        className=" text-sm font-semibold leading-tight tracking-normal mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        required
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="focus:outline-none focus:border focus:border-primarycolor font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="phone"
                                        className=" text-sm font-semibold leading-tight tracking-normal mb-2"
                                    >
                                        Numéro
                                    </label>
                                    <input
                                        required
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="focus:outline-none focus:border focus:border-primarycolor font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-semibold  mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-primarycolor"
                                    rows={8}
                                    id="message"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="focus:outline-none transition duration-150 ease-in-out  rounded text-white btn bg-primarycolor"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
