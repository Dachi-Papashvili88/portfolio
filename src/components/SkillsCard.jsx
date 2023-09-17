const SkillsCard = ({ icon, title, text }) => {
    return (
      <article>
        <div className="flex flex-col justify-center items-center">
        <span>{icon}</span>
        <h4 className='mt-6 font-bold'>{title}</h4>
        </div>
        
        <p className='mt-2 text-slate-500'>{text}</p>
      </article>
    );
  };
  export default SkillsCard;