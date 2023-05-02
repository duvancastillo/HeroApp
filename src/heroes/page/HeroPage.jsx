import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const navigate =   useNavigate()
  const { id } = useParams();
  const hero = useMemo(()=> getHeroById(id),[id]); 

  const onNavigateVolver = () =>{
    navigate(-1);

  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>alter ego</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>publisher</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>first appearance</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">characters</h5>
        <p>{hero.characters}</p>
        <button 
        className="btn btn-outline-primary"
        onClick={onNavigateVolver}
        >
          volver  
        </button>
      </div>
    </div>
  );
};
