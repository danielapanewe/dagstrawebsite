const firstcard = ({ title, content, icon }) => (
    <div className="firstcard__item flex flex-col gap-4 items-center">
        <div className="firstcard_icon">
            <ion-icon name={icon} class="text-2xl bg-[#fafafa] p-6 rounded-full border"></ion-icon>
        </div>
        <h5 className="text-primarycolor font-bold text-lg">{title}</h5>
        <p>{content}</p>
    </div>
);

export default firstcard;
