const thirdcard = ({image,alt,nom,position,description}) => (
    <div className="card__item shadow-xl rounded-lg">
        <img src={image} alt={alt} />
        <div className="card__body p-3 sm:p-5 lg:p-7">
            <h3 className="text-lg font-bold text-primarycolor">{nom}</h3>
            <h5 className="text-sm font-normal ">{position}</h5>
            <p className="pt-4">{description}</p>
        </div>
    </div>
)



export default thirdcard