import * as React from "react";
import {useSelector} from "react-redux";

import {getFilteredCards} from "../reducer/selectors";
import Card from "./card";

const CardsList:React.FunctionComponent = () => {
  const cards = useSelector(getFilteredCards);

  return (
    <ul className="site-main__list">
      {
        cards.map((card) => {
          return (
            <li key={card.title} className="site-main__item">
              <Card card={card}/>
            </li>
          );
        })
      }
    </ul>
  );
};

export default CardsList;
