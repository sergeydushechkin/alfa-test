import * as React from "react";
import {CardData} from "../types";

interface Props {
  card: CardData;
  onLikeButtonClick: (string) => void;
  onDeleteButtonClick: (string) => void;
}

const Card:React.FunctionComponent<Props> = (props: Props) => {
  const {card, onLikeButtonClick, onDeleteButtonClick} = props;
  const {id, title, thumbnail, isLiked, href, explanation} = card;

  return (
    <article className="card">
      <figure className="card__content">
        <a className="card__image-link" href={href} target="_blank" rel="noreferrer">
          <div className="card__image-wrapper">
            <img className="card__image" src={thumbnail} width="200" height="100" alt={explanation} />
          </div>
        </a>
        <figcaption className="card__text">
          <h3 className="card__heading">{title}</h3>
        </figcaption>
      </figure>
      <div className="card__controls">
        <button className={`button card__button${isLiked && ` button--active`}`} type="button" aria-label="like" onClick={() => onLikeButtonClick(id)}>
          <svg width="24" height="24" aria-hidden="true">
            <use xlinkHref="#icon-thumb"></use>
          </svg>
        </button>
        <button className="button card__button card__button--delete" type="button" aria-label="delete" onClick={() => onDeleteButtonClick(id)}>
          <svg width="24" height="24" aria-hidden="true">
            <use xlinkHref="#icon-recycle"></use>
          </svg>
        </button>
      </div>
    </article>
  );
};

export default Card;
