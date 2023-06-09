const Firstcard = ({ title, content, icon }) => (
    <div className="firstcard__item flex flex-col gap-4 px-3 py-8 items-center hover:shadow-lg hover:-translate-y-2 transition-all ease-linear">
        <div className="firstcard_icon ">
            <ion-icon></ion-icon>
            <i
                className={`text-2xl bg-[#fafafa] py-4 px-5 rounded-full border text-gray-400 ${icon}`}
            ></i>
        </div>
        <h5 className="text-primarycolor font-bold text-lg">{title}</h5>
        <p>{content}</p>
    </div>
);

export default Firstcard;
