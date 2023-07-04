import "../../scss/settings/Home/home_cards.scss";
import React, { useState } from "react";

const Cards = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const handleClick = (divNumber) => {
    setActiveDiv(divNumber);
  };

  return (
    <>
      <div className="section_fundation">
        <div className="container_fundations">
          <div className="tittle_cards">Komu pomagamy?</div>
          <div className="ornament"></div>
          <div className="types_of_fundation">
            <button className="fundations" onClick={() => handleClick(1)}>
              Fundacjom
            </button>
            <button className="organisation" onClick={() => handleClick(2)}>
              Organizacjom<br></br>pozarządowym
            </button>
            <button className="local_collection" onClick={() => handleClick(3)}>
              Lokalnym<br></br> zbiórkom
            </button>
          </div>
          <div className="describe_fundation">
            <div className={activeDiv === 1 ? "content" : "hidden"}>
              <p className="describtion_fundation">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
                pomagają i czego potrzebują.
              </p>
              <div className="first_fundation">
                <div className="name">
                  <p className="name_fundation">Fundacja “Dbam o Zdrowie”</p>
                  <p className="target">
                    Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                    życiowej.
                  </p>
                </div>
                <p className="type">
                  ubrania, jedzenie, sprzęt AGD, meble, zabawki
                </p>
              </div>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Fundacja “Dla dzieci”</p>
                  <p className="target">
                    Cel i misja: Pomoc dzieciom z ubogich rodzin.
                  </p>
                </div>
                <p className="type">ubrania, meble, zabawki</p>
              </div>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Fundacja “Bez domu”</p>
                  <p className="target">
                    Cel i misja: Pomoc dla osób nie posiadających miejsca
                    zamieszkania.
                  </p>
                </div>
                <p className="type">ubrania, jedzenie, ciepłe koce</p>
              </div>
              <div className="pages"><p className="first_page">1</p><p className="secondary_page">2</p><p className="third_page">2</p></div>
            </div>
            <div className={activeDiv === 2 ? "content" : "hidden"}>
              <p className="describtion_fundation">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Organizacja “Lorem Ipsum 1”</p>
                  <p className="target">
                    Quis varius quam quisque id diam vel quam elementum
                    pulvinar.
                  </p>
                </div>
                <p className="type">Egestas, sed, tempus</p>
              </div>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Organizacja “Lorem Ipsum 2”</p>
                  <p className="target">
                    Hendrerit gravida rutrum quisque non tellus orci ac auctor
                    augue.
                  </p>
                </div>
                <p className="type">Ut, aliquam, purus, sit, amet</p>
              </div>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Organizacja “Lorem Ipsum 3”</p>
                  <p className="target">
                    Scelerisque in dictum non consectetur a erat nam.
                  </p>
                </div>
                <p className="type">Mi, quis, hendrerit, dolor</p>
              </div>
            </div>
            <div className={activeDiv === 3 ? "content" : "hidden"}>
              <p className="describtion_fundation">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Organizacja “Lorem Ipsum 11”</p>
                  <p className="target">
                    Quis varius quam quisque id diam vel quam elementum
                    pulvinar.
                  </p>
                </div>
                <p className="type">Egestas, sed, tempus</p>
              </div>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Organizacja “Lorem Ipsum 22”</p>
                  <p className="target">
                    Hendrerit gravida rutrum quisque non tellus orci ac auctor
                    augue.
                  </p>
                </div>
                <p className="type">Ut, aliquam, purus, sit, amet</p>
              </div>
              <div className="fundation">
                <div className="name">
                  <p className="name_fundation">Organizacja “Lorem Ipsum 33”</p>
                  <p className="target">
                    Scelerisque in dictum non consectetur a erat nam.
                  </p>
                </div>
                <p className="type">Mi, quis, hendrerit, dolor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
