import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {ActionCreator} from "../reducer/reducer";
import {getCards, getFilteredCards} from "../reducer/selectors";
import Card from "./card";

const CardsList:React.FunctionComponent = () => {
  const cards = useSelector(getCards);
  const filteredCards = useSelector(getFilteredCards);
  const dispatch = useDispatch();

  return (
    <ul className="site-main__list">
      {
        cards.length
          ?
          filteredCards.map((card) => {
            return (
              <li key={card.id} className="site-main__item">
                <Card
                  card={card}
                  onLikeButtonClick={(id) => dispatch(ActionCreator.changeLikeState(id))}
                  onDeleteButtonClick={(id) => dispatch(ActionCreator.removeCard(id))}
                />
              </li>
            );
          })
          :
          <li>
            <p>Loading...</p>
          </li>
      }
    </ul>
  );
};

export default CardsList;
