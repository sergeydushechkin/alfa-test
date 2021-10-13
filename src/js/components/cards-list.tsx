import * as React from "react";
import Card from "./card";

const CardsList:React.FunctionComponent = () => {
  return (
    <ul className="site-main__list">
      <li className="site-main__item">
        <Card />
      </li>
    </ul>
  );
};

export default CardsList;
