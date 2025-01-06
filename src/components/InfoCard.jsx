const InfoCard = ({title, description, className = ""}) => {
    return <div className={className}>
    <h2 className="uppercase text-neutral-400 mb-3">{title}</h2>
    <p>
      {description}
    </p>
  </div>; 
  };
  
  export default InfoCard;