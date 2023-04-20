const Secondcard = ({ image, title, text, order }) => (
    <>
        {/* <img src={image} alt={alt}  /> */}
        <div
            className={`hidden md:block w-full bg-no-repeat bg-cover h-[200px] md:h-auto `}
            style={{
                backgroundImage: `url(${image})`,
                order: `${order}`,
                backgroundPosition: 'center',
            }}
        ></div>
        <div className="p-4 sm:p-8 md:py-16 md:px-10 bg-white flex flex-col gap-4 order-1 ">
            <h2 className="text-xl text-primarycolor font-bold">{title}</h2>
            <p>{text}</p>
            <a href="#" className={`btn bg-primarycolor text-white self-start `}>
                Lire Plus
            </a>
        </div>
    </>
);

export default Secondcard;
