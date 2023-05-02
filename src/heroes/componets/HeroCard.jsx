import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroesImageUrl = `/assets/heroes/${id}.jpg`;
  
  return (
    <div className="row animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4 ">
            <img className="card-img" src={heroesImageUrl} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
                <h5 className="card-tittle">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>  
                {
                  (alter_ego !== characters) && <p>{characters}</p>
                }
                <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
                </p>
                <Link to={`/hero/${id}`}>
                    mas...                
                </Link>

              
            </div> 

          </div>
        </div>
      </div>
    </div>
  );
};
