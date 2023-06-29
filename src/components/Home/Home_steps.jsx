import "../../scss/settings/Home/home_steps.scss";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <>
      <div className="container_steps">
        <div className="title_steps">
          <span className="title">Wystarczą 4 proste kroki</span>
          <div className="ornament"></div>
        </div>
        <div className="steps">
          <div className="step_one">
            <div className="svg"></div>
            <p className="action">Wybierz rzeczy</p>
            <div className="decoration"></div>
            <p className="hint">ubrania, zabawki, sprzęt, i inne</p>
          </div>
          <div className="step_two">
            <div className="svg"></div>
            <p className="action">Spakuj je</p>
            <div className="decoration"></div>
            <p className="hint">skorzystaj z worków na śmieci</p>
          </div>
          <div className="step_three">
            <div className="svg"></div>
            <p className="action">Zdecyduj komu chcesz pomóc</p>
            <div className="decoration"></div>
            <p className="hint">wybierz zaufane miejsce</p>
          </div>
          <div className="step_four">
            <div className="svg"></div>
            <p className="action">Zamów kuriera</p>
            <div className="decoration"></div>
            <p className="hint">kurier przyjedzie w dogodnym terminie</p>
          </div>
        </div>
        <div className="give_items_container">
          <Link to="/logowanie" className="give_items">
            ODDAJ<br></br>RZECZY
          </Link>
        </div>
      </div>
    </>
  );
};

export default Steps;
