import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { HeroCard } from "../componets";
import { getHeroByname } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroByname(q);

  const showSearch = (q.length === 0 );
  const showError = (q.length>0)&&(heroes.length === 0);



  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSubmitFomr = (e) => {
    e.preventDefault();

    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className="row">
        <h1>Search</h1>
        <hr />
        <div className="col-5">
          <h4>Searchign</h4>
          <hr />
          <form onSubmit={onSubmitFomr}>
            <input
              type="text"
              className="form-conntrol"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              placeholder="Search a hero"
            />

            <button className="btn btn-outline-primary mt-1">search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          <div
            className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn"  
          style={{display:showError ? '' : 'none'}}>
            no hero with, <b>{q}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
